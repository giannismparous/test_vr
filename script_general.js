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
var script = {"id":"rootPlayer","backgroundColor":["#FFFFFF"],"data":{"locales":{"en":"locale/en.txt"},"history":{},"textToSpeechConfig":{"volume":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"rate":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"pitch":1},"name":"Player536","defaultLocale":"en"},"backgroundColorRatios":[0],"scrollBarColor":"#000000","defaultMenu":["fullscreen","mute","rotation"],"gap":10,"class":"Player","scripts":{"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getKey":TDV.Tour.Script.getKey,"historyGoForward":TDV.Tour.Script.historyGoForward,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"cloneBindings":TDV.Tour.Script.cloneBindings,"isPanorama":TDV.Tour.Script.isPanorama,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"existsKey":TDV.Tour.Script.existsKey,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"registerKey":TDV.Tour.Script.registerKey,"startMeasurement":TDV.Tour.Script.startMeasurement,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"unregisterKey":TDV.Tour.Script.unregisterKey,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getComponentByName":TDV.Tour.Script.getComponentByName,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setValue":TDV.Tour.Script.setValue,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"translate":TDV.Tour.Script.translate,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"init":TDV.Tour.Script.init,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setMapLocation":TDV.Tour.Script.setMapLocation,"mixObject":TDV.Tour.Script.mixObject,"playAudioList":TDV.Tour.Script.playAudioList,"setLocale":TDV.Tour.Script.setLocale,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"executeJS":TDV.Tour.Script.executeJS,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"initQuiz":TDV.Tour.Script.initQuiz,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"clone":TDV.Tour.Script.clone,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getOverlays":TDV.Tour.Script.getOverlays,"initAnalytics":TDV.Tour.Script.initAnalytics,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizShowScore":TDV.Tour.Script.quizShowScore,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"resumePlayers":TDV.Tour.Script.resumePlayers,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizStart":TDV.Tour.Script.quizStart,"showWindow":TDV.Tour.Script.showWindow,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"createTween":TDV.Tour.Script.createTween,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"openLink":TDV.Tour.Script.openLink,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"historyGoBack":TDV.Tour.Script.historyGoBack,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizFinish":TDV.Tour.Script.quizFinish,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"downloadFile":TDV.Tour.Script.downloadFile,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"shareSocial":TDV.Tour.Script.shareSocial,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getMediaByName":TDV.Tour.Script.getMediaByName,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPixels":TDV.Tour.Script.getPixels},"layout":"absolute","height":"100%","propagateClick":false,"scrollBarMargin":2,"watermark":false,"minHeight":0,"children":["this.MainViewer","this.MapViewer","this.IconButton_5729BAF9_5A38_3D47_41CE_E4F5F1F6701E"],"minWidth":0,"width":"100%","start":"this.init(); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.playList_55F368FE_5A65_CE31_41D3_9CA5D44E5024.set('selectedIndex', 0)","hash": "f0c9d1442431de33c604930a200c9de9e367277f5397bda5f594b7b6754fc1e8", "definitions": [{"id":"IconButton_5729BAF9_5A38_3D47_41CE_E4F5F1F6701E","right":"17.77%","data":{"name":"Button31987"},"class":"IconButton","verticalAlign":"middle","bottom":"18.63%","horizontalAlign":"center","rollOverIconURL":"skin/IconButton_5729BAF9_5A38_3D47_41CE_E4F5F1F6701E_rollover.png","transparencyActive":true,"height":93,"iconURL":"skin/IconButton_5729BAF9_5A38_3D47_41CE_E4F5F1F6701E.png","width":81,"propagateClick":false,"backgroundOpacity":0,"click":"try{eval('var currentPanoramaName = get(\\'panorama\\', \\'name\\');console.log(\"Current panorama name: \" + currentPanoramaName);console.log(\"test\");')}catch(e){console.log(e)}","pressedIconURL":"skin/IconButton_5729BAF9_5A38_3D47_41CE_E4F5F1F6701E_pressed.png","minHeight":0,"minWidth":0},{"id":"MapViewer","right":"0%","vrPointerColor":"#FFFFFF","progressBorderSize":0,"progressRight":"33%","playbackBarBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","toolTipShadowColor":"#333138","playbackBarBackgroundColor":["#FFFFFF"],"progressHeight":2,"progressBarBorderRadius":2,"progressBarBorderSize":0,"playbackBarHeight":10,"toolTipPaddingRight":6,"surfaceReticleColor":"#FFFFFF","progressBarBackgroundColorDirection":"horizontal","progressOpacity":0.7,"subtitlesFontColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"playbackBarHeadWidth":6,"progressBarBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"toolTipFontFamily":"Arial","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"playbackBarRight":0,"subtitlesBorderColor":"#FFFFFF","data":{"name":"Floorplan Viewer"},"toolTipFontColor":"#606060","height":"29.989%","toolTipPaddingLeft":6,"playbackBarProgressBorderRadius":0,"progressBarBackgroundColorRatios":[0],"progressLeft":"33%","progressBorderRadius":2,"subtitlesTextShadowOpacity":1,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundOpacity":1,"subtitlesTop":0,"width":"32.29%","toolTipPaddingTop":4,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"vrPointerSelectionColor":"#FF6600","subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesGap":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesBackgroundColor":"#000000","firstTransitionDuration":0,"playbackBarLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"progressBorderColor":"#000000","subtitlesBottom":10,"class":"ViewerArea","playbackBarHeadHeight":15,"vrPointerSelectionTime":2000,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontSize":"1.11vmin","subtitlesTextShadowColor":"#000000","playbackBarBorderColor":"#FFFFFF","top":"0%","playbackBarHeadBorderSize":0,"progressBackgroundColor":["#000000"],"playbackBarHeadShadow":true,"toolTipPaddingBottom":4,"playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"progressBottom":10,"playbackBarBorderRadius":0,"propagateClick":false,"progressBackgroundColorRatios":[0],"subtitlesFontFamily":"Arial","subtitlesFontSize":"3vmin","minHeight":1,"vrThumbstickRotationStep":20,"minWidth":1,"toolTipTextShadowColor":"#000000","toolTipBorderColor":"#767676","playbackBarHeadBorderColor":"#000000"},{"id":"panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_50D3945B_5A23_268B_41D3_F9E7996FC48F","class":"PanoramaCamera","enterPointingToHorizon":true},{"viewerArea":"this.MapViewer","id":"MapViewerMapPlayer","movementMode":"constrained","class":"MapPlayer"},{"id":"MainViewer","vrPointerColor":"#FFFFFF","progressBorderSize":0,"progressRight":"33%","playbackBarBorderSize":0,"subtitlesBackgroundOpacity":0.2,"toolTipBackgroundColor":"#F6F6F6","toolTipShadowColor":"#333138","playbackBarBackgroundColor":["#FFFFFF"],"progressHeight":2,"progressBarBorderRadius":2,"progressBarBorderSize":0,"playbackBarHeight":10,"toolTipPaddingRight":6,"surfaceReticleColor":"#FFFFFF","progressBarBackgroundColorDirection":"horizontal","progressOpacity":0.7,"subtitlesFontColor":"#FFFFFF","data":{"name":"Main Viewer"},"playbackBarHeadWidth":6,"progressBarBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"toolTipFontFamily":"Arial","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"playbackBarRight":0,"subtitlesBorderColor":"#FFFFFF","toolTipFontColor":"#606060","height":"100%","toolTipPaddingLeft":6,"playbackBarProgressBorderRadius":0,"progressBarBackgroundColorRatios":[0],"progressLeft":"33%","progressBorderRadius":2,"subtitlesTextShadowOpacity":1,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundOpacity":1,"subtitlesTop":0,"width":"100%","toolTipPaddingTop":4,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"vrPointerSelectionColor":"#FF6600","subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesGap":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesBackgroundColor":"#000000","firstTransitionDuration":0,"playbackBarLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"progressBorderColor":"#000000","subtitlesBottom":50,"class":"ViewerArea","playbackBarHeadHeight":15,"vrPointerSelectionTime":2000,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontSize":"1.11vmin","subtitlesTextShadowColor":"#000000","playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"progressBackgroundColor":["#000000"],"playbackBarHeadShadow":true,"playbackBarProgressBorderColor":"#000000","toolTipPaddingBottom":4,"playbackBarHeadBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"progressBottom":10,"playbackBarBorderRadius":0,"propagateClick":false,"progressBackgroundColorRatios":[0],"subtitlesFontFamily":"Arial","subtitlesFontSize":"3vmin","minHeight":50,"vrThumbstickRotationStep":20,"minWidth":100,"toolTipTextShadowColor":"#000000","toolTipBorderColor":"#767676","playbackBarHeadBorderColor":"#000000"},{"id":"panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84","label":trans('panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84.label'),"frames":[{"cube":{"class":"ImageResource","levels":[{"height":2048,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_0/{face}/0/{row}_{column}.jpg","colCount":24,"width":12288,"rowCount":4},{"height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_0/{face}/1/{row}_{column}.jpg","colCount":12,"width":6144,"rowCount":2},{"height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_0/{face}/2/{row}_{column}.jpg","colCount":6,"width":3072,"rowCount":1}]},"thumbnailUrl":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_t.jpg","class":"CubicPanoramaFrame"}],"class":"Panorama","data":{"label":"2"},"vfov":180,"hfovMin":"135%","hfov":360,"thumbnailUrl":"media/panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_t.jpg","hfovMax":130},{"id":"map_568203F8_5A23_6195_41B4_849561A32237","label":trans('map_568203F8_5A23_6195_41B4_849561A32237.label'),"fieldOfViewOverlayOutsideColor":"#000000","class":"Map","minimumZoomFactor":0.5,"data":{"label":"floorplan"},"maximumZoomFactor":1.2,"scaleMode":"fit_inside","fieldOfViewOverlayRadiusScale":0.3,"fieldOfViewOverlayInsideColor":"#99D6FF","height":652,"width":727,"image":{"class":"ImageResource","levels":["this.imlevel_55035811_5A65_CDF3_41BE_5617CCB5947F","this.imlevel_5502A812_5A65_CDF1_41D2_ACE972CF04B1","this.imlevel_5502B812_5A65_CDF1_41B0_220585855BB6"]},"overlays":["this.overlay_5405CD8B_5A26_E674_41D3_8D6D35C46F36","this.overlay_54B6E09F_5A27_FF8B_41B1_A49B5EAC2A7D"],"initialZoomFactor":1,"thumbnailUrl":"media/map_568203F8_5A23_6195_41B4_849561A32237_t.png","fieldOfViewOverlayInsideOpacity":0.4},{"id":"playList_55F368FE_5A65_CE31_41D3_9CA5D44E5024","items":[{"media":"this.map_568203F8_5A23_6195_41B4_849561A32237","player":"this.MapViewerMapPlayer","class":"MapPlayListItem","begin":"this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"}],"class":"PlayList"},{"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","arrowKeysAction":"translate","aaEnabled":true,"displayPlaybackBar":true,"mouseControlMode":"drag_rotation"},{"id":"panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_51C374B2_5A22_E795_41AE_5414A7CF0F2B","class":"PanoramaCamera","enterPointingToHorizon":true},{"id":"mainPlayList","items":["this.PanoramaPlayListItem_55C8E943_5A65_CE57_41B1_BF490641CBD1","this.PanoramaPlayListItem_55C8D943_5A65_CE57_41C6_DCE8FC209895"],"class":"PlayList"},{"id":"panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4","label":trans('panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4.label'),"frames":[{"cube":{"class":"ImageResource","levels":[{"height":2048,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_0/{face}/0/{row}_{column}.jpg","colCount":24,"width":12288,"rowCount":4},{"height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_0/{face}/1/{row}_{column}.jpg","colCount":12,"width":6144,"rowCount":2},{"height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_0/{face}/2/{row}_{column}.jpg","colCount":6,"width":3072,"rowCount":1}]},"thumbnailUrl":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_t.jpg","class":"CubicPanoramaFrame"}],"class":"Panorama","data":{"label":"1"},"vfov":180,"hfovMin":"135%","hfov":360,"thumbnailUrl":"media/panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_t.jpg","hfovMax":130},{"id":"sequence_50D3945B_5A23_268B_41D3_F9E7996FC48F","class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"id":"imlevel_55035811_5A65_CDF3_41BE_5617CCB5947F","height":918,"class":"ImageResourceLevel","url":trans('imlevel_55035811_5A65_CDF3_41BE_5617CCB5947F.url'),"width":1024},{"id":"imlevel_5502A812_5A65_CDF1_41D2_ACE972CF04B1","height":459,"class":"ImageResourceLevel","url":trans('imlevel_5502A812_5A65_CDF1_41D2_ACE972CF04B1.url'),"width":512},{"id":"imlevel_5502B812_5A65_CDF1_41B0_220585855BB6","height":229,"tags":"preload","class":"ImageResourceLevel","url":trans('imlevel_5502B812_5A65_CDF1_41B0_220585855BB6.url'),"width":256},{"id":"overlay_5405CD8B_5A26_E674_41D3_8D6D35C46F36","class":"AreaHotspotMapOverlay","areas":["this.HotspotMapOverlayArea_570A9DBB_5A26_E194_418B_AD8EA1AC3134"],"useHandCursor":true,"data":{"label":"Image"},"image":{"x":271,"y":320.5,"data":{"label":"Image"},"width":75,"scaleMode":"fit_inside","height":72,"offsetY":36,"image":"this.res_4A0E802C_5A2D_1E8D_41D5_26CB3A7A6686","class":"HotspotMapOverlayImage","offsetX":37.5}},{"id":"overlay_54B6E09F_5A27_FF8B_41B1_A49B5EAC2A7D","class":"AreaHotspotMapOverlay","areas":["this.HotspotMapOverlayArea_54B130A1_5A27_FFB7_41B8_D80389619BFD"],"useHandCursor":true,"data":{"label":"Image"},"image":{"x":590,"y":323.5,"data":{"label":"Image"},"width":75,"scaleMode":"fit_inside","height":72,"offsetY":36,"image":"this.res_4A0E802C_5A2D_1E8D_41D5_26CB3A7A6686","class":"HotspotMapOverlayImage","offsetX":37.5}},{"id":"sequence_51C374B2_5A22_E795_41AE_5414A7CF0F2B","class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"id":"PanoramaPlayListItem_55C8E943_5A65_CE57_41B1_BF490641CBD1","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4_camera","media":"this.panorama_5693EB5B_5A23_E28B_41C8_7870E1AFE3C4","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"id":"PanoramaPlayListItem_55C8D943_5A65_CE57_41C6_DCE8FC209895","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","camera":"this.panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84_camera","media":"this.panorama_56139C89_5A23_2674_41B0_D72E4DEC6D84","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"},{"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_55C8E943_5A65_CE57_41B1_BF490641CBD1, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any","id":"HotspotMapOverlayArea_570A9DBB_5A26_E194_418B_AD8EA1AC3134","class":"HotspotMapOverlayArea"},{"id":"res_4A0E802C_5A2D_1E8D_41D5_26CB3A7A6686","class":"ImageResource","levels":[{"height":72,"class":"ImageResourceLevel","url":"media/res_4A0E802C_5A2D_1E8D_41D5_26CB3A7A6686_0.png","width":62}]},{"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_55C8D943_5A65_CE57_41C6_DCE8FC209895, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any","id":"HotspotMapOverlayArea_54B130A1_5A27_FFB7_41B8_D80389619BFD","class":"HotspotMapOverlayArea"}]};
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
//Generated with v2023.2.7, Tue Jan 30 2024