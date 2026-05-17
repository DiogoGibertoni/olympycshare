export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  location?: string;
  sports: string[];
  createdAt: Date;
}

export interface SportEvent {
  id: string;
  title: string;
  sport: string;
  description: string;
  date: Date;
  time: string;
  location: string;
  maxParticipants: number;
  currentParticipants: number;
  creatorId: string;
  status: "open" | "full" | "completed" | "cancelled";
  createdAt: Date;
}

export interface ParticipationRequest {
  id: string;
  eventId: string;
  userId: string;
  status: "pending" | "accepted" | "rejected";
  createdAt: Date;
}

export interface Friendship {
  id: string;
  requesterId: string;
  receiverId: string;
  status: "pending" | "accepted";
  createdAt: Date;
}

export interface SportGroup {
  id: string;
  name: string;
  sport: string;
  description: string;
  memberCount: number;
  createdAt: Date;
}
