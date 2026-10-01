function bingo(ticket, win) {
  return ticket
    .reduce(
            (a, x) => (a + x[0].includes(String.fromCharCode(x[1])) ),
            0
           ) >= win
    ? "Winner!" : "Loser!";
}
