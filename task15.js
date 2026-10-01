function howManyTimes(time1, time2) {
  const start = new Date(time1).getTime() / 1000;
  const end = new Date(time2).getTime() / 1000;

  let strikes = 0;
  let currentEvent = Math.floor(start / 1800) * 1800;

  while (currentEvent < end) {
    const date = new Date(currentEvent * 1000);
    const mins = date.getMinutes();
    const hours = date.getHours();

    let strikesCount = 1;
    if (mins === 0) {
      const hour12 = hours % 12;
      strikesCount = hour12 === 0 ? 12 : hour12;
    }

    const eventStart = currentEvent;
    const eventEnd = currentEvent + strikesCount;

    const overlapStart = Math.max(start, eventStart);
    const overlapEnd = Math.min(end, eventEnd);

    if (overlapEnd > overlapStart) {
      strikes += (overlapEnd - overlapStart);
    }

    currentEvent += 1800;
  }

  return strikes;
}
