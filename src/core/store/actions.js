/**
 * Created by xiaoconghu on 2018/4/1.
 */
import * as types from './types'

export default {
    currentMusic({commit}, param) {
        commit(types.CURRENT_MUSIC, param)
    },
    playAll({commit}, param) {
        commit(types.PLAY_ALL, param);
    },
    currentMusicIndex({commit}, param) {
        commit(types.CURRENT_MUSIC_INDEX, param)
    },
    currentMusicTime({commit}, param) {
        commit(types.CURRENT_MUSIC_TIME, param)
    },
    playerDetailShow({commit}, param) {
        commit(types.PLAYER_DETAIL_SHOW, param)
    }
}