export  const CHANGE_LAYOUT_COLLAPSED='CHANGE_LAYOUT_COLLAPSED'

export const changeLayoutCollapsed = state => {
    return {
        type: CHANGE_LAYOUT_COLLAPSED,
        collapsed: !state.collapsed
    }
}