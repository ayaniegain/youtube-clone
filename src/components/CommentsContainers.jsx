import { comment } from "postcss";
import React from "react";

const commentsData = [
  {
    name: "Ayan Biswas1",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Ayan Biswas",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Ayan Biswas",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
  {
    name: "Ayan Biswas2",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Ayan Biswas",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Ayan Biswas",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        replies: [
          {
            name: "Ayan Biswas",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            replies: [],
          },
          {
            name: "Ayan Biswas",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Ayan Biswas3",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex my-2 shadow-sm bg-gray-100 p-2 rounded-lg">
      <img
        src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        alt="user"
        className="w-12 h-12"
      />
      <div className="px-3">
        <p className="font-bold"> {name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
 
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>

    <Comment  data={comment} />
    <div className="pl-4 border border-l-gray-600 ml-5">
      <CommentsList  comments={comment.replies} />
    </div>
    </div>
  ));
};

function CommentsContainers() {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
}

export default CommentsContainers;
