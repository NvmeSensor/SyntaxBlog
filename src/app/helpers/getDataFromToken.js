import jwt from "jsonwebtoken";

export default function getDataFromToken(request) {
  try {
    const token = request.cookies.get("token")?.value || "";

    if (!token) {
      throw new Error("No token found");
    }

    const data = jwt.verify(token, process.env.TOKEN_SECRET);

    return {
      id: data.id,
      name: data.name,
      username: data.username,
      email: data.email,
      bio: data.bio,
      role: data.role,
    };
  } catch (error) {
    throw new Error("Error while getting data from token");
  }
}
