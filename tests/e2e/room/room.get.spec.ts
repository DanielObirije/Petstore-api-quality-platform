import { validateJsonSchema } from "../../../resources/helpers/validateJsonSchema";
import { RoomClient } from "../../../resources/clients/RoomClient";
import { BaseClient } from "../../../resources/clients/BaseClient";
import { expect, test } from "@playwright/test";

const roomClient = new RoomClient();
const baseurl = BaseClient.URL;

interface Room {
  accessible: boolean;
  description: string;
  features: string[];
  image: string;
  roomName: string;
  roomPrice: number;
  roomid: number;
  type: string;
}

interface GetRoomsResponse {
  rooms: Room[];
}

test.describe("room/ GET requests @room", () => {
  test("GET all rooms @happy", async () => {
    const response = await fetch(baseurl + "api/room", {
      method: "GET",
    });
    expect(response.status).toBe(200);
    const body = await response.json();
    await validateJsonSchema("GET_all_rooms", "room", body);
  });

  test("GET a room by id @happy", async () => {
    const roomId = 1;
    const response = await fetch(baseurl + `api/room/${roomId}`, {
      method: "GET",
    });
    expect(response.status).toBe(200);
    const body = await response.json();
    await validateJsonSchema("GET_room_id", "room", body);
  });

  test("POST create room and validate creation @happy ", async () => {
    const roomPrice = 100;
    const roomName = "GET";
    const response = await roomClient.createRoom(roomName, roomPrice);

    expect(response.status).toBe(200);
    const roomsBody = await fetch(baseurl + "api/room", {
      method: "GET",
    });
    expect(roomsBody.status).toBe(200);
    const roomsBodyJson: GetRoomsResponse = await roomsBody.json();

    const rooms = roomsBodyJson.rooms.find((r) => r.roomName === roomName && r.roomPrice === roomPrice);
    expect(rooms).toBeDefined();

    // await validateJsonSchema("GET_room_id", "room", roomsBodyJson);
  });
});
