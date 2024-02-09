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
var script = {"id":"rootPlayer","minHeight":0,"children":["this.MainViewer","this.MapViewer"],"backgroundColorRatios":[0],"backgroundColor":["#FFFFFF"],"scrollBarMargin":2,"scripts":{"quizShowScore":TDV.Tour.Script.quizShowScore,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"startMeasurement":TDV.Tour.Script.startMeasurement,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"registerKey":TDV.Tour.Script.registerKey,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"resumePlayers":TDV.Tour.Script.resumePlayers,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getKey":TDV.Tour.Script.getKey,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"shareSocial":TDV.Tour.Script.shareSocial,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"init":TDV.Tour.Script.init,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"createTween":TDV.Tour.Script.createTween,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"mixObject":TDV.Tour.Script.mixObject,"setLocale":TDV.Tour.Script.setLocale,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"translate":TDV.Tour.Script.translate,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"playAudioList":TDV.Tour.Script.playAudioList,"historyGoBack":TDV.Tour.Script.historyGoBack,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"clone":TDV.Tour.Script.clone,"getComponentByName":TDV.Tour.Script.getComponentByName,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"downloadFile":TDV.Tour.Script.downloadFile,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"initQuiz":TDV.Tour.Script.initQuiz,"setMapLocation":TDV.Tour.Script.setMapLocation,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"unregisterKey":TDV.Tour.Script.unregisterKey,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"executeJS":TDV.Tour.Script.executeJS,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"showWindow":TDV.Tour.Script.showWindow,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getOverlays":TDV.Tour.Script.getOverlays,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"historyGoForward":TDV.Tour.Script.historyGoForward,"setValue":TDV.Tour.Script.setValue,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"isPanorama":TDV.Tour.Script.isPanorama,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"existsKey":TDV.Tour.Script.existsKey,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"openLink":TDV.Tour.Script.openLink,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizFinish":TDV.Tour.Script.quizFinish,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getPixels":TDV.Tour.Script.getPixels,"quizStart":TDV.Tour.Script.quizStart,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupImage":TDV.Tour.Script.showPopupImage,"getMediaByName":TDV.Tour.Script.getMediaByName,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"initAnalytics":TDV.Tour.Script.initAnalytics,"cloneBindings":TDV.Tour.Script.cloneBindings},"data":{"history":{},"defaultLocale":"en","textToSpeechConfig":{"stopBackgroundAudio":false,"speechOnTooltip":false,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"rate":1,"volume":1,"pitch":1},"locales":{"en":"locale/en.txt"},"name":"Player11383"},"watermark":false,"propagateClick":false,"start":"this.init(); this.playList_97B4CA10_8D01_FF69_41C1_BC6D093F45AC.set('selectedIndex', 0)","scrollBarColor":"#000000","width":"100%","height":"100%","hash": "6a0c6c171f2864286cae693696d0208c4c376e781a21c4dac47abf809b625633", "definitions": [{"id":"mainPlayList","class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_95F9C7E2_8D01_34A8_41D5_B0C963AB9649_camera","media":"this.panorama_95F9C7E2_8D01_34A8_41D5_B0C963AB9649"}]},{"id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","aaEnabled":true,"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","viewerArea":"this.MainViewer","arrowKeysAction":"translate","displayPlaybackBar":true},{"id":"map_942EC8A2_8D01_5CA9_41DB_BDF416792A70","initialZoomFactor":1,"height":652,"label":trans('map_942EC8A2_8D01_5CA9_41DB_BDF416792A70.label'),"fieldOfViewOverlayRadiusScale":0.3,"minimumZoomFactor":0.5,"data":{"label":"floorplan"},"fieldOfViewOverlayOutsideColor":"#000000","scaleMode":"fit_inside","class":"Map","fieldOfViewOverlayInsideOpacity":0.4,"width":727,"maximumZoomFactor":1.2,"thumbnailUrl":"media/map_942EC8A2_8D01_5CA9_41DB_BDF416792A70_t.png","fieldOfViewOverlayInsideColor":"#99D6FF","image":{"levels":["this.imlevel_97A94867_8D01_FBB7_41D2_997096968E8E","this.imlevel_97A95868_8D01_FBB9_41DD_CD69836B07AC","this.imlevel_97A92868_8D01_FBB9_41E0_9E47633B0851"],"class":"ImageResource"}},{"id":"playList_97B4CA10_8D01_FF69_41C1_BC6D093F45AC","class":"PlayList","items":[{"class":"MapPlayListItem","media":"this.map_942EC8A2_8D01_5CA9_41DB_BDF416792A70","player":"this.MapViewerMapPlayer","begin":"this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"}]},{"id":"MapViewerMapPlayer","class":"MapPlayer","movementMode":"constrained","viewerArea":"this.MapViewer"},{"id":"MapViewer","playbackBarBorderColor":"#FFFFFF","toolTipFontFamily":"Arial","playbackBarBorderRadius":0,"toolTipBorderColor":"#767676","progressLeft":"33%","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","toolTipFontColor":"#606060","playbackBarProgressBorderColor":"#000000","vrThumbstickRotationStep":20,"playbackBarHeadHeight":15,"subtitlesBackgroundColor":"#000000","progressBackgroundColorRatios":[0],"toolTipShadowColor":"#333138","progressBarBorderRadius":2,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"progressRight":"33%","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadow":true,"playbackBarHeadBorderColor":"#000000","playbackBarHeadBorderSize":0,"toolTipPaddingRight":6,"subtitlesFontColor":"#FFFFFF","playbackBarBorderSize":0,"progressBarBorderSize":0,"toolTipTextShadowColor":"#000000","subtitlesTop":0,"progressOpacity":0.7,"data":{"name":"Floorplan Viewer"},"vrPointerSelectionTime":2000,"vrPointerSelectionColor":"#FF6600","subtitlesFontSize":"3vmin","playbackBarBackgroundOpacity":1,"toolTipPaddingBottom":4,"toolTipPaddingLeft":6,"progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"height":"33.076%","subtitlesBottom":10,"width":"25.031%","subtitlesFontFamily":"Arial","minHeight":1,"subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowOpacity":1,"minWidth":1,"subtitlesTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarBottom":5,"firstTransitionDuration":0,"progressBorderColor":"#000000","toolTipFontSize":"1.11vmin","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"propagateClick":false,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"subtitlesTextShadowVerticalLength":1,"top":"0%","progressBackgroundColor":["#000000"],"progressBorderRadius":2,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"toolTipPaddingTop":4,"playbackBarHeadShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"subtitlesBorderColor":"#FFFFFF","progressBottom":10,"subtitlesGap":0,"vrPointerColor":"#FFFFFF","playbackBarLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"progressHeight":2,"class":"ViewerArea","progressBorderSize":0,"left":"0%"},{"id":"panorama_95F9C7E2_8D01_34A8_41D5_B0C963AB9649_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_9AD865C0_8D01_54E9_41D5_96B58A5307EC"},{"id":"MainViewer","playbackBarBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarBorderRadius":0,"toolTipBorderColor":"#767676","progressLeft":"33%","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","toolTipFontColor":"#606060","playbackBarProgressBorderColor":"#000000","vrThumbstickRotationStep":20,"subtitlesBackgroundColor":"#000000","progressBackgroundColorRatios":[0],"toolTipShadowColor":"#333138","progressBarBorderRadius":2,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"progressRight":"33%","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadow":true,"playbackBarHeadBorderColor":"#000000","playbackBarHeadBorderSize":0,"toolTipPaddingRight":6,"subtitlesFontColor":"#FFFFFF","playbackBarBorderSize":0,"progressBarBorderSize":0,"toolTipTextShadowColor":"#000000","subtitlesTop":0,"progressOpacity":0.7,"data":{"name":"Main Viewer"},"vrPointerSelectionTime":2000,"vrPointerSelectionColor":"#FF6600","subtitlesFontSize":"3vmin","playbackBarBackgroundOpacity":1,"toolTipPaddingBottom":4,"toolTipPaddingLeft":6,"progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"height":"100%","subtitlesBottom":50,"init":"try{eval('/** * v2 * JavaScript Library and Documentation for 3DVista made by Matej Murin * Version: 0.1 PRE-RELEASE * * License: * The source code and all works related to the source code (e.g., documentation) are licensed under a non-sublicensable, non-exclusive, worldwide license to a specific user and are subject to the payment of appropriate fees. Any breach of this license, including unauthorized distribution or the sale of a product containing the library code, may result in the termination of the license. Termination, in such cases, may lead to legal action, encompassing, but not limited to, seeking damages and injunctive relief. * * Copyright 2023 blaze IT s. r. o.. All rights reserved. * * Created by Matej Murin * matej@blazeit.sk * * Powered by blaze IT * https://blazeit.sk */window.blazeIT = {  blaze: (it) => it(this),};(()=>{\"use strict\";var __webpack_modules__={602:(e,t,r)=>{function a(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}r.d(t,{E_:()=>n,CT:()=>i,A5:()=>o,$C:()=>s,hE:()=>l,w7:()=>c,VR:()=>u});var n={click:\"click\",mouseEnter:\"mouseEnter\",mouseLeave:\"mouseLeave\",rollOut:\"rollOut\",rollOver:\"rollOver\",show:\"show\",hide:\"hide\"},i=[n.click,n.rollOut,n.rollOver,n.show,n.hide],o=[\"and\",\"or\"],s=(a(r={UIComponent:\"UIComponent\",Container:\"Container\",WebFrame:\"WebFrame\",Label:\"Label\",HTMLText:\"HTMLText\",Image:\"Image\",Button:\"Button\",IconButton:\"IconButton\",CloseButton:\"CloseButton\",ProgressBar:\"ProgressBar\",TabPanel:\"TabPanel\",DropDown:\"DropDown\",ThumbnailList:\"ThumbnailList\",Panorama:\"Panorama\",LivePanorama:\"LivePanorama\",HDRPanorama:\"HDRPanorama\",Video:\"Video\",Video360:\"Video360\",Model3D:\"Model3D\",PhotoAlbum:\"PhotoAlbum\",Map:\"Map\",MediaAudio:\"MediaAudio\",HotspotPanoramaOverlay:\"HotspotPanoramaOverlay\",AreaHotspotMapOverlay:\"AreaHotspotMapOverlay\",SpriteModel3DObject:\"SpriteModel3DObject\",FramePanoramaOverlay:\"FramePanoramaOverlay\",QuadFramePanoramaOverlay:\"QuadFramePanoramaOverlay\",VideoPanoramaOverlay:\"VideoPanoramaOverlay\",QuadVideoPanoramaOverlay:\"QuadVideoPanoramaOverlay\",CeilingCapPanoramaOverlay:\"CeilingCapPanoramaOverlay\",TripodCapPanoramaOverlay:\"TripodCapPanoramaOverlay\",PanoramaPlayListItem:\"PanoramaPlayListItem\",LivePanoramaPlayListItem:\"LivePanoramaPlayListItem\",HDRPanoramaPlayListItem:\"HDRPanoramaPlayListItem\",VideoPlayListItem:\"VideoPlayListItem\",Video360PlayListItem:\"Video360PlayListItem\",Model3DPlayListItem:\"Model3DPlayListItem\",PhotoAlbumPlayListItem:\"PhotoAlbumPlayListItem\"},\"HotspotPanoramaOverlay\",\"HotspotPanoramaOverlay\"),a(r,\"QuadVideoPanoramaOverlay\",\"QuadVideoPanoramaOverlay\"),a(r,\"FramePanoramaOverlay\",\"FramePanoramaOverlay\"),a(r,\"AreaHotspotMapOverlay\",\"AreaHotspotMapOverlay\"),a(r,\"SpriteModel3DObject\",\"SpriteModel3DObject\"),a(r,\"InnerModel3DObject\",\"InnerModel3DObject\"),r),l=(a(t={},s.Panorama,s.Panorama),a(t,s.LivePanorama,s.LivePanorama),a(t,s.HDRPanorama,s.HDRPanorama),a(t,s.Video,s.Video),a(t,s.Video360,s.Video360),a(t,s.Model3D,s.Model3D),a(t,s.PhotoAlbum,s.PhotoAlbum),a(t,s.Map,s.Map),a(t,s.MediaAudio,s.MediaAudio),t),c=(a(r={},s.HotspotPanoramaOverlay,s.HotspotPanoramaOverlay),a(r,s.AreaHotspotMapOverlay,s.AreaHotspotMapOverlay),a(r,s.SpriteModel3DObject,s.SpriteModel3DObject),a(r,s.FramePanoramaOverlay,s.FramePanoramaOverlay),a(r,s.QuadFramePanoramaOverlay,s.QuadFramePanoramaOverlay),a(r,s.VideoPanoramaOverlay,s.VideoPanoramaOverlay),a(r,s.QuadVideoPanoramaOverlay,s.QuadVideoPanoramaOverlay),r),u=(a(t={},s.Container,s.Container),a(t,s.WebFrame,s.WebFrame),a(t,s.Label,s.Label),a(t,s.HTMLText,s.HTMLText),a(t,s.Image,s.Image),a(t,s.Button,s.Button),a(t,s.IconButton,s.IconButton),a(t,s.CloseButton,s.CloseButton),a(t,s.ProgressBar,s.ProgressBar),a(t,s.TabPanel,s.TabPanel),a(t,s.DropDown,s.DropDown),a(t,s.ThumbnailList,s.ThumbnailList),t)},202:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>triggerComponent});var _misc_enums__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(602);function triggerComponent(component,eventType){var _this=this;try{if(!component||!Object.keys(_misc_enums__WEBPACK_IMPORTED_MODULE_0__.VR).includes(component.get(\"class\"))||!component.getBindings)throw Error(\"Invalid input.\");var _eventType=eventType||_misc_enums__WEBPACK_IMPORTED_MODULE_0__.E_.click,bindings;if(_misc_enums__WEBPACK_IMPORTED_MODULE_0__.CT.includes(_eventType))return bindings=component.getBindings(_eventType),!(!Array.isArray(bindings)||0===bindings.length||(bindings.forEach(function(binding){var executeBinding;\"string\"==typeof binding&&(executeBinding=function executeBinding(ctx){return function(){return eval(binding)}.call(ctx)},executeBinding(_this.ctx))}),0));throw Error(\\'Invalid event type \"\\'.concat(_eventType,\\'\".\\'))}catch(error){return _this.logger.error(\\'Error in \"triggerComponent\":\\',error.message),null}}}},__webpack_module_cache__={};function __webpack_require__(e){var t;return(__webpack_module_cache__[e]||(t=__webpack_module_cache__[e]={exports:{}},__webpack_modules__[e](t,t.exports,__webpack_require__),t)).exports}__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var s=__webpack_require__(602);function n(e,t,a){return Array.isArray(t)&&0!==t.length&&(void 0===a||s.A5.includes(a))?e.filter(function(e){var r=(null==(e=e.get(\"data\"))?void 0:e.tags)||[];return void 0===a||\"and\"===a?t.reduce(function(e,t){return e&&r.includes(t)},!0):\"or\"===a&&t.reduce(function(e,t){return e||r.includes(t)},!1)}):null}function i(e){return(i=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e})(e)}function l(e){return(l=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e})(e)}var o=__webpack_require__(202);function c(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,\"value\"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var e=function(){function r(){if(!(this instanceof r))throw new TypeError(\"Cannot call a class as a function\");this.debug=!1,this.tempDebug=\"#freekarlo\",window.blazeIT.blaze(this.innit.bind(this))}var e,t,a;return e=r,(t=[{key:\"innit\",value:function(e){this.debug,this.ctx=e;var t={getAllComponents:function(){return this.getByClassName(s.$C.UIComponent).filter(function(e){return\"rootPlayer\"!==e.get(\"id\")})}.bind(this),getComponentByName:function(e){try{if(!e||\"string\"!=typeof e)throw Error(\"Invalid input.\");var t=this.ctx.getComponentByName(e);if(t)return t;this.logger.error(\\'Component called \"\\'.concat(e,\\'\" was not found.\\'))}catch(e){return this.logger.error(\\'Error in \"getComponentByName\":\\',e.message),null}}.bind(this),getComponentsByName:function(t){try{if(t&&\"string\"==typeof t)return this.getAllComponents().filter(function(e){return(null==(e=e.get(\"data\"))?void 0:e.name)===t});throw Error(\"Invalid input.\")}catch(e){return this.logger.error(\\'Error in \"getComponentsByName\":\\',e.message),null}}.bind(this),getComponentsByTags:function(e,t){return n(this.getAllComponents(),e,t)}.bind(this),getAllMedias:function(){var a=this;return Object.keys(s.hE).reduce(function(e,t){var r=a.getByClassName(t).filter(function(e){return e.get(\"class\")===t});return e=e.concat(r)},[])}.bind(this),getActiveMedia:function(){var e=this.ctx.MainViewer||this.ctx.MainViewer_mobile||this.ctx.MainViewer_vr;return e?this.ctx.getActiveMediaWithViewer(e):null}.bind(this),getMediaByName:function(t){try{if(!t||\"string\"!=typeof t)throw Error(\"Invalid input.\");var e=this.getAllMedias().find(function(e){return(null==(e=e.get(\"data\"))?void 0:e.label)===t});if(e)return e;this.logger.error(\\'Media called \"\\'.concat(t,\\'\" was not found.\\'))}catch(e){return this.logger.error(\\'Error in \"getMediaByName\":\\',e.message),null}}.bind(this),getMediasByTags:function(e,t){return n(this.getAllMedias(),e,t)}.bind(this),getMediaHotspots:function(e){try{if(!e||!e.get||!e.get(\"class\"))throw Error(\"Invalid input.\");switch(e.get(\"class\")){case s.$C.HDRPanorama:case s.$C.LivePanorama:case s.$C.Panorama:case s.$C.Video360:case s.$C.Map:return(e.get(\"overlays\")||[]).filter(function(e){return!(null==(e=e.get(\"data\"))||!e.label)});case s.$C.Model3D:return(e.get(\"objects\")||[]).filter(function(e){return e.get(\"class\")===s.$C.SpriteModel3DObject})}return[]}catch(e){return _this.logger.error(\\'Error in \"getMediaHotspots\":\\',e.message),null}}.bind(this),playAudio:function(e,t){var r;try{if(e&&e.get&&e.get(\"class\")===s.hE.MediaAudio)return r=Object.assign({playOnlyOnCurrentMedia:!0,stopGlobalMusic:!1},t||{}),this.ctx.executeAudioAction([e],\"play\",!0===r.playOnlyOnCurrentMedia||null,!0===r.playOnlyOnCurrentMedia,!0===r.stopGlobalMusic,!1),!0;throw Error(\"Invalid input.\")}catch(e){return this.logger.error(\\'Error in \"playAudio\":\\',e.message),!1}}.bind(this),pauseAudio:function(e){try{if(e&&e.get&&e.get(\"class\")===s.hE.MediaAudio)return this.ctx.executeAudioAction([e],\"pause\"),!0;throw Error(\"Invalid input.\")}catch(e){return this.logger.error(\\'Error in \"pauseAudio\":\\',e.message),!1}}.bind(this),stopAudio:function(e){try{if(e&&e.get&&e.get(\"class\")===s.hE.MediaAudio)return this.ctx.executeAudioAction([e],\"stop\"),!0;throw Error(\"Invalid input.\")}catch(e){return this.logger.error(\\'Error in \"stopAudio\":\\',e.message),!1}}.bind(this),getAll3DModelObjects:function(e){try{if(e&&e.get(\"class\")===s.$C.Model3D)return e.get(\"objects\").filter(function(e){return e.get(\"class\")===s.$C.InnerModel3DObject});throw Error(\"Passed 3D Model is invalid.\")}catch(e){return this.logger.error(\\'Error in \"getAll3DModelObjects\":\\',e.message),null}}.bind(this),get3DModelObjectByName:function(e,t){try{if(!e||e.get(\"class\")!==s.$C.Model3D)throw Error(\"Passed 3D Model is invalid.\");if(!t||\"string\"!=typeof t)throw Error(\"objectName is not a string.\");var r=this.getAll3DModelObjects(e);if(r&&Array.isArray(r))return r.find(function(e){return e.get(\"data\").label===t});throw Error(\"Objects are invalid.\")}catch(e){return this.logger.error(\\'Error in \"get3DModelObjectByName\":\\',e.message),null}}.bind(this),get3DModelObjectsByTags:function(e,t,r){try{if(!e||e.get(\"class\")!==s.$C.Model3D)throw Error(\"Passed 3D Model is invalid.\");var a=this.getAll3DModelObjects(e);if(a&&Array.isArray(a))return n(a,t,r);throw Error(\"Objects are invalid.\")}catch(e){return this.logger.error(\\'Error in \"get3DModelObjectsByTags\":\\',e.message),null}}.bind(this),getAllHotspots:function(){var r=this;return Object.keys(s.w7).reduce(function(e,t){return e=e.concat(r.getByClassName(t))},[])}.bind(this),getHotspotByName:function(t){try{if(!t||\"string\"!=typeof t)throw Error(\"Invalid input.\");var e=this.getAllHotspots().find(function(e){return(null==(e=e.get(\"data\"))?void 0:e.label)===t});if(e)return e;this.logger.error(\\'Hotspot called \"\\'.concat(t,\\'\" was not found.\\'))}catch(e){return this.logger.error(\\'Error in \"getHotspotByName\":\\',e.message),null}}.bind(this),getHotspotsByName:function(t){return this.getAllHotspots().filter(function(e){return(null==(e=e.get(\"data\"))?void 0:e.label)===t})}.bind(this),getHotspotsByParentClasses:function(e){var r=this;try{if(e&&Array.isArray(e))return e.reduce(function(t,e){if(\"string\"==typeof e)switch(e){case s.$C.HDRPanorama:case s.$C.LivePanorama:case s.$C.Panorama:case s.$C.Video360:case s.$C.Map:r.getByClassName(e).forEach(function(e){e=r.getMediaHotspots(e);t=t.concat(e||[])});break;case s.$C.Model3D:t=t.concat(r.getByClassName(s.$C.SpriteModel3DObject)||[])}return t},[]);throw Error(\"Invalid input.\")}catch(e){return r.logger.error(\\'Error in \"getHotspotsByParentClasses\":\\',e.message),null}}.bind(this),getHotspotsByTags:function(e,t){return n(this.getAllHotspots(),e,t)}.bind(this),getHotspotNestedProperty:function(e,t){try{if(!e||!e.get||!Object.keys(s.w7).includes(e.get(\"class\")))throw Error(\"Invalid Hotspot.\");if(t&&\"string\"==typeof t)return(e.get(\"class\")!==s.w7.HotspotPanoramaOverlay?e:e.get(\"items\")[0]).get(t);throw Error(\"Invalid property.\")}catch(e){return this.logger.error(\\'Error in \"getHotspotNestedProperty\":\\',e.message),!1}}.bind(this),setHotspotNestedProperty:function(e,t,r){try{if(!e||!e.get||!Object.keys(s.w7).includes(e.get(\"class\")))throw Error(\"Invalid Hotspot.\");if(t&&\"string\"==typeof t)return e.get(\"class\")===s.w7.HotspotPanoramaOverlay&&e.get(\"items\").forEach(function(e){e.set(t,r)}),e.set(t,r),!0;throw Error(\"Invalid property.\")}catch(e){return this.logger.error(\\'Error in \"setHotspotNestedProperty\":\\',e.message),!1}}.bind(this),setHotspotImageUrl:function(e,t){try{if(!e||!e.get||!Object.keys(s.w7).includes(e.get(\"class\")))throw Error(\"Invalid Hotspot.\");if(!t||\"string\"!=typeof t)throw Error(\"Invalid imageUrl.\");switch(e.get(\"class\")){case s.w7.HotspotPanoramaOverlay:e.get(\"items\").forEach(function(e){e.get(\"image\").get(\"levels\").forEach(function(e){e.set(\"url\",t)})});break;case s.w7.SpriteModel3DObject:item.get(\"image\").get(\"levels\").forEach(function(e){e.set(\"url\",t)});break;default:return!1}return!0}catch(e){return this.logger.error(\\'Error in \"setHotspotImageUrl\":\\',e.message),!1}}.bind(this),getAllPlayListItems:function(){return this.ctx.mainPlayList.get(\"items\")}.bind(this),getPlayListItemByMediaName:function(t){try{if(!t||\"string\"!=typeof t)throw Error(\"Invalid input.\");var e=this.getAllPlayListItems(),r=e.findIndex(function(e){return(null==(e=e.get(\"media\"))||null==(e=e.get(\"data\"))?void 0:e.label)===t});if(-1!==r)return e[r];this.logger.error(\\'Media called \"\\'.concat(t,\\'\" was not found in the playlist.\\'))}catch(e){return this.logger.error(\\'Error in \"getPlayListItemByMediaName\":\\',e.message),null}}.bind(this),getActivePlayListItem:function(){if(-1!==this.ctx.mainPlayList.selectedIndex)return this.getAllPlayListItems()[this.ctx.mainPlayList.selectedIndex]}.bind(this),getActivePlayListItemIndex:function(){return this.ctx.mainPlayList.selectedIndex}.bind(this),getPreviousPlayListItem:function(){var e,t=this.ctx.mainPlayList.selectedIndex;if(-1!==t)return e=this.getAllPlayListItems(),0===t?e[e.length-1]:e[t-1]}.bind(this),getNextPlayListItem:function(){var e,t=this.ctx.mainPlayList.selectedIndex;if(-1!==t)return t===(e=this.getAllPlayListItems()).length-1?e[0]:e[t+1]}.bind(this),openMedia:function(e){var t,r=this;try{if(!(e&&\"object\"===i(e)&&e.get&&null!=(t=e.get(\"data\"))&&t.label&&Object.keys(s.hE).includes(e.get(\"class\"))))throw Error(\"Invalid input.\");if([s.$C.Map,s.$C.MediaAudio].includes(e.get(\"class\")))return!1;r.turnOnSilent();var a=r.getPlayListItemByMediaName(e.get(\"data\").label);if(r.turnOffSilent(),a)return r.openPlayListItem(a);var n=r.ctx.getPlayListsWithMedia(e);if(0===n.length)throw Error(\\'No players found for media \"\\'.concat(e.get(\"data\").label,\\'\".\\'));if(1<n.length)throw Error(\\'Unexpected number of players found for media \"\\'.concat(e.get(\"data\").label,\\'\".\\'));switch(r.ctx.setMediaBehaviour(n[0],0,null,!0),e.get(\"class\")){case s.$C.Video360:e.get(\"autoplay\")&&r.ctx.MainViewerPanoramaPlayer&&r.ctx.MainViewerPanoramaPlayer.play();break;case s.$C.Video:e.get(\"autoplay\")&&r.ctx.MainViewerVideoPlayer&&r.ctx.MainViewerVideoPlayer.play()}return!0}catch(e){return r.logger.error(\\'Error in \"openMedia\":\\',e.message),!1}}.bind(this),openMediaByName:function(e){var t;try{if(e&&\"string\"==typeof e)return!!(t=this.getMediaByName(e))&&this.openMedia(t);throw Error(\"Invalid input.\")}catch(e){return this.logger.error(\\'Error in \"openMediaByName\":\\',e.message),!1}}.bind(this),openPlayListItem:function(t){var e,r,a,n=this;try{if(!t||\"object\"!==l(t)||!t.get||null==(e=t.get(\"media\"))||null==(r=e.get(\"data\"))||!r.label||!0!==(null==(a=t.get(\"class\"))?void 0:a.includes(\"PlayListItem\")))throw Error(\"Invalid input.\");var i=n.getAllPlayListItems().findIndex(function(e){return(null==(e=e.get(\"media\"))||null==(e=e.get(\"data\"))?void 0:e.label)===t.get(\"media\").get(\"data\").label});if(-1===i)return!1;if(i===n.ctx.mainPlayList.selectedIndex)return!1;try{switch(t.get(\"class\")){case s.$C.PanoramaPlayListItem:case s.$C.LivePanoramaPlayListItem:case s.$C.HDRPanoramaPlayListItem:case s.$C.Video360:var o=t.get(\"camera\").get(\"initialPosition\");n.ctx.setPanoramaCameraWithSpot(n.ctx.mainPlayList,t,o.get(\"yaw\")||0,o.get(\"pitch\")||0,o.get(\"hfov\")||110);break;case s.$C.Model3DPlayListItem:n.ctx.setModel3DCameraSpot(n.ctx.mainPlayList,t,function(e){e=e.get(\"camera\");return{distance:e.get(\"initialDistance\"),x:e.get(\"initialX\"),pitch:e.get(\"initialPitch\"),y:e.get(\"initialY\"),yaw:e.get(\"initialYaw\"),fov:e.get(\"initialFov\"),z:e.get(\"initialZ\")}}(t.get(\"media\")),1,\"cubic_in_out\")}}catch(e){}return n.ctx.setPlayListSelectedIndex(n.ctx.mainPlayList,i),!0}catch(e){return n.logger.error(\\'Error in \"openMediaByName\":\\',e.message),!1}}.bind(this),triggerComponent:o.F.bind(this),triggerComponentByName:function(e,t){var r;try{if(e&&\"string\"==typeof e)return!!(r=this.getComponentByName(e))&&this.triggerComponent(r,t);throw Error(\"Invalid input.\")}catch(e){return this.logger.error(\\'Error in \"triggerComponentByName\":\\',e.message),null}}.bind(this),triggerHotspot:function(e,t){try{if(!e||!Object.keys(s.w7).includes(e.get(\"class\")))throw Error(\"Invalid input.\");var r=t||s.E_.click;if(s.CT.includes(r))return e.get(\"class\")===s.w7.SpriteModel3DObject?e.trigger(r):this.ctx.triggerOverlay(e,r),!0;throw Error(\\'Invalid event type \"\\'.concat(r,\\'\".\\'))}catch(e){return this.logger.error(\\'Error in \"triggerHotspot\":\\',e.message),null}}.bind(this),triggerHotspotByName:function(e,t){var r;try{if(e&&\"string\"==typeof e)return!!(r=this.getHotspotByName(e))&&this.triggerHotspot(r,t);throw Error(\"Invalid input.\")}catch(e){return this.logger.error(\\'Error in \"triggerHotspotByName\":\\',e.message),null}}.bind(this),getByClassName:function(e){try{if(e&&\"string\"==typeof e)return this.ctx.getByClassName(e);throw Error(\"Invalid input.\")}catch(e){return this.logger.error(\\'Error in \"getByClassName\":\\',e.message),null}}.bind(this),turnOnDebug:function(){this.debug=!0}.bind(this)};Object.keys(t).forEach(function(e){r.prototype[e]=t[e],window.blazeIT[e]=r.prototype[e]}),window.blazeIT.variables={},window.blazeIT.functions={}}},{key:\"logger\",get:function(){var t=this;return{log:function(){var e;!0===t.debug&&(e=console.log).call.apply(e,[null].concat([\"[blaze IT v2 logger]\"].concat(Array.prototype.slice.call(arguments))))},error:function(){var e;!0===t.debug&&(e=console.error).call.apply(e,[null].concat([\"[blaze IT v2 logger]\"].concat(Array.prototype.slice.call(arguments))))}}}}])&&c(e.prototype,t),a&&c(e,a),r}();e.prototype.turnOnSilent=function(){this.tempDebug=this.debug,this.debug=!1},e.prototype.turnOffSilent=function(){this.debug=this.tempDebug},new e})()})();')}catch(e){console.log(e)}","subtitlesFontFamily":"Arial","minHeight":50,"subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowOpacity":1,"minWidth":100,"subtitlesTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarBottom":5,"firstTransitionDuration":0,"progressBorderColor":"#000000","toolTipFontSize":"1.11vmin","width":"100%","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"propagateClick":false,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"subtitlesTextShadowVerticalLength":1,"playbackBarBackgroundColorDirection":"vertical","progressBackgroundColor":["#000000"],"progressBorderRadius":2,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"vrPointerColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"toolTipPaddingTop":4,"playbackBarHeadShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"subtitlesBorderColor":"#FFFFFF","progressBottom":10,"subtitlesGap":0,"playbackBarLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"progressHeight":2,"toolTipFontFamily":"Arial","class":"ViewerArea","progressBorderSize":0},{"id":"panorama_95F9C7E2_8D01_34A8_41D5_B0C963AB9649","label":trans('panorama_95F9C7E2_8D01_34A8_41D5_B0C963AB9649.label'),"hfovMin":"135%","hfovMax":130,"data":{"label":"IMG_20240125_085151_00_merged"},"hfov":360,"class":"Panorama","vfov":180,"frames":[{"thumbnailUrl":"media/panorama_95F9C7E2_8D01_34A8_41D5_B0C963AB9649_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"height":2048,"rowCount":4,"class":"TiledImageResourceLevel","url":"media/panorama_95F9C7E2_8D01_34A8_41D5_B0C963AB9649_0/{face}/0/{row}_{column}.jpg","colCount":24,"width":12288,"tags":"ondemand"},{"height":1024,"rowCount":2,"class":"TiledImageResourceLevel","url":"media/panorama_95F9C7E2_8D01_34A8_41D5_B0C963AB9649_0/{face}/1/{row}_{column}.jpg","colCount":12,"width":6144,"tags":"ondemand"},{"height":512,"rowCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_95F9C7E2_8D01_34A8_41D5_B0C963AB9649_0/{face}/2/{row}_{column}.jpg","colCount":6,"width":3072,"tags":["ondemand","preload"]}],"class":"ImageResource"}}],"thumbnailUrl":"media/panorama_95F9C7E2_8D01_34A8_41D5_B0C963AB9649_t.jpg"},{"id":"imlevel_97A94867_8D01_FBB7_41D2_997096968E8E","height":918,"class":"ImageResourceLevel","url":trans('imlevel_97A94867_8D01_FBB7_41D2_997096968E8E.url'),"width":1024},{"id":"imlevel_97A95868_8D01_FBB9_41DD_CD69836B07AC","height":459,"class":"ImageResourceLevel","url":trans('imlevel_97A95868_8D01_FBB9_41DD_CD69836B07AC.url'),"width":512},{"id":"imlevel_97A92868_8D01_FBB9_41E0_9E47633B0851","height":229,"class":"ImageResourceLevel","url":trans('imlevel_97A92868_8D01_FBB9_41E0_9E47633B0851.url'),"width":256,"tags":"preload"},{"id":"sequence_9AD865C0_8D01_54E9_41D5_96B58A5307EC","class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}]}],"defaultMenu":["fullscreen","mute","rotation"],"gap":10,"layout":"absolute","class":"Player","minWidth":0};
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