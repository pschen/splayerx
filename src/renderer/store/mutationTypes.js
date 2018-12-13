export const Video = {
  // error state
  ERROR_CODE_UPDATE: 'ERROR_CODE_UPDATE',
  ERROR_MESSAGE_UPDATE: 'ERROR_MESSAGE_UPDATE',
  // network state
  SRC_UPDATE: 'SRC_UPDATE',
  CURRENT_SRC_UPDATE: 'CURRENT_SRC_UPDATE',
  NETWORK_STATE_UPDATE: 'NETWORK_STATE_UPDATE',
  BUFFERED_UPDATE: 'BUFFERED_UPDATE',
  CAN_PLAY_TYPE_UPDATE: 'CAN_PLAY_TYPE_UPDATE',
  CROSS_ORIGIN_UPDATE: 'CROSS_ORIGIN_UPDATE',
  PRELOAD_UPDATE: 'PRELOAD_UPDATE',
  // ready state
  READY_STATE_UPDATE: 'READY_STATE_UPDATE',
  SEEKING_UPDATE: 'SEEKING_UPDATE',
  // playback state
  DURATION_UPDATE: 'DURATION_UPDATE',
  PAUSED_UPDATE: 'PAUSED_UPDATE',
  ENDED_UPDATE: 'ENDED_UPDATE',
  PLAYED_UPDATE: 'PLAYED_UPDATE',
  SEEKABLE_UPDATE: 'SEEKABLE_UPDATE',
  CURRENT_TIME_UPDATE: 'CURRENT_TIME_UPDATE',
  DEFAULT_PLAYBACK_RATE_UPDATE: 'DEFAULT_PLAYBACK_RATE_UPDATE',
  RATE_UPDATE: 'RATE_UPDATE',
  AUTOPLAY_UPDATE: 'AUTOPLAY_UPDATE',
  LOOP_UPDATE: 'LOOP_UPDATE',
  // controls
  CONTROLS_UPDATE: 'CONTROLS_UPDATE',
  VOLUME_UPDATE: 'VOLUME_UPDATE',
  MUTED_UPDATE: 'MUTED_UPDATE',
  DEFAULT_MUTED_UPDATE: 'DEFAULT_MUTED_UPDATE',
  // meta info
  INTRINSIC_WIDTH_UPDATE: 'INTRINSIC_WIDTH_UPDATE',
  INTRINSIC_HEIGHT_UPDATE: 'INTRINSIC_HEIGHT_UPDATE',
  COMPUTED_WIDTH_UPDATE: 'COMPUTED_WIDTH_UPDATE',
  COMPUTED_HEIGHT_UPDATE: 'COMPUTED_HEIGHT_UPDATE',
  RATIO_UPDATE: 'RATIO_UPDATE',
  DELAY_UPDATE: 'DELAY_UPDATE',
  // tracks
  AUDIO_TRACK_LIST_UPDATE: 'AUDIO_TRACK_LIST_UPDATE',
  VIDEO_TRACK_LIST_UPDATE: 'VIDEO_TRACK_LIST_UPDATE',
  TEXT_TRACK_LIST_UPDATE: 'TEXT_TRACK_LIST_UPDATE',
};

export const Subtitle = {
  ADD_SUBTITLE: 'ADD_SUBTITLE',
  UPDATE_SUBTITLE: 'UPDATE_SUBTITLE',
  REMOVE_SUBTITLE: 'REMOVE_SUBTITLE',
  SUBTITLE_UPDATE: 'SUBTITLE_UPDATE',
  CURRENT_SUBTITLE_ID_UPDATE: 'CURRENT_SUBTITLE_UPDATE',
  OFF_SUBTITLE: 'OFF_SUBTITLE',
  REFRESH_SUBTITLE: 'REFRESH_SUBTITLE',
};

export const Input = {
  MOUSEMOVE_POSITION_UPDATE: 'MOUSEMOVE_POSITION_UPDATE',
  DOWN_KEYS_UPDATE: 'DOWN_KEYS_UPDATE',
};
