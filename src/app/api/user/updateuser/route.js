import User from "@/models/userModel";
import connectDB from "@/app/config/db";
import getDataFromToken from "@/app/helpers/getDataFromToken";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

connectDB();

export async function PUT(request) {
  try {
    const { name, username, email, bio, password, newPassword } =
      await request.json();
    const { email: userEmail } = getDataFromToken(request);
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const newUser = {
      name: name || user.name,
      username: username || user.username,
      email: email || user.email,
      bio: bio || user.bio,
      password: newPassword
        ? await bcrypt.hash(newPassword, 10)
        : user.password,
    };

    const updatedUser = await User.findOneAndUpdate(
      { email: userEmail },
      newUser,
      { new: true }
    );

    return NextResponse.json({
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
