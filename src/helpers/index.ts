export const isWsOpen = (ws: any) => {
  return ws.readyState === ws.OPEN
}
