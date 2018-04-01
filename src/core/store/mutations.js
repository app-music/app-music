/**
 * Created by xiaoconghu on 2018/4/1.
 */
import * as types from "./types";
import getters from "./getters";
const state ={
  currentMusic :null,
  playAll:false
};
const mutations = {
  [types.CURRENT_MUSIC](state,param){
    state.currentMusic = param;
  },
  [types.PLAY_ALL](state,param){
    state.playAll = param;
  }
};
export default {
  state,
  mutations,
  getters
}