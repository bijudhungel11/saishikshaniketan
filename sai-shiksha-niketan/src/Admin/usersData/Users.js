import React, { useEffect } from "react";
import "./Users.css";
import { useDispatch, useSelector } from "react-redux";
import { userListAction } from "../../redux/actions/userAction";
import ManageMember from "../ManageMember";
const Users = () => {
  const usersList = useSelector((state) => state.usersList);
  const { error, loading, users } = usersList;

  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userListAction());
  }, []);
  return (
    <>
      <ManageMember
        member="Users"
        memberImg="users.png"
        viewClassesRoute="/testroutes"
      />
    </>
  );
};

export default Users;
