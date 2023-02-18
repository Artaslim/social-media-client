import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  console.log(imageHostKey);
  const handleAddContent = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const content = {
            name: data.name,
            content: data.content,
            email: data.email,
            text: data.text,
            location: data.location,
            image: imgData.data.url,
          };
          fetch("http://localhost:5000/socialCards", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(content),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/media");
            });
        }
      });
  };
  return (
    <div className="w-96 p-7 ">
      <h2 className="text-4xl text-primary">Add your Content</h2>
      <form onSubmit={handleSubmit(handleAddContent)}>
        <div className="form-control w-full max-w-xs ">
          <label className="label">
            <span className="label-text font-semibold text-accent">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="input input-bordered border-accent text-accent w-full max-w-xs "
          />
          {errors.name && (
            <p className="text-primary" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs ">
          <label className="label">
            <span className="label-text font-semibold text-accent">Email</span>
          </label>
          <input
            type="text"
            {...register("email", { required: "Email Address is required" })}
            className="input input-bordered border-accent text-accent w-full max-w-xs "
          />
          {errors.email && (
            <p className="text-primary" role="alert">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold text-accent">
              Content Name
            </span>
          </label>
          <input
            type="text"
            {...register("content", { required: "name is required" })}
            className="input input-bordered border-accent text-accent w-full max-w-xs"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="form-control  w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold text-accent">
              Location
            </span>
          </label>
          <input
            type="text"
            {...register("location", { required: "name is required" })}
            className="input input-bordered border-accent text-accent w-full max-w-xs"
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs ">
          <label className="label">
            <span className="label-text font-semibold text-accent">
              Textarea
            </span>
          </label>
          <textarea
            type="text"
            {...register("text", { required: "Content is required" })}
            className="input input-bordered border-accent text-accent w-full max-w-xs"
          ></textarea>

          {errors.text && (
            <p className="text-primary" role="alert">
              {errors.text?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs ">
          <label className="label">
            <span className="label-text font-semibold text-accent">Image</span>
          </label>
          <input
            type="file"
            {...register("image", { required: "Photo is required" })}
            className="input input-bordered border-accent text-accent w-full max-w-xs "
          />
          {errors.image && (
            <p className="text-primary" role="alert">
              {errors.image?.message}
            </p>
          )}
        </div>

        <input
          className="font-semibold text-white mt-2 border rounded-lg p-2 bg-primary w-full "
          value="Add Content"
          type="submit"
        />
        {/* {signUpError && <p className="text-primary">{signUpError}</p>} */}
      </form>
    </div>
  );
};

export default Content;
