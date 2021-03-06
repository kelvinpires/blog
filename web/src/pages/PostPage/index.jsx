import { User } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostData, PostTitle } from "../../components/HomePosts/styles";
import { getPost } from "../../context/PostContext/apiCalls";
import {
  PostPageContainer,
  PostPageContent,
  PostPageImageContainer,
  PostPageImg,
  PostText,
  PostDataContent,
  PostVideo,
  UserContent,
  UserName,
  UserImageContent,
  UserImg,
} from "./styles";

export const PostPage = () => {
  const [post, setPost] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    getPost(postId, setPost);
    scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const postData =
    post != false ? new Date(post.createdAt).toLocaleDateString() : null;
  const postDataUpdated = post
    ? new Date(post.updatedAt).toLocaleDateString()
    : null;

  return (
    <>
      {post != false && (
        <>
          <PostPageContainer>
            <PostPageContent style={{ alignItems: "flex-start" }}>
              <PostTitle style={{ fontSize: "5rem" }}>{post.title}</PostTitle>
              <PostDataContent>
                {/* usuario */}
                <UserContent>
                  <UserImageContent>
                    {post.createdBy?.photo ? (
                      <UserImg
                        src={post.createdBy?.photo}
                        alt={post.createdBy.username}
                      />
                    ) : (
                      <User size={40} color="#9e6dc2" weight="duotone" />
                    )}
                  </UserImageContent>
                  <UserName>@{post.createdBy?.username}</UserName>
                </UserContent>
                {/* usuario */}
                <PostData style={{ fontSize: "2rem" }}>
                  Criado em {postData}
                </PostData>
                <PostData style={{ fontSize: "2rem" }}>
                  Atualizado em {postDataUpdated}
                </PostData>
              </PostDataContent>
            </PostPageContent>

            <PostPageContent style={{ gap: "4rem" }}>
              <PostPageImageContainer>
                <PostPageImg
                  src={post.image}
                  alt={post.title}
                  title={post.title}
                />
              </PostPageImageContainer>
              {post.text.split("\n").map((text, i) => (
                <PostText key={i}>{text}</PostText>
              ))}
              {post.video && <PostVideo src={post.video} controls></PostVideo>}
            </PostPageContent>
          </PostPageContainer>
        </>
      )}
    </>
  );
};
