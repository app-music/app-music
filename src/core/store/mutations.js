/**
 * Created by xiaoconghu on 2018/4/1.
 */
import * as types from "./types";
import getters from "./getters";

const state = {
    currentMusic: null,
    playAll: {isPlay: false},
    currentMusicIndex: -1,
    currentMusicTime: null,
    playerDetailShow: false,
};
const mutations = {
    [types.CURRENT_MUSIC](state, param) {
        state.currentMusic = param;
    },
    [types.PLAY_ALL](state, param) {
        state.playAll = param;
    },
    [types.CURRENT_MUSIC_INDEX](state, param) {
        state.currentMusicIndex = param;
    },
    [types.CURRENT_MUSIC_TIME](state, param) {
        state.currentMusicTime = param;
    },
    [types.PLAYER_DETAIL_SHOW](state,param){
        state.playerDetailShow = param
    }
};
export default {
    state,
    mutations,
    getters
}