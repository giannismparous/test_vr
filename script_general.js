(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","minHeight":0,"backgroundColor":["#FFFFFF"],"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.playList_998617A7_88E3_943C_41D5_830DA8A5A1A9.set('selectedIndex', 0)","minWidth":0,"data":{"history":{},"name":"Player536","defaultLocale":"en","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"volume":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"rate":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"pitch":1}},"hash": "3cc36611f0a0ee6e04bf615a90917caae11e9f961d8eef78c89306f92b02e493", "definitions": [{"touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","mouseControlMode":"drag_rotation","arrowKeysAction":"translate","displayPlaybackBar":true,"viewerArea":"this.MainViewer","aaEnabled":true},{"id":"panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4","class":"Panorama","label":trans('panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4.label'),"hfov":360,"hfovMin":"135%","hfovMax":130,"data":{"label":"1"},"vfov":180,"thumbnailUrl":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_t.jpg","frames":[{"thumbnailUrl":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_t.jpg","cube":{"levels":[{"tags":"ondemand","height":2048,"class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_0/{face}/0/{row}_{column}.jpg","width":12288,"colCount":24},{"tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_0/{face}/1/{row}_{column}.jpg","width":6144,"colCount":12},{"tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_0/{face}/2/{row}_{column}.jpg","width":3072,"colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}]},{"duration":500,"id":"effect_408B9C93_5AA3_46F7_41C8_B963DF756D83","class":"FadeOutEffect"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_camera","initialSequence":"this.sequence_51C374B2_5A22_E795_41AE_5414A7CF0F2B","class":"PanoramaCamera","enterPointingToHorizon":true},{"duration":500,"id":"effect_4D1D092A_5AA5_4FD1_41BC_0F3CB6725740","class":"FadeOutEffect"},{"fieldOfViewOverlayOutsideColor":"#000000","id":"map_568203F8_5A23_6195_41B4_849561A32237","class":"Map","label":trans('map_568203F8_5A23_6195_41B4_849561A32237.label'),"data":{"label":"floorplan"},"width":727,"scaleMode":"fit_inside","minimumZoomFactor":0.5,"fieldOfViewOverlayRadiusScale":0.3,"height":652,"overlays":["this.overlay_988C7C7B_88BF_B414_41DC_11BFD2A72735","this.overlay_983DECE1_88A0_9434_41DE_BFA33B60F34B","this.overlay_986E1219_88A0_8C14_41D2_128538D53635","this.overlay_99CDF30D_88A0_8C0F_41D4_1CE7B0F03B55"],"image":{"levels":["this.imlevel_99F3C6C5_88E3_947C_41D5_BD0A43EAFFB2","this.imlevel_99F3D6C5_88E3_947C_41C9_6BD83169634D","this.imlevel_99F3E6C5_88E3_947C_41C0_4650A0D50B59"],"class":"ImageResource"},"fieldOfViewOverlayInsideColor":"#99D6FF","maximumZoomFactor":1.2,"thumbnailUrl":"media/map_568203F8_5A23_6195_41B4_849561A32237_t.png","fieldOfViewOverlayInsideOpacity":0.4,"initialZoomFactor":1},{"id":"Container_4F2CDF10_5AE5_C3F1_41C0_21F10023A2FB","minHeight":20,"backgroundColor":["#FFFFFF","#000000","#000000","#FFFFFF"],"minWidth":20,"right":"0%","scrollBarColor":"#000000","data":{"name":"POP-UP-WINDOW"},"overflow":"scroll","backgroundColorRatios":[0,0.011764705882352941,0.996078431372549,1],"bottom":"0%","scrollBarMargin":2,"height":"100%","width":"100%","layout":"absolute","visible":false,"class":"Container","gap":10,"backgroundOpacity":0.3,"children":["this.WebFrame_4C22FE50_5AE2_C271_41C1_AAA7C09F269A","this.WebFrame_4327ABA5_5ABD_C2D3_41C9_74E1B71B59AF","this.CloseButton_4DE20C08_5ADD_45D1_41B3_FB40DDF2A2B6"],"propagateClick":false},{"id":"mainPlayList","class":"PlayList","items":["this.PanoramaPlayListItem_9988E7EC_88E3_940C_4164_6F21507FEBFE","this.PanoramaPlayListItem_998807ED_88E3_940C_41C0_226E25A09044"]},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_camera","initialSequence":"this.sequence_50D3945B_5A23_268B_41D3_F9E7996FC48F","class":"PanoramaCamera","enterPointingToHorizon":true},{"id":"MapViewer","toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionColor":"#FF6600","subtitlesFontSize":"3vmin","right":"0%","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeight":10,"subtitlesFontColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"toolTipFontFamily":"Arial","subtitlesTextShadowColor":"#000000","progressBorderColor":"#000000","vrPointerSelectionTime":2000,"data":{"name":"Floorplan Viewer"},"toolTipPaddingLeft":6,"toolTipFontColor":"#606060","firstTransitionDuration":0,"progressBackgroundColor":["#000000"],"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadWidth":6,"progressBarBackgroundColor":["#3399FF"],"progressBottom":10,"subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"playbackBarProgressBorderSize":0,"progressLeft":"33%","playbackBarHeadShadowBlurRadius":3,"subtitlesTop":0,"playbackBarBackgroundColorDirection":"vertical","progressHeight":2,"height":"29.989%","progressBorderSize":0,"playbackBarProgressBorderRadius":0,"playbackBarLeft":0,"playbackBarRight":0,"toolTipFontSize":"1.11vmin","vrThumbstickRotationStep":20,"toolTipShadowColor":"#333138","progressBarBorderRadius":2,"width":"32.29%","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTextShadowVerticalLength":1,"minHeight":1,"subtitlesFontFamily":"Arial","toolTipPaddingRight":6,"minWidth":1,"progressBarBorderSize":0,"playbackBarHeadShadowColor":"#000000","propagateClick":false,"toolTipPaddingTop":4,"progressBackgroundColorRatios":[0],"playbackBarHeadHeight":15,"subtitlesBottom":10,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipTextShadowColor":"#000000","progressRight":"33%","subtitlesBackgroundOpacity":0.2,"vrPointerColor":"#FFFFFF","progressOpacity":0.7,"playbackBarHeadBorderSize":0,"progressBarBackgroundColorDirection":"horizontal","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadow":true,"top":"0%","playbackBarBorderRadius":0,"toolTipPaddingBottom":4,"progressBarBorderColor":"#000000","playbackBarProgressBorderColor":"#000000","subtitlesGap":0,"progressBarBackgroundColorRatios":[0],"subtitlesBackgroundColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipBorderColor":"#767676","playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","playbackBarBottom":5,"class":"ViewerArea","progressBorderRadius":2,"playbackBarBorderSize":0,"playbackBarBackgroundOpacity":1,"surfaceReticleColor":"#FFFFFF"},{"id":"CloseButton_4DE20C08_5ADD_45D1_41B3_FB40DDF2A2B6","minHeight":1,"backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"fontSize":"1.29vmin","minWidth":1,"right":"14.39%","backgroundColorRatios":[0,0.09803921568627451,1],"pressedIconColor":"#888888","iconHeight":"100%","top":"6.17%","iconLineWidth":2,"fontColor":"#FFFFFF","width":40,"iconWidth":"100%","borderColor":"#000000","height":40,"layout":"horizontal","visible":false,"class":"CloseButton","fontFamily":"Arial","backgroundOpacity":0.3,"data":{"name":"CloseButton5597"},"iconColor":"#000000","click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_4D1D092A_5AA5_4FD1_41BC_0F3CB6725740, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_4F2CDF10_5AE5_C3F1_41C0_21F10023A2FB); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_408BFC93_5AA3_46F7_41B8_D3F0A70A4E8B, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_408B9C93_5AA3_46F7_41C8_B963DF756D83, 'hideEffect', false)}.bind(this); if(!this.Image_430173B7_5ABE_C23F_41C5_E2D2FFD85A02.get('visible')){ visibleFunc(this.Image_430173B7_5ABE_C23F_41C5_E2D2FFD85A02) } else { invisibleFunc(this.Image_430173B7_5ABE_C23F_41C5_E2D2FFD85A02) }","rollOverIconColor":"#666666","propagateClick":false},{"id":"MapViewerMapPlayer","class":"MapPlayer","movementMode":"constrained","viewerArea":"this.MapViewer"},{"id":"playList_998617A7_88E3_943C_41D5_830DA8A5A1A9","class":"PlayList","items":[{"media":"this.map_568203F8_5A23_6195_41B4_849561A32237","class":"MapPlayListItem","begin":"this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')","player":"this.MapViewerMapPlayer"}]},{"id":"MainViewer","toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionColor":"#FF6600","subtitlesFontSize":"3vmin","playbackBarBackgroundOpacity":1,"subtitlesFontColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipFontFamily":"Arial","subtitlesTextShadowColor":"#000000","progressBorderColor":"#000000","vrPointerSelectionTime":2000,"data":{"name":"Main Viewer"},"toolTipFontColor":"#606060","toolTipPaddingLeft":6,"firstTransitionDuration":0,"progressBackgroundColor":["#000000"],"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadWidth":6,"progressBarBackgroundColor":["#3399FF"],"progressBottom":10,"subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"playbackBarProgressBorderSize":0,"progressLeft":"33%","playbackBarHeadShadowBlurRadius":3,"subtitlesTop":0,"playbackBarBackgroundColorDirection":"vertical","progressHeight":2,"height":"100%","progressBorderSize":0,"playbackBarProgressBorderRadius":0,"playbackBarLeft":0,"playbackBarRight":0,"toolTipFontSize":"1.11vmin","vrThumbstickRotationStep":20,"toolTipShadowColor":"#333138","progressBarBorderRadius":2,"width":"100%","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTextShadowVerticalLength":1,"minHeight":50,"subtitlesFontFamily":"Arial","toolTipPaddingRight":6,"minWidth":100,"progressBarBorderSize":0,"playbackBarHeadShadowColor":"#000000","propagateClick":false,"toolTipPaddingTop":4,"progressBackgroundColorRatios":[0],"playbackBarHeadHeight":15,"subtitlesBottom":50,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipTextShadowColor":"#000000","progressRight":"33%","subtitlesBackgroundOpacity":0.2,"vrPointerColor":"#FFFFFF","progressOpacity":0.7,"playbackBarHeadBorderSize":0,"progressBarBackgroundColorDirection":"horizontal","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadow":true,"progressBarBorderColor":"#000000","playbackBarBorderRadius":0,"toolTipPaddingBottom":4,"playbackBarProgressBorderColor":"#000000","subtitlesGap":0,"progressBarBackgroundColorRatios":[0],"subtitlesBackgroundColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipBorderColor":"#767676","playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","playbackBarBottom":5,"progressBorderRadius":2,"playbackBarBorderSize":0,"class":"ViewerArea","surfaceReticleColor":"#FFFFFF"},{"duration":500,"id":"effect_40EF6817_5AA6_CDFF_41D1_E02831A8FA6B","class":"FadeInEffect"},{"duration":500,"id":"effect_408BFC93_5AA3_46F7_41B8_D3F0A70A4E8B","class":"FadeInEffect"},{"id":"WebFrame_4327ABA5_5ABD_C2D3_41C9_74E1B71B59AF","minHeight":1,"backgroundColor":["#FFFFFF"],"minWidth":1,"right":"15.14%","url":trans('WebFrame_4327ABA5_5ABD_C2D3_41C9_74E1B71B59AF.url'),"data":{"name":"WebFrame5558"},"backgroundColorRatios":[0],"bottom":"11.58%","height":"80.044%","width":"74.722%","visible":false,"class":"WebFrame","propagateClick":false},{"id":"panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84","class":"Panorama","label":trans('panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84.label'),"hfov":360,"hfovMin":"135%","hfovMax":130,"data":{"label":"2"},"vfov":180,"thumbnailUrl":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_t.jpg","frames":[{"thumbnailUrl":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_t.jpg","cube":{"levels":[{"tags":"ondemand","height":2048,"class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_0/{face}/0/{row}_{column}.jpg","width":12288,"colCount":24},{"tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_0/{face}/1/{row}_{column}.jpg","width":6144,"colCount":12},{"tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_0/{face}/2/{row}_{column}.jpg","width":3072,"colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}]},{"id":"Image_430173B7_5ABE_C23F_41C5_E2D2FFD85A02","minHeight":1,"minWidth":1,"right":"4.63%","verticalAlign":"middle","url":trans('Image_430173B7_5ABE_C23F_41C5_E2D2FFD85A02.url'),"data":{"name":"Image9257"},"bottom":"3.53%","height":"15.325%","width":"9.449%","scaleMode":"fit_inside","class":"Image","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_40EF6817_5AA6_CDFF_41D1_E02831A8FA6B, 'showEffect', false)}.bind(this); visibleFunc(this.Container_4F2CDF10_5AE5_C3F1_41C0_21F10023A2FB); visibleFunc(this.WebFrame_4C22FE50_5AE2_C271_41C1_AAA7C09F269A); visibleFunc(this.Image_430173B7_5ABE_C23F_41C5_E2D2FFD85A02); visibleFunc(this.CloseButton_4DE20C08_5ADD_45D1_41B3_FB40DDF2A2B6)","backgroundOpacity":0,"horizontalAlign":"center","propagateClick":false},{"id":"WebFrame_4C22FE50_5AE2_C271_41C1_AAA7C09F269A","minHeight":1,"backgroundColor":["#FFFFFF"],"minWidth":1,"right":"15.14%","url":trans('WebFrame_4C22FE50_5AE2_C271_41C1_AAA7C09F269A.url'),"data":{"name":"WebFrame5558"},"backgroundColorRatios":[0],"bottom":"11.58%","height":"80.044%","width":"74.722%","visible":false,"class":"WebFrame","propagateClick":false},{"id":"sequence_51C374B2_5A22_E795_41AE_5414A7CF0F2B","class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}]},{"id":"overlay_988C7C7B_88BF_B414_41DC_11BFD2A72735","class":"AreaHotspotMapOverlay","areas":["this.HotspotMapOverlayArea_8706ED3A_88BF_B414_41BE_C8B7D840AD15"],"useHandCursor":true,"data":{"label":"1-red"},"image":{"x":274,"class":"HotspotMapOverlayImage","y":309.5,"offsetX":27,"width":54,"scaleMode":"fit_inside","height":39,"data":{"label":"1-red"},"offsetY":19.5,"image":"this.res_99E109F5_88E3_7C1C_419A_BE6C50AB3A93"}},{"id":"overlay_983DECE1_88A0_9434_41DE_BFA33B60F34B","class":"AreaHotspotMapOverlay","areas":["this.HotspotMapOverlayArea_983E3CE2_88A0_9434_41B0_D9EDBB741033"],"useHandCursor":true,"data":{"label":"2-red"},"image":{"x":565,"class":"HotspotMapOverlayImage","y":305.5,"offsetX":27,"width":54,"scaleMode":"fit_inside","height":39,"data":{"label":"2-red"},"offsetY":19.5,"image":"this.res_99E109F5_88E3_7C1C_419A_BE6C50AB3A93"}},{"id":"overlay_986E1219_88A0_8C14_41D2_128538D53635","class":"AreaHotspotMapOverlay","areas":["this.HotspotMapOverlayArea_9854F22D_88A0_8C0C_41C5_24DFE5D40BC1"],"useHandCursor":true,"data":{"label":"1-green"},"image":{"x":274,"class":"HotspotMapOverlayImage","y":309.5,"offsetX":27,"width":54,"scaleMode":"fit_inside","height":39,"data":{"label":"1-green"},"offsetY":19.5,"image":"this.res_99E1C9F6_88E3_7C1C_41C3_00A6E099646A"}},{"id":"overlay_99CDF30D_88A0_8C0F_41D4_1CE7B0F03B55","class":"AreaHotspotMapOverlay","areas":["this.HotspotMapOverlayArea_99CA630F_88A0_8C0C_41D8_A4FA3845045F"],"useHandCursor":true,"data":{"label":"2-green"},"image":{"x":565,"class":"HotspotMapOverlayImage","y":305.5,"offsetX":27,"width":54,"scaleMode":"fit_inside","height":39,"data":{"label":"2-green"},"offsetY":19.5,"image":"this.res_99E1C9F6_88E3_7C1C_41C3_00A6E099646A"}},{"id":"imlevel_99F3C6C5_88E3_947C_41D5_BD0A43EAFFB2","height":918,"class":"ImageResourceLevel","url":trans('imlevel_99F3C6C5_88E3_947C_41D5_BD0A43EAFFB2.url'),"width":1024},{"id":"imlevel_99F3D6C5_88E3_947C_41C9_6BD83169634D","height":459,"class":"ImageResourceLevel","url":trans('imlevel_99F3D6C5_88E3_947C_41C9_6BD83169634D.url'),"width":512},{"tags":"preload","id":"imlevel_99F3E6C5_88E3_947C_41C0_4650A0D50B59","height":229,"class":"ImageResourceLevel","url":trans('imlevel_99F3E6C5_88E3_947C_41C0_4650A0D50B59.url'),"width":256},{"id":"PanoramaPlayListItem_9988E7EC_88E3_940C_4164_6F21507FEBFE","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_camera","media":"this.panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"id":"PanoramaPlayListItem_998807ED_88E3_940C_41C0_226E25A09044","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_camera","media":"this.panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"},{"id":"sequence_50D3945B_5A23_268B_41D3_F9E7996FC48F","class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}]},{"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_9988E7EC_88E3_940C_4164_6F21507FEBFE, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","id":"HotspotMapOverlayArea_8706ED3A_88BF_B414_41BE_C8B7D840AD15","class":"HotspotMapOverlayArea","mapColor":"any"},{"levels":[{"height":39,"class":"ImageResourceLevel","url":"media/res_99E109F5_88E3_7C1C_419A_BE6C50AB3A93_0.png","width":39}],"id":"res_99E109F5_88E3_7C1C_419A_BE6C50AB3A93","class":"ImageResource"},{"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_998807ED_88E3_940C_41C0_226E25A09044, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","id":"HotspotMapOverlayArea_983E3CE2_88A0_9434_41B0_D9EDBB741033","class":"HotspotMapOverlayArea","mapColor":"any"},{"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_9988E7EC_88E3_940C_4164_6F21507FEBFE, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0); try{eval('const firebaseConfig = {    apiKey: \"AIzaSyBw9Y6LVcqeKJQhx56QjZFbPhFvb29_6Mg\",    authDomain: \"reservation-system-43d03.firebaseapp.com\",    projectId: \"reservation-system-43d03\",    storageBucket: \"reservation-system-43d03.appspot.com\",    messagingSenderId: \"526682468950\",    appId: \"1:526682468950:web:5fa1f6c6e04fc111dc41f7\",    measurementId: \"G-9RN13Z2JPE\"  };        firebase.initializeApp(firebaseConfig);        const db = firebase.firestore();        // Fetch data from Firebase        function fetchData() {            const dataDiv = document.getElementById(\\'data\\');            db.collection(\"your_collection_name\").get().then((querySnapshot) => {                querySnapshot.forEach((doc) => {                    dataDiv.innerHTML += `<p>${doc.id}: ${JSON.stringify(doc.data())}<\\/p>`;                });            }).catch((error) => {                console.error(\"Error fetching data: \", error);            });        }        // Call fetchData function when the page loads        window.onload = fetchData;')}catch(e){console.log(e)}","id":"HotspotMapOverlayArea_9854F22D_88A0_8C0C_41C5_24DFE5D40BC1","class":"HotspotMapOverlayArea","mapColor":"any"},{"levels":[{"height":39,"class":"ImageResourceLevel","url":"media/res_99E1C9F6_88E3_7C1C_41C3_00A6E099646A_0.png","width":39}],"id":"res_99E1C9F6_88E3_7C1C_41C3_00A6E099646A","class":"ImageResource"},{"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_998807ED_88E3_940C_41C0_226E25A09044, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","id":"HotspotMapOverlayArea_99CA630F_88A0_8C0C_41D8_A4FA3845045F","class":"HotspotMapOverlayArea","mapColor":"any"}],"scrollBarColor":"#000000","backgroundColorRatios":[0],"scripts":{"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getPixels":TDV.Tour.Script.getPixels,"quizFinish":TDV.Tour.Script.quizFinish,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"shareSocial":TDV.Tour.Script.shareSocial,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"mixObject":TDV.Tour.Script.mixObject,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"textToSpeech":TDV.Tour.Script.textToSpeech,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getKey":TDV.Tour.Script.getKey,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"isPanorama":TDV.Tour.Script.isPanorama,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"translate":TDV.Tour.Script.translate,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"init":TDV.Tour.Script.init,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getOverlays":TDV.Tour.Script.getOverlays,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"startMeasurement":TDV.Tour.Script.startMeasurement,"setMapLocation":TDV.Tour.Script.setMapLocation,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"createTween":TDV.Tour.Script.createTween,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setLocale":TDV.Tour.Script.setLocale,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getMediaByName":TDV.Tour.Script.getMediaByName,"getComponentByName":TDV.Tour.Script.getComponentByName,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"existsKey":TDV.Tour.Script.existsKey,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"cloneBindings":TDV.Tour.Script.cloneBindings,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"clone":TDV.Tour.Script.clone,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"downloadFile":TDV.Tour.Script.downloadFile,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"playAudioList":TDV.Tour.Script.playAudioList,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"unregisterKey":TDV.Tour.Script.unregisterKey,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"showWindow":TDV.Tour.Script.showWindow,"initAnalytics":TDV.Tour.Script.initAnalytics,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setValue":TDV.Tour.Script.setValue,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"registerKey":TDV.Tour.Script.registerKey,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"historyGoForward":TDV.Tour.Script.historyGoForward,"openLink":TDV.Tour.Script.openLink,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"executeJS":TDV.Tour.Script.executeJS,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizStart":TDV.Tour.Script.quizStart,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"initQuiz":TDV.Tour.Script.initQuiz,"getMediaWidth":TDV.Tour.Script.getMediaWidth},"defaultMenu":["fullscreen","mute","rotation"],"scrollBarMargin":2,"height":"100%","width":"100%","layout":"absolute","gap":10,"class":"Player","watermark":false,"children":["this.MainViewer","this.MapViewer","this.Container_4F2CDF10_5AE5_C3F1_41C0_21F10023A2FB","this.Image_430173B7_5ABE_C23F_41C5_E2D2FFD85A02"],"propagateClick":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.2.7.js.map
})();
//Generated with v2023.2.7, Thu Feb 8 2024