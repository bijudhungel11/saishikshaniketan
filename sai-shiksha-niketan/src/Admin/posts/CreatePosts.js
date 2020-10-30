import axios from "axios";
import React, { useState } from "react";
import "./CreatePosts.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction } from "../../redux/actions/postsAction";
import "./CreatePosts.css";
import { useEffect } from "react";
import ClockLoader from "react-spinners/ClockLoader";
const CreatePosts = () => {
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;
  console.log(userInfo);
  const { register, handleSubmit, errors, reset } = useForm();

  const [imgUrl, setImgUrl] = useState();

  /* if will help to respose back the image url from the uploadsrouter */
  const [file, setFile] = useState();
  const [fileTrue, setFileTrue] = useState(false);
  const handleChange = (event) => {
    setFile(event.target.files[0]);
    setFileTrue(true);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const file = event.target.files[0];
    const bodyformData = new FormData();
    bodyformData.append("image", file);
    axios
      .post("/api/uploads", bodyformData, config)
      .then((res) => {
        setImgUrl(res.data.fileName);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const createPost = useSelector((state) => state.createPost);
  const {
    loading: createPostLoading,
    success,
    error: createPostError,
  } = createPost;
  const dispatch = useDispatch();
  const onSubmitHandler = (data) => {
    console.log(data, imgUrl, userInfo);
    dispatch(createPostAction(data, imgUrl, userInfo));
  };

  useEffect(() => {
    if (success) {
      reset({
        heading: "",
      });
    }
  }, [success]);
  return (
    <div className="createpost__form">
      <form className="post__form" onSubmit={handleSubmit(onSubmitHandler)}>
        <h1 className="m-0 text-center bg-warning p-0">
          {createPostLoading ? (
            <ClockLoader
              size={50}
              color={"#e1ad38"}
              loading={createPostError}
              style={{ margin: "0 auto" }}
            />
          ) : createPostError ? (
            <p className="error">{createPostError.message}</p>
          ) : (
            "Create Posts"
          )}
        </h1>
        <div className="post__body">
          <div className="post__div">
            <label htmlFor="heading" className="post__label">
              Heading
            </label>
            <input
              type="text"
              className="post__input"
              id="heading"
              name="heading"
              ref={register({
                required: "Required",
              })}
            />
            <p className="errors">{errors.heading && errors.heading.message}</p>
          </div>
          <div className="post__div">
            <label htmlFor="image" className="post__label">
              Image
            </label>
            <input
              type="file"
              className="post__input image__upload"
              id="image"
              name="image"
              onChange={handleChange}
              ref={register({
                required: "Required",
              })}
            />
            <p className="errors">{errors.image && errors.image.message}</p>
          </div>
          <div className="post__div">
            <label htmlFor="description" className="post__label">
              Description
            </label>
            <textarea
              type="text"
              rows="5"
              cols="50"
              className="post__input"
              id="description"
              name="description"
              ref={register({
                required: "Required",
              })}
            />
            <p className="errors">
              {errors.description && errors.description.message}
            </p>
          </div>
          <div className="text-center">
            <button
              className="post__btn btn-success btn btn-lg font-weight-bolder"
              type="submit"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePosts;
