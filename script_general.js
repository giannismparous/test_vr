(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
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
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
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
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
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
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"gap":10,"id":"rootPlayer","class":"Player","backgroundColor":["#FFFFFF"],"defaultMenu":["fullscreen","mute","rotation"],"data":{"locales":{"en":"locale/en.txt"},"defaultLocale":"en","textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnTooltip":false,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"rate":1,"volume":1,"pitch":1},"name":"Player536","history":{}},"children":["this.MainViewer","this.MapViewer","this.IconButton_557C2B4A_5A25_E2F5_41D0_C37B7F478A21"],"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.playList_4AEB8E9B_5A2D_2394_41AC_74864148B00B.set('selectedIndex', 0)","propagateClick":false,"layout":"absolute","scrollBarMargin":2,"minWidth":0,"watermark":false,"width":"100%","minHeight":0,"height":"100%","hash": "5dd93281db44eec9b08fcb1a7c570c6b598d9a5f034eb7ce84167395674c7d1d", "definitions": [{"id":"map_568203F8_5A23_6195_41B4_849561A32237","overlays":["this.overlay_5405CD8B_5A26_E674_41D3_8D6D35C46F36","this.overlay_54B6E09F_5A27_FF8B_41B1_A49B5EAC2A7D"],"height":652,"label":trans('map_568203F8_5A23_6195_41B4_849561A32237.label'),"fieldOfViewOverlayInsideColor":"#99D6FF","maximumZoomFactor":1.2,"fieldOfViewOverlayRadiusScale":0.3,"data":{"label":"floorplan"},"fieldOfViewOverlayInsideOpacity":0.4,"scaleMode":"fit_inside","thumbnailUrl":"media/map_568203F8_5A23_6195_41B4_849561A32237_t.png","class":"Map","fieldOfViewOverlayOutsideColor":"#000000","image":{"class":"ImageResource","levels":["this.imlevel_4A555D03_5A2D_267B_41D3_B56D7D39B0E2","this.imlevel_4A557D04_5A2D_267D_41C7_0FF3DDEA375E","this.imlevel_4A551D04_5A2D_267D_41C6_08036BAD4E68"]},"minimumZoomFactor":0.5,"width":727,"initialZoomFactor":1},{"id":"MapViewerMapPlayer","class":"MapPlayer","viewerArea":"this.MapViewer","movementMode":"constrained"},{"id":"panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4","label":trans('panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4.label'),"hfovMax":130,"data":{"label":"IMG_20240125_085027_00_merged"},"hfovMin":"135%","thumbnailUrl":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_t.jpg","class":"Panorama","hfov":360,"frames":[{"thumbnailUrl":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_0/{face}/0/{row}_{column}.jpg","rowCount":4,"width":12288},{"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_0/{face}/1/{row}_{column}.jpg","rowCount":2,"width":6144},{"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_0/{face}/2/{row}_{column}.jpg","rowCount":1,"width":3072}]}}],"vfov":180},{"id":"mainPlayList","class":"PlayList","items":["this.PanoramaPlayListItem_4AE6FEDF_5A2D_238C_41D2_90B6446671D2","this.PanoramaPlayListItem_4AE6BEDF_5A2D_238A_41CF_B8F7923ED636"]},{"id":"MainViewer","toolTipPaddingLeft":6,"progressBackgroundColor":["#000000"],"progressBottom":10,"data":{"name":"Main Viewer"},"toolTipPaddingBottom":4,"playbackBarHeadWidth":6,"progressHeight":2,"propagateClick":false,"subtitlesFontFamily":"Arial","progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"playbackBarProgressBorderSize":0,"minWidth":100,"progressBarBorderRadius":2,"toolTipFontSize":"1.11vmin","subtitlesTextShadowOpacity":1,"toolTipPaddingRight":6,"playbackBarRight":0,"playbackBarLeft":0,"minHeight":50,"progressBarBorderSize":0,"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","subtitlesTop":0,"width":"100%","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","playbackBarHeadShadowOpacity":0.7,"playbackBarHeadBorderSize":0,"progressBackgroundColorRatios":[0],"subtitlesBottom":50,"vrPointerColor":"#FFFFFF","toolTipPaddingTop":4,"height":"100%","progressRight":"33%","playbackBarHeadShadow":true,"progressOpacity":0.7,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesBackgroundOpacity":0.2,"subtitlesTextShadowVerticalLength":1,"toolTipShadowColor":"#333138","firstTransitionDuration":0,"playbackBarBorderColor":"#FFFFFF","subtitlesGap":0,"progressBarBackgroundColorDirection":"horizontal","subtitlesTextShadowColor":"#000000","playbackBarBorderRadius":0,"toolTipFontFamily":"Arial","playbackBarProgressBorderColor":"#000000","progressBarBorderColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipBorderColor":"#767676","progressBorderRadius":2,"progressBarBackgroundColorRatios":[0],"toolTipFontColor":"#606060","playbackBarHeadBorderRadius":0,"subtitlesFontSize":"3vmin","vrThumbstickRotationStep":20,"playbackBarBottom":5,"subtitlesBackgroundColor":"#000000","playbackBarHeadBorderColor":"#000000","progressLeft":"33%","toolTipBackgroundColor":"#F6F6F6","subtitlesTextShadowHorizontalLength":1,"playbackBarBackgroundOpacity":1,"playbackBarBorderSize":0,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesFontColor":"#FFFFFF","vrPointerSelectionTime":2000,"toolTipTextShadowColor":"#000000","surfaceReticleColor":"#FFFFFF","playbackBarHeight":10,"class":"ViewerArea","progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"]},{"id":"panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84","label":trans('panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84.label'),"hfovMax":130,"data":{"label":"IMG_20240125_085151_00_merged"},"hfovMin":"135%","thumbnailUrl":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_t.jpg","class":"Panorama","hfov":360,"frames":[{"thumbnailUrl":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_0/{face}/0/{row}_{column}.jpg","rowCount":4,"width":12288},{"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_0/{face}/1/{row}_{column}.jpg","rowCount":2,"width":6144},{"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_0/{face}/2/{row}_{column}.jpg","rowCount":1,"width":3072}]}}],"vfov":180},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_50D3945B_5A23_268B_41D3_F9E7996FC48F"},{"id":"MapViewer","toolTipPaddingLeft":6,"progressBackgroundColor":["#000000"],"progressBottom":10,"right":"0%","toolTipPaddingBottom":4,"data":{"name":"Floorplan Viewer"},"playbackBarHeadWidth":6,"progressHeight":2,"propagateClick":false,"subtitlesFontFamily":"Arial","progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"playbackBarProgressBorderSize":0,"minWidth":1,"progressBarBorderRadius":2,"toolTipFontSize":"1.11vmin","subtitlesTextShadowOpacity":1,"toolTipPaddingRight":6,"playbackBarRight":0,"playbackBarLeft":0,"minHeight":1,"progressBarBorderSize":0,"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","subtitlesTop":0,"width":"40%","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","playbackBarHeadShadowOpacity":0.7,"playbackBarHeadBorderSize":0,"progressBackgroundColorRatios":[0],"subtitlesBottom":10,"vrPointerColor":"#FFFFFF","toolTipPaddingTop":4,"height":"30%","progressRight":"33%","playbackBarHeadShadow":true,"progressOpacity":0.7,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesBackgroundOpacity":0.2,"subtitlesTextShadowVerticalLength":1,"toolTipShadowColor":"#333138","firstTransitionDuration":0,"playbackBarBorderColor":"#FFFFFF","subtitlesGap":0,"progressBarBackgroundColorDirection":"horizontal","subtitlesTextShadowColor":"#000000","playbackBarBorderRadius":0,"toolTipFontFamily":"Arial","playbackBarProgressBorderColor":"#000000","progressBarBorderColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipBorderColor":"#767676","progressBorderRadius":2,"progressBarBackgroundColorRatios":[0],"toolTipFontColor":"#606060","playbackBarHeadBorderRadius":0,"subtitlesFontSize":"3vmin","playbackBarBottom":5,"subtitlesBackgroundColor":"#000000","top":"0%","progressLeft":"33%","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBorderColor":"#000000","subtitlesTextShadowHorizontalLength":1,"playbackBarBackgroundOpacity":1,"playbackBarBorderSize":0,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesFontColor":"#FFFFFF","vrPointerSelectionTime":2000,"toolTipTextShadowColor":"#000000","surfaceReticleColor":"#FFFFFF","playbackBarHeight":10,"class":"ViewerArea","progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"]},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_51C374B2_5A22_E795_41AE_5414A7CF0F2B"},{"id":"IconButton_557C2B4A_5A25_E2F5_41D0_C37B7F478A21","class":"IconButton","iconURL":"skin/IconButton_557C2B4A_5A25_E2F5_41D0_C37B7F478A21.png","right":"11.83%","verticalAlign":"middle","data":{"name":"IconButton16034"},"maxHeight":23,"maxWidth":23,"propagateClick":false,"transparencyActive":true,"backgroundOpacity":0,"minWidth":1,"bottom":"19.29%","width":50,"minHeight":1,"height":23,"click":"try{eval('window.open(urlToOpen, \"_blank\");')}catch(e){console.log(e)}","horizontalAlign":"center"},{"id":"playList_4AEB8E9B_5A2D_2394_41AC_74864148B00B","class":"PlayList","items":[{"class":"MapPlayListItem","media":"this.map_568203F8_5A23_6195_41B4_849561A32237","player":"this.MapViewerMapPlayer","begin":"this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"}]},{"id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"class":"PanoramaPlayer","arrowKeysAction":"translate","viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","aaEnabled":true,"touchControlMode":"drag_rotation"},{"id":"overlay_5405CD8B_5A26_E674_41D3_8D6D35C46F36","class":"AreaHotspotMapOverlay","image":{"x":271,"y":320.5,"data":{"label":"Image"},"offsetY":36,"width":75,"scaleMode":"fit_inside","offsetX":37.5,"class":"HotspotMapOverlayImage","height":72,"image":"this.res_4A0E802C_5A2D_1E8D_41D5_26CB3A7A6686"},"areas":["this.HotspotMapOverlayArea_570A9DBB_5A26_E194_418B_AD8EA1AC3134"],"useHandCursor":true,"data":{"label":"Image"}},{"id":"overlay_54B6E09F_5A27_FF8B_41B1_A49B5EAC2A7D","class":"AreaHotspotMapOverlay","image":{"x":590,"y":323.5,"data":{"label":"Image"},"offsetY":36,"width":75,"scaleMode":"fit_inside","offsetX":37.5,"class":"HotspotMapOverlayImage","height":72,"image":"this.res_4A0E802C_5A2D_1E8D_41D5_26CB3A7A6686"},"areas":["this.HotspotMapOverlayArea_54B130A1_5A27_FFB7_41B8_D80389619BFD"],"useHandCursor":true,"data":{"label":"Image"}},{"id":"imlevel_4A555D03_5A2D_267B_41D3_B56D7D39B0E2","height":918,"class":"ImageResourceLevel","url":trans('imlevel_4A555D03_5A2D_267B_41D3_B56D7D39B0E2.url'),"width":1024},{"id":"imlevel_4A557D04_5A2D_267D_41C7_0FF3DDEA375E","height":459,"class":"ImageResourceLevel","url":trans('imlevel_4A557D04_5A2D_267D_41C7_0FF3DDEA375E.url'),"width":512},{"id":"imlevel_4A551D04_5A2D_267D_41C6_08036BAD4E68","height":229,"tags":"preload","class":"ImageResourceLevel","url":trans('imlevel_4A551D04_5A2D_267D_41C6_08036BAD4E68.url'),"width":256},{"id":"PanoramaPlayListItem_4AE6FEDF_5A2D_238C_41D2_90B6446671D2","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_camera","media":"this.panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"id":"PanoramaPlayListItem_4AE6BEDF_5A2D_238A_41CF_B8F7923ED636","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_camera","media":"this.panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"},{"id":"sequence_50D3945B_5A23_268B_41D3_F9E7996FC48F","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}]},{"id":"sequence_51C374B2_5A22_E795_41AE_5414A7CF0F2B","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}]},{"id":"res_4A0E802C_5A2D_1E8D_41D5_26CB3A7A6686","class":"ImageResource","levels":[{"height":72,"class":"ImageResourceLevel","url":"media/res_4A0E802C_5A2D_1E8D_41D5_26CB3A7A6686_0.png","width":62}]},{"id":"HotspotMapOverlayArea_570A9DBB_5A26_E194_418B_AD8EA1AC3134","class":"HotspotMapOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_4AE6FEDF_5A2D_238C_41D2_90B6446671D2, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)"},{"id":"HotspotMapOverlayArea_54B130A1_5A27_FFB7_41B8_D80389619BFD","class":"HotspotMapOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_4AE6BEDF_5A2D_238A_41CF_B8F7923ED636, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)"}],"backgroundColorRatios":[0],"scrollBarColor":"#000000","scripts":{"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getPixels":TDV.Tour.Script.getPixels,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"shareSocial":TDV.Tour.Script.shareSocial,"historyGoForward":TDV.Tour.Script.historyGoForward,"createTween":TDV.Tour.Script.createTween,"playAudioList":TDV.Tour.Script.playAudioList,"quizShowScore":TDV.Tour.Script.quizShowScore,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"existsKey":TDV.Tour.Script.existsKey,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"historyGoBack":TDV.Tour.Script.historyGoBack,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getKey":TDV.Tour.Script.getKey,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getComponentByName":TDV.Tour.Script.getComponentByName,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"quizStart":TDV.Tour.Script.quizStart,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getOverlays":TDV.Tour.Script.getOverlays,"initQuiz":TDV.Tour.Script.initQuiz,"quizFinish":TDV.Tour.Script.quizFinish,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"init":TDV.Tour.Script.init,"getMediaByName":TDV.Tour.Script.getMediaByName,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"translate":TDV.Tour.Script.translate,"resumePlayers":TDV.Tour.Script.resumePlayers,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"executeJS":TDV.Tour.Script.executeJS,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"textToSpeech":TDV.Tour.Script.textToSpeech,"unregisterKey":TDV.Tour.Script.unregisterKey,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setLocale":TDV.Tour.Script.setLocale,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"initAnalytics":TDV.Tour.Script.initAnalytics,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"clone":TDV.Tour.Script.clone,"registerKey":TDV.Tour.Script.registerKey,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"startMeasurement":TDV.Tour.Script.startMeasurement,"setValue":TDV.Tour.Script.setValue,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"cloneBindings":TDV.Tour.Script.cloneBindings,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"isPanorama":TDV.Tour.Script.isPanorama,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"downloadFile":TDV.Tour.Script.downloadFile,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"showWindow":TDV.Tour.Script.showWindow,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"openLink":TDV.Tour.Script.openLink,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"mixObject":TDV.Tour.Script.mixObject,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getMainViewer":TDV.Tour.Script.getMainViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"showPopupImage":TDV.Tour.Script.showPopupImage,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.2.0.js.map
})();
//Generated with v2023.2.0, Tue Jan 30 2024