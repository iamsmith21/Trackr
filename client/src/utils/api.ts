import type { CreateJobInput } from "../types";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

export async function getJobs() {
  try {
    const res = await fetch(`${API_URL}/jobs`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Failed to fetch jobs:", error);
    return [];
  }
}

export async function createJob(formData: CreateJobInput) {
  await fetch(`${API_URL}/jobs`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
}

export async function deleteJob(id: string) {
  await fetch(`${API_URL}/jobs/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });
}

export async function updateJob(id: string, formData: CreateJobInput) {
  await fetch(`${API_URL}/jobs/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
}

export async function loginUser(email: string, password: string) {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Login failed", error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}

export async function registerUser(
  firstname: string,
  lastname: string,
  email: string,
  password: string,
) {
  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname, lastname, email, password }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Login failed", error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
