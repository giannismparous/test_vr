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
var script = {"id":"rootPlayer","minHeight":0,"children":["this.MainViewer","this.MapViewer","this.Container_4F2CDF10_5AE5_C3F1_41C0_21F10023A2FB","this.Image_430173B7_5ABE_C23F_41C5_E2D2FFD85A02"],"backgroundColorRatios":[0],"backgroundColor":["#FFFFFF"],"scrollBarMargin":2,"scripts":{"quizShowScore":TDV.Tour.Script.quizShowScore,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"startMeasurement":TDV.Tour.Script.startMeasurement,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"registerKey":TDV.Tour.Script.registerKey,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMainViewer":TDV.Tour.Script.getMainViewer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getKey":TDV.Tour.Script.getKey,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"init":TDV.Tour.Script.init,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"createTween":TDV.Tour.Script.createTween,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"shareSocial":TDV.Tour.Script.shareSocial,"setLocale":TDV.Tour.Script.setLocale,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"mixObject":TDV.Tour.Script.mixObject,"translate":TDV.Tour.Script.translate,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"playAudioList":TDV.Tour.Script.playAudioList,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"clone":TDV.Tour.Script.clone,"historyGoBack":TDV.Tour.Script.historyGoBack,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setMapLocation":TDV.Tour.Script.setMapLocation,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"downloadFile":TDV.Tour.Script.downloadFile,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"initQuiz":TDV.Tour.Script.initQuiz,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getComponentByName":TDV.Tour.Script.getComponentByName,"unregisterKey":TDV.Tour.Script.unregisterKey,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"executeJS":TDV.Tour.Script.executeJS,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"showWindow":TDV.Tour.Script.showWindow,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getOverlays":TDV.Tour.Script.getOverlays,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"historyGoForward":TDV.Tour.Script.historyGoForward,"setValue":TDV.Tour.Script.setValue,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"isPanorama":TDV.Tour.Script.isPanorama,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"existsKey":TDV.Tour.Script.existsKey,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"openLink":TDV.Tour.Script.openLink,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizFinish":TDV.Tour.Script.quizFinish,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"quizStart":TDV.Tour.Script.quizStart,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupImage":TDV.Tour.Script.showPopupImage,"getMediaByName":TDV.Tour.Script.getMediaByName,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"initAnalytics":TDV.Tour.Script.initAnalytics,"getPixels":TDV.Tour.Script.getPixels},"data":{"defaultLocale":"en","textToSpeechConfig":{"stopBackgroundAudio":false,"speechOnTooltip":false,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"rate":1,"volume":1,"pitch":1},"locales":{"en":"locale/en.txt"},"name":"Player536","history":{}},"watermark":false,"propagateClick":false,"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.playList_9F8B5BC0_8D07_3CE8_41DF_92389F765B6F.set('selectedIndex', 0)","scrollBarColor":"#000000","width":"100%","height":"100%","hash": "13c3f2a845481d660add76ddacd192ef393cd83cfee78bbb84d771cee9354e4c", "definitions": [{"id":"panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_51C374B2_5A22_E795_41AE_5414A7CF0F2B"},{"id":"WebFrame_4327ABA5_5ABD_C2D3_41C9_74E1B71B59AF","minHeight":1,"backgroundColorRatios":[0],"backgroundColor":["#FFFFFF"],"right":"15.14%","url":trans('WebFrame_4327ABA5_5ABD_C2D3_41C9_74E1B71B59AF.url'),"data":{"name":"WebFrame5558"},"propagateClick":false,"bottom":"11.58%","width":"74.722%","height":"80.044%","visible":false,"class":"WebFrame","minWidth":1},{"id":"WebFrame_4C22FE50_5AE2_C271_41C1_AAA7C09F269A","minHeight":1,"backgroundColorRatios":[0],"backgroundColor":["#FFFFFF"],"right":"15.14%","url":trans('WebFrame_4C22FE50_5AE2_C271_41C1_AAA7C09F269A.url'),"data":{"name":"WebFrame5558"},"propagateClick":false,"bottom":"11.58%","width":"74.722%","height":"80.044%","visible":false,"class":"WebFrame","minWidth":1},{"id":"MapViewer","playbackBarBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarBorderRadius":0,"toolTipBorderColor":"#767676","progressLeft":"33%","playbackBarHeadBackgroundColorRatios":[0,1],"right":"0%","toolTipFontColor":"#606060","playbackBarProgressBorderColor":"#000000","vrThumbstickRotationStep":20,"playbackBarHeadShadowColor":"#000000","progressBackgroundColorRatios":[0],"toolTipShadowColor":"#333138","subtitlesBackgroundColor":"#000000","progressBarBorderRadius":2,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"progressRight":"33%","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadow":true,"playbackBarHeadBorderColor":"#000000","playbackBarHeadBorderSize":0,"toolTipPaddingRight":6,"subtitlesFontColor":"#FFFFFF","playbackBarBorderSize":0,"progressBarBorderSize":0,"toolTipTextShadowColor":"#000000","subtitlesTop":0,"progressOpacity":0.7,"data":{"name":"Floorplan Viewer"},"vrPointerSelectionTime":2000,"vrPointerSelectionColor":"#FF6600","subtitlesFontSize":"3vmin","playbackBarBackgroundOpacity":1,"toolTipPaddingBottom":4,"toolTipPaddingLeft":6,"progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"height":"29.989%","subtitlesBottom":10,"width":"32.29%","subtitlesFontFamily":"Arial","minHeight":1,"subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowOpacity":1,"minWidth":1,"subtitlesTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarBottom":5,"firstTransitionDuration":0,"progressBorderColor":"#000000","toolTipFontSize":"1.11vmin","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"propagateClick":false,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"subtitlesTextShadowVerticalLength":1,"top":"0%","progressBackgroundColor":["#000000"],"progressBorderRadius":2,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"toolTipPaddingTop":4,"playbackBarHeadShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"subtitlesBorderColor":"#FFFFFF","progressBottom":10,"subtitlesGap":0,"vrPointerColor":"#FFFFFF","playbackBarLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"progressHeight":2,"toolTipFontFamily":"Arial","class":"ViewerArea","progressBorderSize":0},{"id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","aaEnabled":true,"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","viewerArea":"this.MainViewer","arrowKeysAction":"translate","displayPlaybackBar":true},{"id":"MainViewer","playbackBarBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarBorderRadius":0,"toolTipBorderColor":"#767676","progressLeft":"33%","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","toolTipFontColor":"#606060","playbackBarProgressBorderColor":"#000000","vrThumbstickRotationStep":20,"subtitlesBackgroundColor":"#000000","progressBackgroundColorRatios":[0],"toolTipShadowColor":"#333138","progressBarBorderRadius":2,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"progressRight":"33%","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadow":true,"playbackBarHeadBorderColor":"#000000","playbackBarHeadBorderSize":0,"toolTipPaddingRight":6,"subtitlesFontColor":"#FFFFFF","playbackBarBorderSize":0,"progressBarBorderSize":0,"toolTipTextShadowColor":"#000000","subtitlesTop":0,"progressOpacity":0.7,"data":{"name":"Main Viewer"},"vrPointerSelectionTime":2000,"vrPointerSelectionColor":"#FF6600","subtitlesFontSize":"3vmin","playbackBarBackgroundOpacity":1,"toolTipPaddingBottom":4,"toolTipPaddingLeft":6,"progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"height":"100%","subtitlesBottom":50,"width":"100%","subtitlesFontFamily":"Arial","minHeight":50,"subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowOpacity":1,"minWidth":100,"subtitlesTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarBottom":5,"firstTransitionDuration":0,"progressBorderColor":"#000000","toolTipFontSize":"1.11vmin","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"propagateClick":false,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"subtitlesTextShadowVerticalLength":1,"playbackBarBackgroundColorDirection":"vertical","progressBackgroundColor":["#000000"],"progressBorderRadius":2,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"vrPointerColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"toolTipPaddingTop":4,"playbackBarHeadShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"subtitlesBorderColor":"#FFFFFF","progressBottom":10,"subtitlesGap":0,"playbackBarLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"progressHeight":2,"toolTipFontFamily":"Arial","class":"ViewerArea","progressBorderSize":0},{"id":"Container_4F2CDF10_5AE5_C3F1_41C0_21F10023A2FB","minHeight":20,"backgroundColorRatios":[0,0.011764705882352941,0.996078431372549,1],"backgroundColor":["#FFFFFF","#000000","#000000","#FFFFFF"],"scrollBarMargin":2,"right":"0%","data":{"name":"POP-UP-WINDOW"},"propagateClick":false,"bottom":"0%","backgroundOpacity":0.3,"scrollBarColor":"#000000","width":"100%","overflow":"scroll","height":"100%","visible":false,"layout":"absolute","gap":10,"children":["this.WebFrame_4C22FE50_5AE2_C271_41C1_AAA7C09F269A","this.WebFrame_4327ABA5_5ABD_C2D3_41C9_74E1B71B59AF","this.CloseButton_4DE20C08_5ADD_45D1_41B3_FB40DDF2A2B6"],"class":"Container","minWidth":20},{"id":"panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4","label":trans('panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4.label'),"overlays":["this.overlay_8299EEC6_8D0F_34E8_41B6_39D5ED53D51D","this.overlay_9D889E44_8D01_F7E9_41C6_9C16F5B32178"],"thumbnailUrl":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_t.jpg","data":{"label":"1"},"hfov":360,"vfov":180,"frames":[{"thumbnailUrl":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"height":2048,"rowCount":4,"class":"TiledImageResourceLevel","url":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_0/{face}/0/{row}_{column}.jpg","colCount":24,"width":12288,"tags":"ondemand"},{"height":1024,"rowCount":2,"class":"TiledImageResourceLevel","url":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_0/{face}/1/{row}_{column}.jpg","colCount":12,"width":6144,"tags":"ondemand"},{"height":512,"rowCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_0/{face}/2/{row}_{column}.jpg","colCount":6,"width":3072,"tags":["ondemand","preload"]}],"class":"ImageResource"}}],"adjacentPanoramas":[{"select":"this.overlay_8299EEC6_8D0F_34E8_41B6_39D5ED53D51D.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","yaw":67.61,"distance":6.56,"backwardYaw":25.51,"data":{"overlayID":"overlay_8299EEC6_8D0F_34E8_41B6_39D5ED53D51D"},"panorama":"this.panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84"}],"hfovMin":"135%","hfovMax":130,"class":"Panorama"},{"id":"mainPlayList","class":"PlayList","items":["this.PanoramaPlayListItem_9FFECBEA_8D07_3CB9_41C3_0F42F7EE7638","this.PanoramaPlayListItem_9FFEEBEA_8D07_3CB9_41DB_EF0C1CDAD49A"]},{"id":"panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84","label":trans('panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84.label'),"overlays":["this.overlay_82969ECA_8D0F_34F9_41CE_D84633F1403C"],"thumbnailUrl":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_t.jpg","data":{"label":"2"},"hfov":360,"vfov":180,"frames":[{"thumbnailUrl":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"height":2048,"rowCount":4,"class":"TiledImageResourceLevel","url":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_0/{face}/0/{row}_{column}.jpg","colCount":24,"width":12288,"tags":"ondemand"},{"height":1024,"rowCount":2,"class":"TiledImageResourceLevel","url":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_0/{face}/1/{row}_{column}.jpg","colCount":12,"width":6144,"tags":"ondemand"},{"height":512,"rowCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_0/{face}/2/{row}_{column}.jpg","colCount":6,"width":3072,"tags":["ondemand","preload"]}],"class":"ImageResource"}}],"adjacentPanoramas":[{"select":"this.overlay_82969ECA_8D0F_34F9_41CE_D84633F1403C.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","yaw":25.51,"distance":3.84,"backwardYaw":67.61,"data":{"overlayID":"overlay_82969ECA_8D0F_34F9_41CE_D84633F1403C"},"panorama":"this.panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4"}],"hfovMin":"135%","hfovMax":130,"class":"Panorama"},{"id":"playList_9F8B5BC0_8D07_3CE8_41DF_92389F765B6F","class":"PlayList","items":[{"class":"MapPlayListItem","media":"this.map_568203F8_5A23_6195_41B4_849561A32237","player":"this.MapViewerMapPlayer","begin":"this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"}]},{"id":"MapViewerMapPlayer","class":"MapPlayer","movementMode":"constrained","viewerArea":"this.MapViewer"},{"id":"effect_4D1D092A_5AA5_4FD1_41BC_0F3CB6725740","class":"FadeOutEffect","duration":500},{"id":"Image_430173B7_5ABE_C23F_41C5_E2D2FFD85A02","minHeight":1,"right":"4.63%","url":trans('Image_430173B7_5ABE_C23F_41C5_E2D2FFD85A02.url'),"data":{"name":"Image9257","tags":["test"]},"scaleMode":"fit_inside","verticalAlign":"middle","propagateClick":false,"backgroundOpacity":0,"bottom":"3.53%","width":"9.449%","height":"15.325%","click":"try{eval('console.log(this.getComponentByName(\"Image9257\"));console.log(this.getComponentByTags(\"test\"));console.log(this.getComponentByName(\"GoTo2\");')}catch(e){console.log(e)}","horizontalAlign":"center","class":"Image","minWidth":1},{"id":"panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_50D3945B_5A23_268B_41D3_F9E7996FC48F"},{"id":"effect_408BFC93_5AA3_46F7_41B8_D3F0A70A4E8B","class":"FadeInEffect","duration":500},{"id":"CloseButton_4DE20C08_5ADD_45D1_41B3_FB40DDF2A2B6","minHeight":1,"backgroundColorRatios":[0,0.09803921568627451,1],"backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"fontColor":"#FFFFFF","fontSize":"1.29vmin","right":"14.39%","data":{"name":"CloseButton5597"},"propagateClick":false,"rollOverIconColor":"#666666","iconLineWidth":2,"top":"6.17%","backgroundOpacity":0.3,"pressedIconColor":"#888888","borderColor":"#000000","width":40,"iconWidth":"100%","height":40,"layout":"horizontal","iconHeight":"100%","visible":false,"fontFamily":"Arial","click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_4D1D092A_5AA5_4FD1_41BC_0F3CB6725740, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_4F2CDF10_5AE5_C3F1_41C0_21F10023A2FB); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_408BFC93_5AA3_46F7_41B8_D3F0A70A4E8B, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_408B9C93_5AA3_46F7_41C8_B963DF756D83, 'hideEffect', false)}.bind(this); if(!this.Image_430173B7_5ABE_C23F_41C5_E2D2FFD85A02.get('visible')){ visibleFunc(this.Image_430173B7_5ABE_C23F_41C5_E2D2FFD85A02) } else { invisibleFunc(this.Image_430173B7_5ABE_C23F_41C5_E2D2FFD85A02) }","iconColor":"#000000","class":"CloseButton","minWidth":1},{"id":"map_568203F8_5A23_6195_41B4_849561A32237","initialZoomFactor":1,"height":652,"label":trans('map_568203F8_5A23_6195_41B4_849561A32237.label'),"overlays":["this.overlay_988C7C7B_88BF_B414_41DC_11BFD2A72735","this.overlay_983DECE1_88A0_9434_41DE_BFA33B60F34B","this.overlay_986E1219_88A0_8C14_41D2_128538D53635","this.overlay_991D3263_897C_9672_41BB_5DACD2F1D25A"],"fieldOfViewOverlayRadiusScale":0.3,"minimumZoomFactor":0.5,"data":{"label":"floorplan"},"fieldOfViewOverlayOutsideColor":"#000000","scaleMode":"fit_inside","class":"Map","fieldOfViewOverlayInsideOpacity":0.4,"width":727,"maximumZoomFactor":1.2,"thumbnailUrl":"media/map_568203F8_5A23_6195_41B4_849561A32237_t.png","fieldOfViewOverlayInsideColor":"#99D6FF","image":{"levels":["this.imlevel_9F431B42_8D07_3DE9_41D8_EB4D134C6F9D","this.imlevel_9F432B42_8D07_3DE9_41C1_C765C616C98F","this.imlevel_9F433B42_8D07_3DE9_41CF_0D6AE9AD7420"],"class":"ImageResource"}},{"id":"effect_408B9C93_5AA3_46F7_41C8_B963DF756D83","class":"FadeOutEffect","duration":500},{"id":"sequence_51C374B2_5A22_E795_41AE_5414A7CF0F2B","class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}]},{"id":"overlay_8299EEC6_8D0F_34E8_41B6_39D5ED53D51D","maps":[],"useHandCursor":true,"items":[{"distance":100,"pitch":-14.53,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","yaw":67.61,"vfov":9.45,"image":"this.AnimatedImageResource_9F883B8C_8D07_3D79_41B1_27F28F3ED820","data":{"label":"GoTo2"},"scaleMode":"fit_inside"}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_9D388EF4_8D0F_34A9_41DC_52462BC11F0D"],"class":"HotspotPanoramaOverlay","data":{"label":"GoTo2","hasPanoramaAction":true}},{"id":"overlay_9D889E44_8D01_F7E9_41C6_9C16F5B32178","maps":[],"useHandCursor":true,"items":[{"distance":50,"pitch":-37.43,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","yaw":99.1,"vfov":10.5,"image":"this.AnimatedImageResource_9F889B8D_8D07_3D7B_41DC_A93161DD38A6","data":{"label":"Circle Arrow 04 Right"},"scaleMode":"fit_inside"}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_9DF8FE4A_8D01_F7F9_41CF_CB2401F9ABF2"],"class":"HotspotPanoramaOverlay","data":{"label":"Circle Arrow 04 Right"}},{"id":"PanoramaPlayListItem_9FFECBEA_8D07_3CB9_41C3_0F42F7EE7638","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","camera":"this.panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_camera","media":"this.panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4"},{"id":"PanoramaPlayListItem_9FFEEBEA_8D07_3CB9_41DB_EF0C1CDAD49A","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","end":"this.trigger('tourEnded')","camera":"this.panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_camera","media":"this.panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84"},{"id":"overlay_82969ECA_8D0F_34F9_41CE_D84633F1403C","maps":[],"useHandCursor":true,"items":[{"distance":100,"pitch":-23.86,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","yaw":25.51,"vfov":9.45,"image":"this.AnimatedImageResource_9F895B8D_8D07_3D7B_41D1_801EE7681CB0","data":{"label":"GoTo1"},"scaleMode":"fit_inside"}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_9F33FFFA_8D07_7499_41E0_C997A33D16D4"],"class":"HotspotPanoramaOverlay","data":{"label":"GoTo1","hasPanoramaAction":true}},{"id":"sequence_50D3945B_5A23_268B_41D3_F9E7996FC48F","class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}]},{"id":"overlay_988C7C7B_88BF_B414_41DC_11BFD2A72735","class":"AreaHotspotMapOverlay","image":{"x":274,"y":309.5,"offsetX":27,"width":54,"scaleMode":"fit_inside","class":"HotspotMapOverlayImage","data":{"label":"1-red"},"height":39,"offsetY":19.5,"image":"this.res_99E109F5_88E3_7C1C_419A_BE6C50AB3A93"},"areas":["this.HotspotMapOverlayArea_8706ED3A_88BF_B414_41BE_C8B7D840AD15"],"useHandCursor":true,"data":{"label":"1-red"}},{"id":"overlay_983DECE1_88A0_9434_41DE_BFA33B60F34B","class":"AreaHotspotMapOverlay","image":{"x":565,"y":305.5,"offsetX":27,"width":54,"scaleMode":"fit_inside","class":"HotspotMapOverlayImage","data":{"label":"2-red"},"height":39,"offsetY":19.5,"image":"this.res_99E109F5_88E3_7C1C_419A_BE6C50AB3A93"},"areas":["this.HotspotMapOverlayArea_983E3CE2_88A0_9434_41B0_D9EDBB741033"],"useHandCursor":true,"data":{"label":"2-red"}},{"id":"overlay_986E1219_88A0_8C14_41D2_128538D53635","class":"AreaHotspotMapOverlay","image":{"x":274,"y":309.5,"offsetX":27,"width":54,"scaleMode":"fit_inside","class":"HotspotMapOverlayImage","data":{"label":"1-green"},"height":39,"offsetY":19.5,"image":"this.res_99E1C9F6_88E3_7C1C_41C3_00A6E099646A"},"areas":["this.HotspotMapOverlayArea_9854F22D_88A0_8C0C_41C5_24DFE5D40BC1"],"useHandCursor":true,"data":{"label":"1-green"}},{"id":"overlay_991D3263_897C_9672_41BB_5DACD2F1D25A","class":"AreaHotspotMapOverlay","image":{"x":565,"y":305.5,"offsetX":27,"width":54,"scaleMode":"fit_inside","class":"HotspotMapOverlayImage","data":{"label":"2-green"},"height":39,"offsetY":19.5,"image":"this.res_99E1C9F6_88E3_7C1C_41C3_00A6E099646A"},"areas":["this.HotspotMapOverlayArea_9919E265_897C_9676_41DA_4DC039713158"],"useHandCursor":true,"data":{"label":"2-green","tags":["2-green-hotspot"]}},{"id":"imlevel_9F431B42_8D07_3DE9_41D8_EB4D134C6F9D","height":918,"class":"ImageResourceLevel","url":trans('imlevel_9F431B42_8D07_3DE9_41D8_EB4D134C6F9D.url'),"width":1024},{"id":"imlevel_9F432B42_8D07_3DE9_41C1_C765C616C98F","height":459,"class":"ImageResourceLevel","url":trans('imlevel_9F432B42_8D07_3DE9_41C1_C765C616C98F.url'),"width":512},{"id":"imlevel_9F433B42_8D07_3DE9_41CF_0D6AE9AD7420","height":229,"class":"ImageResourceLevel","url":trans('imlevel_9F433B42_8D07_3DE9_41CF_0D6AE9AD7420.url'),"width":256,"tags":"preload"},{"id":"AnimatedImageResource_9F883B8C_8D07_3D79_41B1_27F28F3ED820","rowCount":3,"frameCount":9,"frameDuration":62,"finalFrame":"first","colCount":3,"class":"AnimatedImageResource","levels":[{"height":270,"class":"ImageResourceLevel","url":"media/res_9F684335_8D07_2DAB_41CA_C0B0C2CE3CA3_0.png","width":300}]},{"id":"HotspotPanoramaOverlayArea_9D388EF4_8D0F_34A9_41DC_52462BC11F0D","class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","displayTooltipInTouchScreens":true},{"id":"AnimatedImageResource_9F889B8D_8D07_3D7B_41DC_A93161DD38A6","rowCount":6,"frameCount":24,"frameDuration":41,"finalFrame":"first","colCount":4,"class":"AnimatedImageResource","levels":[{"height":804,"class":"ImageResourceLevel","url":"media/res_9F692337_8D07_2D97_41B2_D30DA90A0C76_0.png","width":536}]},{"id":"HotspotPanoramaOverlayArea_9DF8FE4A_8D01_F7F9_41CF_CB2401F9ABF2","class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"try{eval('console.log(this.getElementByName(\"GoTo2\"));')}catch(e){console.log(e)}","displayTooltipInTouchScreens":true},{"id":"AnimatedImageResource_9F895B8D_8D07_3D7B_41D1_801EE7681CB0","rowCount":3,"frameCount":9,"frameDuration":62,"finalFrame":"first","colCount":3,"class":"AnimatedImageResource","levels":[{"height":270,"class":"ImageResourceLevel","url":"media/res_9F684335_8D07_2DAB_41CA_C0B0C2CE3CA3_0.png","width":300}]},{"id":"HotspotPanoramaOverlayArea_9F33FFFA_8D07_7499_41E0_C997A33D16D4","class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","displayTooltipInTouchScreens":true},{"id":"res_99E109F5_88E3_7C1C_419A_BE6C50AB3A93","class":"ImageResource","levels":[{"height":39,"class":"ImageResourceLevel","url":"media/res_99E109F5_88E3_7C1C_419A_BE6C50AB3A93_0.png","width":39}]},{"id":"HotspotMapOverlayArea_8706ED3A_88BF_B414_41BE_C8B7D840AD15","class":"HotspotMapOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_9FFECBEA_8D07_3CB9_41C3_0F42F7EE7638, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any"},{"id":"HotspotMapOverlayArea_983E3CE2_88A0_9434_41B0_D9EDBB741033","class":"HotspotMapOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_9FFEEBEA_8D07_3CB9_41DB_EF0C1CDAD49A, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any"},{"id":"res_99E1C9F6_88E3_7C1C_41C3_00A6E099646A","class":"ImageResource","levels":[{"height":39,"class":"ImageResourceLevel","url":"media/res_99E1C9F6_88E3_7C1C_41C3_00A6E099646A_0.png","width":39}]},{"id":"HotspotMapOverlayArea_9854F22D_88A0_8C0C_41C5_24DFE5D40BC1","class":"HotspotMapOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_9FFECBEA_8D07_3CB9_41C3_0F42F7EE7638, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0); try{eval('const firebaseConfig = {    apiKey: \"AIzaSyBw9Y6LVcqeKJQhx56QjZFbPhFvb29_6Mg\",    authDomain: \"reservation-system-43d03.firebaseapp.com\",    projectId: \"reservation-system-43d03\",    storageBucket: \"reservation-system-43d03.appspot.com\",    messagingSenderId: \"526682468950\",    appId: \"1:526682468950:web:5fa1f6c6e04fc111dc41f7\",    measurementId: \"G-9RN13Z2JPE\"  };        firebase.initializeApp(firebaseConfig);        const db = firebase.firestore();        // Fetch data from Firebase        function fetchData() {            const dataDiv = document.getElementById(\\'data\\');            db.collection(\"your_collection_name\").get().then((querySnapshot) => {                querySnapshot.forEach((doc) => {                    dataDiv.innerHTML += `<p>${doc.id}: ${JSON.stringify(doc.data())}<\\/p>`;                });            }).catch((error) => {                console.error(\"Error fetching data: \", error);            });        }        // Call fetchData function when the page loads        window.onload = fetchData;')}catch(e){console.log(e)}","mapColor":"any"},{"id":"HotspotMapOverlayArea_9919E265_897C_9676_41DA_4DC039713158","class":"HotspotMapOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_9FFEEBEA_8D07_3CB9_41DB_EF0C1CDAD49A, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1); try{eval('console.log(this);console.log(this.getByClassName(\"2-green\"));console.log(this.getMediaByTags(\"2-green-hotspot\"));console.log(this.getByClassName(\"2-green\").size);console.log(this.getByClassName(\"2-green\").opacity);console.log(this.getMediaByTags(\"2-green-hotspot\").size);console.log(this.getMediaByTags(\"2-green-hotspot\").opacity);')}catch(e){console.log(e)}","mapColor":"any"}],"defaultMenu":["fullscreen","mute","rotation"],"gap":10,"layout":"absolute","class":"Player","minWidth":0};
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
//Generated with v2023.2.7, Fri Feb 9 2024