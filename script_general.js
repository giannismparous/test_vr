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
var script = {"gap":10,"id":"rootPlayer","minHeight":0,"backgroundColor":["#FFFFFF"],"defaultMenu":["fullscreen","mute","rotation"],"data":{"history":{},"defaultLocale":"en","textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnTooltip":false,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"volume":1,"rate":1,"pitch":1},"locales":{"en":"locale/en.txt"},"name":"Player536"},"children":["this.MainViewer","this.MapViewer","this.IconButton_5729BAF9_5A38_3D47_41CE_E4F5F1F6701E"],"propagateClick":false,"scrollBarMargin":2,"watermark":false,"width":"100%","start":"this.init(); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.playList_4A91A02F_5A38_2CDC_41A7_40C7D01630D8.set('selectedIndex', 0)","height":"100%","layout":"absolute","class":"Player","backgroundColorRatios":[0],"scrollBarColor":"#000000","scripts":{"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"resumePlayers":TDV.Tour.Script.resumePlayers,"getKey":TDV.Tour.Script.getKey,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"startMeasurement":TDV.Tour.Script.startMeasurement,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"quizShowScore":TDV.Tour.Script.quizShowScore,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"unregisterKey":TDV.Tour.Script.unregisterKey,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"historyGoBack":TDV.Tour.Script.historyGoBack,"historyGoForward":TDV.Tour.Script.historyGoForward,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"init":TDV.Tour.Script.init,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"translate":TDV.Tour.Script.translate,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizStart":TDV.Tour.Script.quizStart,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setLocale":TDV.Tour.Script.setLocale,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"createTween":TDV.Tour.Script.createTween,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"cloneBindings":TDV.Tour.Script.cloneBindings,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"quizFinish":TDV.Tour.Script.quizFinish,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"clone":TDV.Tour.Script.clone,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"existsKey":TDV.Tour.Script.existsKey,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"textToSpeech":TDV.Tour.Script.textToSpeech,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"registerKey":TDV.Tour.Script.registerKey,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getOverlays":TDV.Tour.Script.getOverlays,"showPopupImage":TDV.Tour.Script.showPopupImage,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"shareSocial":TDV.Tour.Script.shareSocial,"initQuiz":TDV.Tour.Script.initQuiz,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"executeJS":TDV.Tour.Script.executeJS,"setMapLocation":TDV.Tour.Script.setMapLocation,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setValue":TDV.Tour.Script.setValue,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"playAudioList":TDV.Tour.Script.playAudioList,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"initAnalytics":TDV.Tour.Script.initAnalytics,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"downloadFile":TDV.Tour.Script.downloadFile,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"isPanorama":TDV.Tour.Script.isPanorama,"openLink":TDV.Tour.Script.openLink,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMainViewer":TDV.Tour.Script.getMainViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"mixObject":TDV.Tour.Script.mixObject,"getPixels":TDV.Tour.Script.getPixels,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"showWindow":TDV.Tour.Script.showWindow,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled},"hash": "a8bd223c62bab4ad28e817d973c82a26fb8c0d6da1affa0545c88e54a673d978", "definitions": [{"enterPointingToHorizon":true,"id":"panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_camera","class":"PanoramaCamera","initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_51C374B2_5A22_E795_41AE_5414A7CF0F2B"},{"enterPointingToHorizon":true,"id":"panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_camera","class":"PanoramaCamera","initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_50D3945B_5A23_268B_41D3_F9E7996FC48F"},{"id":"MapViewerMapPlayer","viewerArea":"this.MapViewer","movementMode":"constrained","class":"MapPlayer"},{"id":"mainPlayList","items":["this.PanoramaPlayListItem_4A8BA071_5A38_2D44_41B8_50BE4CE50D48","this.PanoramaPlayListItem_4A8B6072_5A38_2D44_41D1_973985A53875"],"class":"PlayList"},{"id":"panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4","label":trans('panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4.label'),"hfovMax":130,"class":"Panorama","hfovMin":"135%","hfov":360,"data":{"label":"IMG_20240125_085027_00_merged"},"vfov":180,"thumbnailUrl":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_t.jpg","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_t.jpg","cube":{"levels":[{"height":2048,"colCount":24,"class":"TiledImageResourceLevel","url":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_0/{face}/0/{row}_{column}.jpg","rowCount":4,"width":12288,"tags":"ondemand"},{"height":1024,"colCount":12,"class":"TiledImageResourceLevel","url":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_0/{face}/1/{row}_{column}.jpg","rowCount":2,"width":6144,"tags":"ondemand"},{"height":512,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_0/{face}/2/{row}_{column}.jpg","rowCount":1,"width":3072,"tags":["ondemand","preload"]}],"class":"ImageResource"}}]},{"id":"playList_4A91A02F_5A38_2CDC_41A7_40C7D01630D8","items":[{"media":"this.map_568203F8_5A23_6195_41B4_849561A32237","player":"this.MapViewerMapPlayer","begin":"this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')","class":"MapPlayListItem"}],"class":"PlayList"},{"image":{"levels":["this.imlevel_4A40AF38_5A38_54C4_41B6_6AAFCBBBD9F3","this.imlevel_4A409F39_5A38_54C4_41BF_417DE6CB1587","this.imlevel_4A40FF39_5A38_54C4_4192_74F8D3465486"],"class":"ImageResource"},"id":"map_568203F8_5A23_6195_41B4_849561A32237","overlays":["this.overlay_5405CD8B_5A26_E674_41D3_8D6D35C46F36","this.overlay_54B6E09F_5A27_FF8B_41B1_A49B5EAC2A7D"],"label":trans('map_568203F8_5A23_6195_41B4_849561A32237.label'),"class":"Map","maximumZoomFactor":1.2,"fieldOfViewOverlayRadiusScale":0.3,"data":{"label":"floorplan"},"fieldOfViewOverlayInsideOpacity":0.4,"scaleMode":"fit_inside","fieldOfViewOverlayInsideColor":"#99D6FF","thumbnailUrl":"media/map_568203F8_5A23_6195_41B4_849561A32237_t.png","height":652,"fieldOfViewOverlayOutsideColor":"#000000","minimumZoomFactor":0.5,"width":727,"initialZoomFactor":1},{"id":"MainViewer","toolTipPaddingLeft":6,"progressBackgroundColor":["#000000"],"progressBottom":10,"toolTipPaddingBottom":4,"data":{"name":"Main Viewer"},"playbackBarHeadWidth":6,"progressHeight":2,"propagateClick":false,"subtitlesFontFamily":"Arial","progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","toolTipFontSize":"1.11vmin","playbackBarHeadShadowBlurRadius":3,"playbackBarProgressBorderSize":0,"playbackBarRight":0,"progressBarBorderRadius":2,"subtitlesTextShadowOpacity":1,"toolTipPaddingRight":6,"playbackBarLeft":0,"playbackBarProgressBorderRadius":0,"playbackBarBackgroundColorDirection":"vertical","progressBarBorderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadHeight":15,"vrPointerColor":"#FFFFFF","width":"100%","subtitlesBorderColor":"#FFFFFF","subtitlesBottom":50,"playbackBarHeadShadowColor":"#000000","subtitlesTop":0,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderSize":0,"progressBackgroundColorRatios":[0],"toolTipPaddingTop":4,"height":"100%","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadow":true,"progressOpacity":0.7,"subtitlesBackgroundOpacity":0.2,"minHeight":50,"subtitlesTextShadowVerticalLength":1,"toolTipShadowColor":"#333138","firstTransitionDuration":0,"playbackBarBorderColor":"#FFFFFF","progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","minWidth":100,"subtitlesGap":0,"playbackBarBorderRadius":0,"toolTipFontFamily":"Arial","progressBarBorderColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipBorderColor":"#767676","playbackBarProgressBorderColor":"#000000","progressBorderRadius":2,"progressBarBackgroundColorRatios":[0],"toolTipFontColor":"#606060","playbackBarHeadBorderRadius":0,"subtitlesFontSize":"3vmin","subtitlesTextShadowColor":"#000000","playbackBarBottom":5,"subtitlesBackgroundColor":"#000000","playbackBarHeadBorderColor":"#000000","progressLeft":"33%","toolTipBackgroundColor":"#F6F6F6","vrThumbstickRotationStep":20,"subtitlesTextShadowHorizontalLength":1,"playbackBarBackgroundOpacity":1,"playbackBarBorderSize":0,"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionColor":"#FF6600","subtitlesFontColor":"#FFFFFF","vrPointerSelectionTime":2000,"playbackBarHeight":10,"surfaceReticleColor":"#FFFFFF","toolTipTextShadowColor":"#000000","progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"class":"ViewerArea"},{"id":"MapViewer","toolTipPaddingLeft":6,"progressBackgroundColor":["#000000"],"progressBottom":10,"toolTipPaddingBottom":4,"right":"0%","playbackBarHeadWidth":6,"progressHeight":2,"propagateClick":false,"subtitlesFontFamily":"Arial","progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","data":{"name":"Floorplan Viewer"},"toolTipFontSize":"1.11vmin","playbackBarHeadShadowBlurRadius":3,"playbackBarProgressBorderSize":0,"playbackBarRight":0,"progressBarBorderRadius":2,"subtitlesTextShadowOpacity":1,"toolTipPaddingRight":6,"playbackBarLeft":0,"playbackBarProgressBorderRadius":0,"playbackBarBackgroundColorDirection":"vertical","progressBarBorderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadHeight":15,"vrPointerColor":"#FFFFFF","width":"32.29%","subtitlesBorderColor":"#FFFFFF","subtitlesBottom":10,"playbackBarHeadShadowColor":"#000000","subtitlesTop":0,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderSize":0,"progressBackgroundColorRatios":[0],"toolTipPaddingTop":4,"height":"29.989%","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadow":true,"progressOpacity":0.7,"subtitlesBackgroundOpacity":0.2,"minHeight":1,"subtitlesTextShadowVerticalLength":1,"toolTipShadowColor":"#333138","firstTransitionDuration":0,"playbackBarBorderColor":"#FFFFFF","progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","minWidth":1,"subtitlesGap":0,"playbackBarBorderRadius":0,"toolTipFontFamily":"Arial","progressBarBorderColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipBorderColor":"#767676","playbackBarProgressBorderColor":"#000000","progressBorderRadius":2,"progressBarBackgroundColorRatios":[0],"toolTipFontColor":"#606060","playbackBarHeadBorderRadius":0,"subtitlesFontSize":"3vmin","subtitlesTextShadowColor":"#000000","playbackBarBottom":5,"subtitlesBackgroundColor":"#000000","top":"0%","progressLeft":"33%","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBorderColor":"#000000","subtitlesTextShadowHorizontalLength":1,"playbackBarBackgroundOpacity":1,"playbackBarBorderSize":0,"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionColor":"#FF6600","subtitlesFontColor":"#FFFFFF","vrPointerSelectionTime":2000,"playbackBarHeight":10,"surfaceReticleColor":"#FFFFFF","class":"ViewerArea","progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"toolTipTextShadowColor":"#000000"},{"id":"MainViewerPanoramaPlayer","aaEnabled":true,"class":"PanoramaPlayer","displayPlaybackBar":true,"arrowKeysAction":"translate","viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation"},{"id":"IconButton_5729BAF9_5A38_3D47_41CE_E4F5F1F6701E","minHeight":0,"iconURL":"skin/IconButton_5729BAF9_5A38_3D47_41CE_E4F5F1F6701E.png","pressedIconURL":"skin/IconButton_5729BAF9_5A38_3D47_41CE_E4F5F1F6701E_pressed.png","verticalAlign":"middle","right":"17.77%","propagateClick":false,"data":{"name":"Button31987"},"transparencyActive":true,"backgroundOpacity":0,"bottom":"18.63%","width":81,"rollOverIconURL":"skin/IconButton_5729BAF9_5A38_3D47_41CE_E4F5F1F6701E_rollover.png","height":93,"click":"try{eval('var urlToOpen = \"https://hermesview.com\";window.open(urlToOpen, \"_blank\");')}catch(e){console.log(e)}","class":"IconButton","horizontalAlign":"center","minWidth":0},{"id":"panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84","label":trans('panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84.label'),"hfovMax":130,"class":"Panorama","hfovMin":"135%","hfov":360,"data":{"label":"IMG_20240125_085151_00_merged"},"vfov":180,"thumbnailUrl":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_t.jpg","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_t.jpg","cube":{"levels":[{"height":2048,"colCount":24,"class":"TiledImageResourceLevel","url":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_0/{face}/0/{row}_{column}.jpg","rowCount":4,"width":12288,"tags":"ondemand"},{"height":1024,"colCount":12,"class":"TiledImageResourceLevel","url":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_0/{face}/1/{row}_{column}.jpg","rowCount":2,"width":6144,"tags":"ondemand"},{"height":512,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_0/{face}/2/{row}_{column}.jpg","rowCount":1,"width":3072,"tags":["ondemand","preload"]}],"class":"ImageResource"}}]},{"id":"sequence_51C374B2_5A22_E795_41AE_5414A7CF0F2B","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}]},{"id":"sequence_50D3945B_5A23_268B_41D3_F9E7996FC48F","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}]},{"id":"PanoramaPlayListItem_4A8BA071_5A38_2D44_41B8_50BE4CE50D48","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_camera","media":"this.panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"id":"PanoramaPlayListItem_4A8B6072_5A38_2D44_41D1_973985A53875","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","camera":"this.panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_camera","media":"this.panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"},{"id":"imlevel_4A40AF38_5A38_54C4_41B6_6AAFCBBBD9F3","height":918,"class":"ImageResourceLevel","url":trans('imlevel_4A40AF38_5A38_54C4_41B6_6AAFCBBBD9F3.url'),"width":1024},{"id":"imlevel_4A409F39_5A38_54C4_41BF_417DE6CB1587","height":459,"class":"ImageResourceLevel","url":trans('imlevel_4A409F39_5A38_54C4_41BF_417DE6CB1587.url'),"width":512},{"id":"imlevel_4A40FF39_5A38_54C4_4192_74F8D3465486","height":229,"class":"ImageResourceLevel","url":trans('imlevel_4A40FF39_5A38_54C4_4192_74F8D3465486.url'),"width":256,"tags":"preload"},{"image":{"image":"this.res_4A0E802C_5A2D_1E8D_41D5_26CB3A7A6686","x":271,"y":320.5,"class":"HotspotMapOverlayImage","offsetY":36,"width":75,"scaleMode":"fit_inside","offsetX":37.5,"height":72,"data":{"label":"Image"}},"id":"overlay_5405CD8B_5A26_E674_41D3_8D6D35C46F36","class":"AreaHotspotMapOverlay","areas":["this.HotspotMapOverlayArea_570A9DBB_5A26_E194_418B_AD8EA1AC3134"],"useHandCursor":true,"data":{"label":"Image"}},{"image":{"image":"this.res_4A0E802C_5A2D_1E8D_41D5_26CB3A7A6686","x":590,"y":323.5,"class":"HotspotMapOverlayImage","offsetY":36,"width":75,"scaleMode":"fit_inside","offsetX":37.5,"height":72,"data":{"label":"Image"}},"id":"overlay_54B6E09F_5A27_FF8B_41B1_A49B5EAC2A7D","class":"AreaHotspotMapOverlay","areas":["this.HotspotMapOverlayArea_54B130A1_5A27_FFB7_41B8_D80389619BFD"],"useHandCursor":true,"data":{"label":"Image"}},{"id":"res_4A0E802C_5A2D_1E8D_41D5_26CB3A7A6686","levels":[{"height":72,"class":"ImageResourceLevel","url":"media/res_4A0E802C_5A2D_1E8D_41D5_26CB3A7A6686_0.png","width":62}],"class":"ImageResource"},{"id":"HotspotMapOverlayArea_570A9DBB_5A26_E194_418B_AD8EA1AC3134","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_4A8BA071_5A38_2D44_41B8_50BE4CE50D48, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","class":"HotspotMapOverlayArea"},{"id":"HotspotMapOverlayArea_54B130A1_5A27_FFB7_41B8_D80389619BFD","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_4A8B6072_5A38_2D44_41D1_973985A53875, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","class":"HotspotMapOverlayArea"}],"minWidth":0};
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