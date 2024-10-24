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

export async function createOrganizer(organizer) {
  const response = await fetch("/organizers", {
    method: "POST",
    body: JSON.stringify({
      ...organizer,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const result = await response.json();
  return result;
}

export async function getOrganizerById(organizerId) {
  const response = await fetch(`/organizers/${organizerId}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const result = await response.json();
  return result;
}
