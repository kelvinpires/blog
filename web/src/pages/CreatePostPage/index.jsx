import { Image, VideoCamera } from "phosphor-react";
import React, { useContext, useState } from "react";
import {
  CreateInputBox,
  CreatePostBox,
  CreatePostContainer,
  CreatePostForm,
  CreatePostInput,
  CreatePostLabel,
  CreatePostTextarea,
  FileLabel,
  UploadProgressContainer,
  UploadProgressPercent,
  PostSubmit,
} from "./styles";

import { storage } from "../../services/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createPost } from "../../context/PostContext/apiCalls";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { getUserInfo } from "../../context/AuthContext/apiCalls";

export const CreatePostPage = () => {
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const [progressFile, setProgressFile] = useState(null);
  const [files, setFiles] = useState(null);
  const [postId, setPostId] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const { auth_token, user_id } = useContext(AuthContext);
  const [createdBy, setCreatedBy] = useState({});

  const upload = (items) => {
    items.forEach((item) => {
      if (item.file) {
        try {
          const storageRef = ref(
            storage,
            `${item.label}/${user_id + "-" + item.file.name}`
          );
          const uploadTask = uploadBytesResumable(storageRef, item.file);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setProgressFile(Math.round(progress));
            },
            (error) => console.log(error),
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log(downloadURL);
                return setFiles((prev) => {
                  return { ...prev, [item.label]: downloadURL };
                });
              });
            }
          );
        } catch (err) {
          console.log(err);
        }
      }
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();

    upload([
      { file: image, label: "image" },
      { file: video, label: "video" },
    ]);
    getUserInfo(user_id, auth_token, setCreatedBy);
  };

  const submitPost = (e) => {
    e.preventDefault();
    createPost(
      auth_token,
      { title, text, ...files, createdBy },
      setPostId,
      setError,
      setSuccess
    );

    setImage("");
    setVideo("");
    setTitle("");
    setText("");
    setFiles(null);
    setProgressFile(null);
  };

  return (
    <CreatePostContainer>
      <CreatePostBox>
        {/* percentual de upload */}
        {progressFile && (
          <UploadProgressContainer>
            <UploadProgressPercent
              style={{ width: `${progressFile}%` }}
              children={`${progressFile}%`}
            />
          </UploadProgressContainer>
        )}

        <CreatePostForm>
          <CreateInputBox>
            {error && <h3>{error}</h3>}
            <CreatePostLabel htmlFor="title">Título</CreatePostLabel>
            <CreatePostInput
              name="title"
              id="title"
              type="text"
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </CreateInputBox>
          <CreateInputBox>
            <CreatePostLabel htmlFor="text">Texto</CreatePostLabel>
            <CreatePostTextarea
              name="text"
              id="text"
              placeholder="(Aperte ENTER caso queira mais de um parágrafo)"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></CreatePostTextarea>
          </CreateInputBox>
          <CreateInputBox
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5rem",
            }}
          >
            <FileLabel htmlFor="image">
              <Image size={40} color="#13ec49" weight="duotone" />
              {image ? image.name : "Imagem"}
            </FileLabel>
            <FileLabel htmlFor="video">
              <VideoCamera size={40} color="#eb0f0f" weight="duotone" />
              {video ? video.name : "Vídeo"}
            </FileLabel>
          </CreateInputBox>
          <CreatePostInput
            style={{ display: "none" }}
            name="image"
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => {
              setImage(e.target.files[0]);
              setProgressFile(null);
            }}
          />
          <CreatePostInput
            style={{ display: "none" }}
            name="video"
            id="video"
            type="file"
            accept="video/mp4"
            onChange={(e) => {
              setVideo(e.target.files[0]);
              setProgressFile(null);
            }}
          />
          <CreateInputBox
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              flexDirection: "column",
            }}
          >
            <PostSubmit
              disabled={image && progressFile === null ? false : true}
              onClick={handleUpload}
            >
              Fazer upload
            </PostSubmit>
            {progressFile === 100 && (
              <PostSubmit
                style={{ width: "100%" }}
                onClick={submitPost}
                disabled={image ? false : true}
              >
                Criar post
              </PostSubmit>
            )}
          </CreateInputBox>
        </CreatePostForm>
        {postId && success && (
          <a
            style={{ fontSize: "2rem", width: "100%", textAlign: "center" }}
            href={`https://blog-kelvinpires.vercel.app/post/${postId}`}
          >
            {success}
          </a>
        )}
      </CreatePostBox>
    </CreatePostContainer>
  );
};
