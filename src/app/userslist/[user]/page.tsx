import React from "react";

const User = async ({ params }: { params: { user: string } }) => {

    const { user } = await params;

  return <h1>{user}</h1>;
};

export default User;
