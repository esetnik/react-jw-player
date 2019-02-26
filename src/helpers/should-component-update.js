function shouldComponentUpdate(prevProps, nextProps) {
  const hasFileChanged = prevProps.file !== nextProps.file;
  const hasPlaylistChanged = prevProps.playlist !== nextProps.playlist;
  const hasPlayerIdChanged = prevProps.playerId !== nextProps.playerId;

  return hasFileChanged || hasPlaylistChanged || hasPlayerIdChanged;
}

export default shouldComponentUpdate;
