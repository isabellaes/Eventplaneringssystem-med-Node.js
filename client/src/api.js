export async function CreateEvent(event) {
  const response = await fetch("/events", {
    method: "POST",
    body: JSON.stringify({
      ...event,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const result = await response.json();
  return result;
}
