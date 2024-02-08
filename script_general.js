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
var script = {"children":["this.MainViewer","this.MapViewer","this.Container_4F2CDF10_5AE5_C3F1_41C0_21F10023A2FB","this.Image_430173B7_5ABE_C23F_41C5_E2D2FFD85A02"],"backgroundColorRatios":[0],"backgroundColor":["#FFFFFF"],"id":"rootPlayer","class":"Player","scripts":{"showPopupImage":TDV.Tour.Script.showPopupImage,"historyGoBack":TDV.Tour.Script.historyGoBack,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"historyGoForward":TDV.Tour.Script.historyGoForward,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizFinish":TDV.Tour.Script.quizFinish,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"createTween":TDV.Tour.Script.createTween,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"unregisterKey":TDV.Tour.Script.unregisterKey,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"cloneBindings":TDV.Tour.Script.cloneBindings,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMediaByName":TDV.Tour.Script.getMediaByName,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getKey":TDV.Tour.Script.getKey,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"init":TDV.Tour.Script.init,"initAnalytics":TDV.Tour.Script.initAnalytics,"translate":TDV.Tour.Script.translate,"mixObject":TDV.Tour.Script.mixObject,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"existsKey":TDV.Tour.Script.existsKey,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"resumePlayers":TDV.Tour.Script.resumePlayers,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setLocale":TDV.Tour.Script.setLocale,"executeJS":TDV.Tour.Script.executeJS,"startMeasurement":TDV.Tour.Script.startMeasurement,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"clone":TDV.Tour.Script.clone,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getOverlays":TDV.Tour.Script.getOverlays,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"playAudioList":TDV.Tour.Script.playAudioList,"getComponentByName":TDV.Tour.Script.getComponentByName,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setValue":TDV.Tour.Script.setValue,"downloadFile":TDV.Tour.Script.downloadFile,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"shareSocial":TDV.Tour.Script.shareSocial,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"registerKey":TDV.Tour.Script.registerKey,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"showWindow":TDV.Tour.Script.showWindow,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"initQuiz":TDV.Tour.Script.initQuiz,"openLink":TDV.Tour.Script.openLink,"isPanorama":TDV.Tour.Script.isPanorama,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"quizShowScore":TDV.Tour.Script.quizShowScore,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizStart":TDV.Tour.Script.quizStart,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getPixels":TDV.Tour.Script.getPixels,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot},"data":{"defaultLocale":"en","textToSpeechConfig":{"volume":1,"stopBackgroundAudio":false,"speechOnTooltip":false,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"rate":1,"pitch":1},"history":{},"name":"Player536","locales":{"en":"locale/en.txt"}},"watermark":false,"propagateClick":false,"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.playList_996BBA26_896C_71F2_4184_540D59AA31B3.set('selectedIndex', 0)","layout":"absolute","minHeight":0,"minWidth":0,"width":"100%","scrollBarColor":"#000000","height":"100%","hash": "3a49616d328828b1719b21a272e0e71dc70fbff846d0ceeb2b7f07c71f04df77", "definitions": [{"backgroundColorRatios":[0,0.011764705882352941,0.996078431372549,1],"backgroundColor":["#FFFFFF","#000000","#000000","#FFFFFF"],"id":"Container_4F2CDF10_5AE5_C3F1_41C0_21F10023A2FB","class":"Container","right":"0%","layout":"absolute","data":{"name":"POP-UP-WINDOW"},"propagateClick":false,"backgroundOpacity":0.3,"bottom":"0%","minHeight":20,"minWidth":20,"width":"100%","scrollBarColor":"#000000","overflow":"scroll","visible":false,"height":"100%","children":["this.WebFrame_4C22FE50_5AE2_C271_41C1_AAA7C09F269A","this.WebFrame_4327ABA5_5ABD_C2D3_41C9_74E1B71B59AF","this.CloseButton_4DE20C08_5ADD_45D1_41B3_FB40DDF2A2B6"],"gap":10,"scrollBarMargin":2},{"id":"effect_408B9C93_5AA3_46F7_41C8_B963DF756D83","duration":500,"class":"FadeOutEffect"},{"id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","aaEnabled":true,"arrowKeysAction":"translate","class":"PanoramaPlayer","displayPlaybackBar":true},{"id":"effect_408BFC93_5AA3_46F7_41B8_D3F0A70A4E8B","duration":500,"class":"FadeInEffect"},{"id":"map_568203F8_5A23_6195_41B4_849561A32237","initialZoomFactor":1,"height":652,"label":trans('map_568203F8_5A23_6195_41B4_849561A32237.label'),"overlays":["this.overlay_988C7C7B_88BF_B414_41DC_11BFD2A72735","this.overlay_983DECE1_88A0_9434_41DE_BFA33B60F34B","this.overlay_986E1219_88A0_8C14_41D2_128538D53635","this.overlay_991D3263_897C_9672_41BB_5DACD2F1D25A"],"fieldOfViewOverlayRadiusScale":0.3,"fieldOfViewOverlayInsideColor":"#99D6FF","data":{"label":"floorplan"},"fieldOfViewOverlayOutsideColor":"#000000","scaleMode":"fit_inside","minimumZoomFactor":0.5,"fieldOfViewOverlayInsideOpacity":0.4,"width":727,"maximumZoomFactor":1.2,"thumbnailUrl":"media/map_568203F8_5A23_6195_41B4_849561A32237_t.png","class":"Map","image":{"class":"ImageResource","levels":["this.imlevel_9978396E_896C_7272_41DB_FFEAB1E44811","this.imlevel_9978296F_896C_7272_41E0_27FC052C8EE4","this.imlevel_9978196F_896C_7272_41E0_BD6F6C23DC8C"]}},{"playbackBarBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"id":"MapViewer","playbackBarBorderRadius":0,"toolTipBorderColor":"#767676","progressLeft":"33%","playbackBarHeadBackgroundColorRatios":[0,1],"right":"0%","toolTipFontColor":"#606060","playbackBarProgressBorderColor":"#000000","vrThumbstickRotationStep":20,"playbackBarHeadShadowColor":"#000000","progressBackgroundColorRatios":[0],"playbackBarHeadBorderRadius":0,"subtitlesBackgroundColor":"#000000","progressBarBorderRadius":2,"surfaceReticleColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","progressRight":"33%","playbackBarHeadShadow":true,"playbackBarHeadBorderColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarBorderSize":0,"toolTipPaddingRight":6,"vrPointerSelectionColor":"#FF6600","subtitlesFontColor":"#FFFFFF","subtitlesTop":0,"progressBarBorderSize":0,"progressOpacity":0.7,"toolTipTextShadowColor":"#000000","minWidth":1,"minHeight":1,"data":{"name":"Floorplan Viewer"},"vrPointerSelectionTime":2000,"subtitlesFontSize":"3vmin","playbackBarBackgroundOpacity":1,"toolTipShadowColor":"#333138","toolTipPaddingLeft":6,"progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingBottom":4,"progressBarBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"height":"29.989%","width":"32.29%","subtitlesFontFamily":"Arial","subtitlesBottom":10,"subtitlesTextShadowOpacity":1,"subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarBottom":5,"firstTransitionDuration":0,"toolTipFontSize":"1.11vmin","playbackBarBackgroundColor":["#FFFFFF"],"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"propagateClick":false,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"subtitlesTextShadowVerticalLength":1,"top":"0%","progressBackgroundColor":["#000000"],"progressBorderRadius":2,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"toolTipPaddingTop":4,"playbackBarHeadShadowBlurRadius":3,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"progressBottom":10,"subtitlesGap":0,"vrPointerColor":"#FFFFFF","playbackBarLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"progressHeight":2,"toolTipFontFamily":"Arial","progressBorderSize":0,"class":"ViewerArea"},{"class":"Image","id":"Image_430173B7_5ABE_C23F_41C5_E2D2FFD85A02","scaleMode":"fit_inside","right":"4.63%","verticalAlign":"middle","url":trans('Image_430173B7_5ABE_C23F_41C5_E2D2FFD85A02.url'),"data":{"name":"Image9257"},"horizontalAlign":"center","propagateClick":false,"backgroundOpacity":0,"bottom":"3.53%","minHeight":1,"minWidth":1,"width":"9.449%","height":"15.325%","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_40EF6817_5AA6_CDFF_41D1_E02831A8FA6B, 'showEffect', false)}.bind(this); visibleFunc(this.Container_4F2CDF10_5AE5_C3F1_41C0_21F10023A2FB); visibleFunc(this.WebFrame_4C22FE50_5AE2_C271_41C1_AAA7C09F269A); visibleFunc(this.Image_430173B7_5ABE_C23F_41C5_E2D2FFD85A02); visibleFunc(this.CloseButton_4DE20C08_5ADD_45D1_41B3_FB40DDF2A2B6)"},{"backgroundColorRatios":[0],"backgroundColor":["#FFFFFF"],"id":"WebFrame_4327ABA5_5ABD_C2D3_41C9_74E1B71B59AF","class":"WebFrame","right":"15.14%","url":trans('WebFrame_4327ABA5_5ABD_C2D3_41C9_74E1B71B59AF.url'),"data":{"name":"WebFrame5558"},"propagateClick":false,"bottom":"11.58%","minHeight":1,"minWidth":1,"width":"74.722%","height":"80.044%","visible":false},{"backgroundColorRatios":[0,0.09803921568627451,1],"backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"class":"CloseButton","fontSize":"1.29vmin","id":"CloseButton_4DE20C08_5ADD_45D1_41B3_FB40DDF2A2B6","right":"14.39%","layout":"horizontal","data":{"name":"CloseButton5597"},"propagateClick":false,"rollOverIconColor":"#666666","backgroundOpacity":0.3,"iconHeight":"100%","iconLineWidth":2,"minHeight":1,"top":"6.17%","pressedIconColor":"#888888","minWidth":1,"borderColor":"#000000","width":40,"height":40,"iconWidth":"100%","click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_4D1D092A_5AA5_4FD1_41BC_0F3CB6725740, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_4F2CDF10_5AE5_C3F1_41C0_21F10023A2FB); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_408BFC93_5AA3_46F7_41B8_D3F0A70A4E8B, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_408B9C93_5AA3_46F7_41C8_B963DF756D83, 'hideEffect', false)}.bind(this); if(!this.Image_430173B7_5ABE_C23F_41C5_E2D2FFD85A02.get('visible')){ visibleFunc(this.Image_430173B7_5ABE_C23F_41C5_E2D2FFD85A02) } else { invisibleFunc(this.Image_430173B7_5ABE_C23F_41C5_E2D2FFD85A02) }","visible":false,"fontFamily":"Arial","iconColor":"#000000","fontColor":"#FFFFFF"},{"id":"panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4","label":trans('panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4.label'),"hfovMin":"135%","hfovMax":130,"data":{"label":"1"},"hfov":360,"vfov":180,"frames":[{"thumbnailUrl":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":2048,"colCount":24,"rowCount":4,"url":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":12288,"tags":"ondemand"},{"height":1024,"colCount":12,"rowCount":2,"url":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":6144,"tags":"ondemand"},{"height":512,"colCount":6,"rowCount":1,"url":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":3072,"tags":["ondemand","preload"]}]}}],"thumbnailUrl":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_t.jpg","class":"Panorama"},{"id":"panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_camera","enterPointingToHorizon":true,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"class":"PanoramaCamera","initialSequence":"this.sequence_50D3945B_5A23_268B_41D3_F9E7996FC48F"},{"id":"mainPlayList","class":"PlayList","items":["this.PanoramaPlayListItem_9955BA59_896C_765F_41DA_046ED1BFFE6A","this.PanoramaPlayListItem_99558A59_896C_765F_41BB_5837C1C915DB"]},{"id":"panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_camera","enterPointingToHorizon":true,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"class":"PanoramaCamera","initialSequence":"this.sequence_51C374B2_5A22_E795_41AE_5414A7CF0F2B"},{"backgroundColorRatios":[0],"backgroundColor":["#FFFFFF"],"id":"WebFrame_4C22FE50_5AE2_C271_41C1_AAA7C09F269A","class":"WebFrame","right":"15.14%","url":trans('WebFrame_4C22FE50_5AE2_C271_41C1_AAA7C09F269A.url'),"data":{"name":"WebFrame5558"},"propagateClick":false,"bottom":"11.58%","minHeight":1,"minWidth":1,"width":"74.722%","height":"80.044%","visible":false},{"playbackBarBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"id":"MainViewer","playbackBarBorderRadius":0,"toolTipBorderColor":"#767676","progressLeft":"33%","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","toolTipFontColor":"#606060","playbackBarProgressBorderColor":"#000000","vrThumbstickRotationStep":20,"subtitlesBackgroundColor":"#000000","progressBackgroundColorRatios":[0],"playbackBarHeadBorderRadius":0,"progressBarBorderRadius":2,"surfaceReticleColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","progressRight":"33%","playbackBarHeadShadow":true,"playbackBarHeadBorderColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarBorderSize":0,"toolTipPaddingRight":6,"vrPointerSelectionColor":"#FF6600","subtitlesFontColor":"#FFFFFF","subtitlesTop":0,"progressBarBorderSize":0,"progressOpacity":0.7,"toolTipTextShadowColor":"#000000","minWidth":100,"minHeight":50,"data":{"name":"Main Viewer"},"vrPointerSelectionTime":2000,"subtitlesFontSize":"3vmin","playbackBarBackgroundOpacity":1,"toolTipShadowColor":"#333138","toolTipPaddingLeft":6,"progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingBottom":4,"progressBarBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"height":"100%","width":"100%","subtitlesFontFamily":"Arial","subtitlesBottom":50,"subtitlesTextShadowOpacity":1,"subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarBottom":5,"firstTransitionDuration":0,"toolTipFontSize":"1.11vmin","playbackBarBackgroundColor":["#FFFFFF"],"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"propagateClick":false,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"subtitlesTextShadowVerticalLength":1,"playbackBarBackgroundColorDirection":"vertical","progressBackgroundColor":["#000000"],"progressBorderRadius":2,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"vrPointerColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"toolTipPaddingTop":4,"playbackBarHeadShadowBlurRadius":3,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"progressBottom":10,"subtitlesGap":0,"playbackBarLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"progressHeight":2,"toolTipFontFamily":"Arial","progressBorderSize":0,"class":"ViewerArea"},{"id":"playList_996BBA26_896C_71F2_4184_540D59AA31B3","class":"PlayList","items":[{"media":"this.map_568203F8_5A23_6195_41B4_849561A32237","class":"MapPlayListItem","player":"this.MapViewerMapPlayer","begin":"this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"}]},{"id":"effect_4D1D092A_5AA5_4FD1_41BC_0F3CB6725740","duration":500,"class":"FadeOutEffect"},{"id":"MapViewerMapPlayer","movementMode":"constrained","class":"MapPlayer","viewerArea":"this.MapViewer"},{"id":"panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84","label":trans('panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84.label'),"hfovMin":"135%","hfovMax":130,"data":{"label":"2"},"hfov":360,"vfov":180,"frames":[{"thumbnailUrl":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":2048,"colCount":24,"rowCount":4,"url":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":12288,"tags":"ondemand"},{"height":1024,"colCount":12,"rowCount":2,"url":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":6144,"tags":"ondemand"},{"height":512,"colCount":6,"rowCount":1,"url":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":3072,"tags":["ondemand","preload"]}]}}],"thumbnailUrl":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_t.jpg","class":"Panorama"},{"id":"effect_40EF6817_5AA6_CDFF_41D1_E02831A8FA6B","duration":500,"class":"FadeInEffect"},{"id":"overlay_988C7C7B_88BF_B414_41DC_11BFD2A72735","image":{"x":274,"y":309.5,"offsetX":27,"data":{"label":"1-red"},"width":54,"scaleMode":"fit_inside","height":39,"offsetY":19.5,"class":"HotspotMapOverlayImage","image":"this.res_99E109F5_88E3_7C1C_419A_BE6C50AB3A93"},"areas":["this.HotspotMapOverlayArea_8706ED3A_88BF_B414_41BE_C8B7D840AD15"],"useHandCursor":true,"class":"AreaHotspotMapOverlay","data":{"label":"1-red"}},{"id":"overlay_983DECE1_88A0_9434_41DE_BFA33B60F34B","image":{"x":565,"y":305.5,"offsetX":27,"data":{"label":"2-red"},"width":54,"scaleMode":"fit_inside","height":39,"offsetY":19.5,"class":"HotspotMapOverlayImage","image":"this.res_99E109F5_88E3_7C1C_419A_BE6C50AB3A93"},"areas":["this.HotspotMapOverlayArea_983E3CE2_88A0_9434_41B0_D9EDBB741033"],"useHandCursor":true,"class":"AreaHotspotMapOverlay","data":{"label":"2-red"}},{"id":"overlay_986E1219_88A0_8C14_41D2_128538D53635","image":{"x":274,"y":309.5,"offsetX":27,"data":{"label":"1-green"},"width":54,"scaleMode":"fit_inside","height":39,"offsetY":19.5,"class":"HotspotMapOverlayImage","image":"this.res_99E1C9F6_88E3_7C1C_41C3_00A6E099646A"},"areas":["this.HotspotMapOverlayArea_9854F22D_88A0_8C0C_41C5_24DFE5D40BC1"],"useHandCursor":true,"class":"AreaHotspotMapOverlay","data":{"label":"1-green"}},{"id":"overlay_991D3263_897C_9672_41BB_5DACD2F1D25A","image":{"x":565,"y":305.5,"offsetX":27,"data":{"label":"2-green"},"width":54,"scaleMode":"fit_inside","height":39,"offsetY":19.5,"class":"HotspotMapOverlayImage","image":"this.res_99E1C9F6_88E3_7C1C_41C3_00A6E099646A"},"areas":["this.HotspotMapOverlayArea_9919E265_897C_9676_41DA_4DC039713158"],"useHandCursor":true,"class":"AreaHotspotMapOverlay","data":{"label":"2-green"}},{"id":"imlevel_9978396E_896C_7272_41DB_FFEAB1E44811","height":918,"url":trans('imlevel_9978396E_896C_7272_41DB_FFEAB1E44811.url'),"class":"ImageResourceLevel","width":1024},{"id":"imlevel_9978296F_896C_7272_41E0_27FC052C8EE4","height":459,"url":trans('imlevel_9978296F_896C_7272_41E0_27FC052C8EE4.url'),"class":"ImageResourceLevel","width":512},{"id":"imlevel_9978196F_896C_7272_41E0_BD6F6C23DC8C","height":229,"url":trans('imlevel_9978196F_896C_7272_41E0_BD6F6C23DC8C.url'),"class":"ImageResourceLevel","width":256,"tags":"preload"},{"id":"sequence_50D3945B_5A23_268B_41D3_F9E7996FC48F","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"class":"PanoramaCameraSequence"},{"id":"PanoramaPlayListItem_9955BA59_896C_765F_41DA_046ED1BFFE6A","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","camera":"this.panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_camera","media":"this.panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4","class":"PanoramaPlayListItem"},{"id":"PanoramaPlayListItem_99558A59_896C_765F_41BB_5837C1C915DB","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","end":"this.trigger('tourEnded')","camera":"this.panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_camera","media":"this.panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84","class":"PanoramaPlayListItem"},{"id":"sequence_51C374B2_5A22_E795_41AE_5414A7CF0F2B","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"class":"PanoramaCameraSequence"},{"id":"res_99E109F5_88E3_7C1C_419A_BE6C50AB3A93","class":"ImageResource","levels":[{"height":39,"url":"media/res_99E109F5_88E3_7C1C_419A_BE6C50AB3A93_0.png","class":"ImageResourceLevel","width":39}]},{"id":"HotspotMapOverlayArea_8706ED3A_88BF_B414_41BE_C8B7D840AD15","class":"HotspotMapOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_9955BA59_896C_765F_41DA_046ED1BFFE6A, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any"},{"id":"HotspotMapOverlayArea_983E3CE2_88A0_9434_41B0_D9EDBB741033","class":"HotspotMapOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_99558A59_896C_765F_41BB_5837C1C915DB, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any"},{"id":"res_99E1C9F6_88E3_7C1C_41C3_00A6E099646A","class":"ImageResource","levels":[{"height":39,"url":"media/res_99E1C9F6_88E3_7C1C_41C3_00A6E099646A_0.png","class":"ImageResourceLevel","width":39}]},{"id":"HotspotMapOverlayArea_9854F22D_88A0_8C0C_41C5_24DFE5D40BC1","class":"HotspotMapOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_9955BA59_896C_765F_41DA_046ED1BFFE6A, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0); try{eval('const firebaseConfig = {    apiKey: \"AIzaSyBw9Y6LVcqeKJQhx56QjZFbPhFvb29_6Mg\",    authDomain: \"reservation-system-43d03.firebaseapp.com\",    projectId: \"reservation-system-43d03\",    storageBucket: \"reservation-system-43d03.appspot.com\",    messagingSenderId: \"526682468950\",    appId: \"1:526682468950:web:5fa1f6c6e04fc111dc41f7\",    measurementId: \"G-9RN13Z2JPE\"  };        firebase.initializeApp(firebaseConfig);        const db = firebase.firestore();        // Fetch data from Firebase        function fetchData() {            const dataDiv = document.getElementById(\\'data\\');            db.collection(\"your_collection_name\").get().then((querySnapshot) => {                querySnapshot.forEach((doc) => {                    dataDiv.innerHTML += `<p>${doc.id}: ${JSON.stringify(doc.data())}<\\/p>`;                });            }).catch((error) => {                console.error(\"Error fetching data: \", error);            });        }        // Call fetchData function when the page loads        window.onload = fetchData;')}catch(e){console.log(e)}","mapColor":"any"},{"id":"HotspotMapOverlayArea_9919E265_897C_9676_41DA_4DC039713158","class":"HotspotMapOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_99558A59_896C_765F_41BB_5837C1C915DB, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1); try{eval('this.getComponentByName(\"2-green\").size=0;')}catch(e){console.log(e)}","mapColor":"any"}],"defaultMenu":["fullscreen","mute","rotation"],"gap":10,"scrollBarMargin":2};
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