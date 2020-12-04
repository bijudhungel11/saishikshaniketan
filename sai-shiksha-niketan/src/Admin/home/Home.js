import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../Card";
import { studentsLengthAction } from "../../redux/actions/studentAction";
import { teachersLengthAction } from "../../redux/actions/teacherAction";
import {
  userListAction,
  usersLengthAction,
} from "../../redux/actions/userAction";

const Home = () => {
  const [postsLength, setPostsLength] = useState({});
  const dispatch = useDispatch();
  const studentsLength = useSelector((state) => state.studentsLength);
  const { length: students, loading: teacherLoading } = studentsLength;

  const teachersLength = useSelector((state) => state.teachersLength);
  const { length: teachers, loading: studentLoading } = teachersLength;

  const usersLength = useSelector((state) => state.usersLength);
  const { length: users, loading: userLoading } = usersLength;

  const usersList = useSelector((state) => state.usersList);
  const { users: usersValue } = usersList;

  const studentsValue = usersValue?.filter(
    (user) => user.type.toLowerCase() === "student"
  );
  const teachersValue = usersValue?.filter(
    (user) => user.type.toLowerCase() === "teacher"
  );

  /* console.table(usersValue); */
  const adminValue = usersValue?.filter(
    (user) => user.type.toLowerCase() === "admin"
  );

  useEffect(() => {
    dispatch(studentsLengthAction());
    dispatch(teachersLengthAction());
    dispatch(usersLengthAction());
    dispatch(userListAction());
  }, [dispatch]);

  useEffect(() => {
    const value = async () => {
      const postsValue = await Axios.get("/api/ssnposts/getLength")
        .then((res) => {
          setPostsLength(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    value();
  }, []);

  /*  console.log("the length of the teachers", teachers?.length);
  console.log("the length of the students is ", students?.length);
  console.log(users?.length); */
  const [data] = useState([
    {
      student: true,
      btn__title: "Students",
      title: "Manage  Students",
      img: "./images/student.png",
      description: "Click Below to Manage Students",
      route: "/students",
      btn__class: "btn-outline-success",
    },
    {
      teacher: true,
      title: "Manage Teachers",
      img: "./images/teacherfinal.png",
      description: "Click Below to Manage teachers",
      route: "/teachers",
      btn__title: "Teachers",
      btn__class: "btn-outline-info",
    },
    {
      post: true,
      title: "Manage Posts",
      img: "./images/post.png",
      description: "Click Below to Manage the posts",
      route: "/manageposts",
      btn__title: "Posts",
      btn__class: "btn-outline-danger",
    },
    {
      user: true,
      title: "Manage Users",
      img: "./images/users.png",
      description: "Click Below to Manage student component",
      route: "/users",
      btn__title: "Users",

      btn__class: "btn-outline-dark",
    },
    {
      title: "Results",
      img: "./images/resultfinal.png",
      description: "Click Below to manage the results",
      route: "/results",
      btn__title: "Results",

      btn__class: "btn-outline-dark",
    },
  ]);
  return (
    <>
      {teacherLoading ? (
        <h1>Loading....</h1>
      ) : studentLoading ? (
        <h1>Loading....</h1>
      ) : userLoading ? (
        <h1>Loading....</h1>
      ) : (
        <div className="main__sub card__container">
          {data.map((item, i) => (
            <Card
              length={
                item.teacher
                  ? teachers?.length
                  : item.student
                  ? students?.length
                  : item.user
                  ? users?.length
                  : item.post
                  ? postsLength.length
                  : 0
              }
              user={item.user}
              adminUsers={adminValue?.length}
              studentUsers={studentsValue?.length}
              teacherUsers={teachersValue?.length}
              value={true}
              key={i}
              title={item.title}
              img={item.img}
              description={item.description}
              route={item.route}
              btn__title={item.btn__title}
              btn__class={item.btn__class}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
