// ADD CLIP
const INITIAL_CLIP = {
  clip: [],
};
export const addClipReducer = (state = INITIAL_CLIP, action) => {
  const { payload } = action;
  // console.log('store payload', payload);
  switch (action.type) {
    case 'addCLIP':
      const clipItem = state.clip.find(
        (item) => item.headLine === payload.headLine
      );
      if (clipItem) return;
      else {
        const newClip = {
          date: payload.date,
          headLine: payload.headLine,
          abstract: payload.abstract,
          isClip: true,
        };
        state.clip.push(newClip);
      }

      return {
        clip: [...state.clip],
      };
    case 'UNCLIP':
      return {
        clip: state.clip.filter(
          (clipNews) => clipNews.headLine !== payload.headLine
        ),
      };

    default:
      return state;
  }
};
