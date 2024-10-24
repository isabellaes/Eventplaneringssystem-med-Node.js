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
};

export async function getEvents() {
  const API_URL = "/events";

  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error("Det blev ett error när du skulle hämta alla events");
    }
    
    const events = await response.json();
    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    return []; 
  }
};
