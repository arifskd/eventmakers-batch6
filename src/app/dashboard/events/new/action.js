"use server";

import { prisma } from "@/utils/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function createEventAction(_, formData) {
  const name = formData.get("name");
  const description = formData.get("description");
  const city = formData.get("city");
  const isOnline = formData.get("isOnline");
  const location = formData.get("location");

  if (!name || !description || !city || !isOnline || !location) {
    return {
      success: false,
      message: "Please fill all the fields",
    };
  }

  await prisma.event.create({
    data: {
      name,
      description,
      city,
      location,
      isOnline: isOnline === "true",
      authorId: payload.id,
    },
  });

  return {
    success: true,
    message: "Event created",
  };
}
