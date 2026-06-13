import { expect, test } from "@playwright/test";
import { validateJsonSchema } from "../../../resources/helpers/validateJsonSchema";
import { RoomClient } from "../../../resources/clients/RoomClient";
const roomClient = new RoomClient();

test.describe("room/ DELETE requests @room", () => {
  test("DELETE /rooms to delete a room", async () => {
    const roomid = 3;
    const response = await roomClient.deleteRoom(roomid);
    console.log(response);
    expect(response.status).toBe(202);
    await validateJsonSchema("DELETE_room", "room", response);
  });
});
