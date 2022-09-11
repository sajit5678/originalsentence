__all__ = ['temp3']

# Don't look below, you will not understand this Python code :) I don't.

from js2py.pyjs import *
# setting scope
var = Scope( JS_BUILTINS )
set_global_object(var)

# Code follows:
var.registers(['firebaseConfig', 'processSelectionDoc', 'backButton', 'pagePrepare', 'hideShow', 'processSelection', 'exportHTML'])
@Js
def PyJsHoisted_pagePrepare_(this, arguments, var=var):
    var = Scope({'this':this, 'arguments':arguments}, var)
    var.registers([])
    var.get('document').callprop('getElementById', Js('mainBox')).get('style').put('display', Js('block'))
    var.get('document').callprop('getElementById', Js('postBox')).get('style').put('display', Js('none'))
    var.get('document').callprop('getElementById', Js('inputBox')).put('value', Js(''))
PyJsHoisted_pagePrepare_.func_name = 'pagePrepare'
var.put('pagePrepare', PyJsHoisted_pagePrepare_)
@Js
def PyJsHoisted_processSelection_(str, this, arguments, var=var):
    var = Scope({'str':str, 'this':this, 'arguments':arguments}, var)
    var.registers(['count', 'i', 're', 'sentences', 'str', 'doubleAb', 'last4', 'last3', 'paragraphArray', 'shortHand', 'endHTML', 'allSentences2', 'allSentences', 'endCSV', 'tripleAb', 'j', 'k', 'numSentence', 'current', 'last6'])
    var.put('paragraphArray', var.get('str').callprop('split', Js('\n')))
    var.put('paragraphArray', var.get('_').callprop('without', var.get('paragraphArray'), Js('')))
    var.get('console').callprop('log', var.get('paragraphArray'))
    var.put('re', JsRegExp('/\\b(\\w\\.\\w\\.)|([.?!])\\s+(?=[A-Za-z])/g'))
    pass
    var.put('endHTML', Js(''))
    var.put('endCSV', Js(''))
    var.put('count', Js(0.0))
    var.put('allSentences2', Js([]))
    for PyJsTemp in var.get('paragraphArray'):
        var.put('i', PyJsTemp)
        var.put('sentences', var.get('paragraphArray').get(var.get('i')).callprop('replace', var.get('re'), Js('$1|')).callprop('split', Js('|')))
        var.put('sentences', var.get('_').callprop('without', var.get('sentences'), Js('')))
        pass
        var.put('numSentence', Js(0.0))
        var.put('allSentences', Js([]))
        for PyJsTemp in var.get('sentences'):
            var.put('j', PyJsTemp)
            if PyJsStrictEq(var.get('allSentences').get('length'),var.get('numSentence')):
                var.get('allSentences').callprop('push', Js(''))
            var.put('current', var.get('sentences').get(var.get('j')))
            var.put('last6', var.get('current').callprop('slice', (var.get('current').get('length')-Js(6.0))))
            var.put('last4', var.get('current').callprop('slice', (var.get('current').get('length')-Js(4.0))))
            var.put('last3', var.get('current').callprop('slice', (var.get('current').get('length')-Js(3.0))))
            var.put('tripleAb', JsRegExp('/[A-Za-z][.][A-Za-z][.][A-Za-z][.]/g'))
            var.put('doubleAb', JsRegExp('/[A-Za-z][.][A-Za-z][.]/g'))
            var.put('shortHand', JsRegExp('/[A-Za-z][A-Za-z][.]/g'))
            if var.get('tripleAb').callprop('test', var.get('last6')):
                var.get('console').callprop('log', var.get('current'))
                var.get('allSentences').put(var.get('numSentence'), var.get('current'), '+')
                var.get('allSentences').put(var.get('numSentence'), Js(' '), '+')
            else:
                if var.get('doubleAb').callprop('test', var.get('last4')):
                    var.get('console').callprop('log', var.get('current'))
                    var.get('allSentences').put(var.get('numSentence'), var.get('current'), '+')
                    var.get('allSentences').put(var.get('numSentence'), Js(' '), '+')
                else:
                    if var.get('shortHand').callprop('test', var.get('last3')):
                        if (((PyJsStrictEq(var.get('last3'),Js('ex.')) or PyJsStrictEq(var.get('last3'),Js('EX.'))) or PyJsStrictEq(var.get('last3'),Js('eg.'))) or PyJsStrictEq(var.get('last3'),Js('ie.'))):
                            var.get('console').callprop('log', var.get('current'))
                            var.get('allSentences').put(var.get('numSentence'), var.get('current'), '+')
                            var.get('allSentences').put(var.get('numSentence'), Js(' '), '+')
                        else:
                            var.get('console').callprop('log', var.get('current'))
                            var.get('allSentences').put(var.get('numSentence'), var.get('current'), '+')
                            (var.put('numSentence',Js(var.get('numSentence').to_number())+Js(1))-Js(1))
                    else:
                        var.get('console').callprop('log', var.get('current'))
                        var.get('allSentences').put(var.get('numSentence'), var.get('current'), '+')
                        (var.put('numSentence',Js(var.get('numSentence').to_number())+Js(1))-Js(1))
        pass
        for PyJsTemp in var.get('allSentences'):
            var.put('k', PyJsTemp)
            if PyJsStrictEq((var.get('count')%Js(2.0)),Js(0.0)):
                var.put('endCSV', (var.get('allSentences').get(var.get('k'))+Js(',')), '+')
                var.put('endHTML', ((Js("<p style='color: #037188'>")+var.get('allSentences').get(var.get('k')))+Js('</p>')), '+')
                (var.put('count',Js(var.get('count').to_number())+Js(1))-Js(1))
            else:
                var.put('endCSV', (var.get('allSentences').get(var.get('k'))+Js(',')), '+')
                var.put('endHTML', ((Js("<p style= 'color: #988900' >")+var.get('allSentences').get(var.get('k')))+Js('</p>')), '+')
                (var.put('count',Js(var.get('count').to_number())+Js(1))-Js(1))
            var.get('allSentences2').callprop('push', var.get('allSentences').get(var.get('k')))
        var.put('endHTML', Js('<hr>'), '+')
        var.put('endCSV', Js(' ,'), '+')
    return var.get('allSentences2')
PyJsHoisted_processSelection_.func_name = 'processSelection'
var.put('processSelection', PyJsHoisted_processSelection_)
@Js
def PyJsHoisted_processSelectionDoc_(this, arguments, var=var):
    var = Scope({'this':this, 'arguments':arguments}, var)
    var.registers([])
    var.get('processSelection')()
    var.get('exportHTML')()
PyJsHoisted_processSelectionDoc_.func_name = 'processSelectionDoc'
var.put('processSelectionDoc', PyJsHoisted_processSelectionDoc_)
@Js
def PyJsHoisted_exportHTML_(this, arguments, var=var):
    var = Scope({'this':this, 'arguments':arguments}, var)
    var.registers(['fileDownload', 'header', 'footer', 'source', 'sourceHTML'])
    var.put('header', (((Js("<html xmlns:o='urn:schemas-microsoft-com:office:office' ")+Js("xmlns:w='urn:schemas-microsoft-com:office:word' "))+Js("xmlns='http://www.w3.org/TR/REC-html40'>"))+Js("<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>")))
    var.put('footer', Js('</body></html>'))
    var.put('sourceHTML', ((((var.get('header')+Js("<div style='font-family: sans-serif'>"))+var.get('document').callprop('getElementById', Js('result')).get('innerHTML'))+Js('</div>'))+var.get('footer')))
    var.put('source', (Js('data:application/vnd.ms-word;charset=utf-8,')+var.get('encodeURIComponent')(var.get('sourceHTML'))))
    var.put('fileDownload', var.get('document').callprop('createElement', Js('a')))
    var.get('document').get('body').callprop('appendChild', var.get('fileDownload'))
    var.get('fileDownload').put('href', var.get('source'))
    var.get('fileDownload').put('download', Js('document.doc'))
    var.get('fileDownload').callprop('click')
    var.get('document').get('body').callprop('removeChild', var.get('fileDownload'))
PyJsHoisted_exportHTML_.func_name = 'exportHTML'
var.put('exportHTML', PyJsHoisted_exportHTML_)
@Js
def PyJsHoisted_backButton_(this, arguments, var=var):
    var = Scope({'this':this, 'arguments':arguments}, var)
    var.registers([])
    var.get('hideShow')(Js('postBox'))
    var.get('hideShow')(Js('mainBox'))
PyJsHoisted_backButton_.func_name = 'backButton'
var.put('backButton', PyJsHoisted_backButton_)
@Js
def PyJsHoisted_hideShow_(divName, this, arguments, var=var):
    var = Scope({'divName':divName, 'this':this, 'arguments':arguments}, var)
    var.registers(['divName', 'x'])
    var.put('x', var.get('document').callprop('getElementById', var.get('divName')))
    if PyJsStrictEq(var.get('x').get('style').get('display'),Js('none')):
        var.get('x').get('style').put('display', Js('block'))
    else:
        var.get('x').get('style').put('display', Js('none'))
PyJsHoisted_hideShow_.func_name = 'hideShow'
var.put('hideShow', PyJsHoisted_hideShow_)
var.put('firebaseConfig', Js({'apiKey':Js('AIzaSyAVgOjxn4Na0LQcW4jDqpgxzATlw_h--2U'),'authDomain':Js('paragraphsplice.firebaseapp.com'),'projectId':Js('paragraphsplice'),'storageBucket':Js('paragraphsplice.appspot.com'),'messagingSenderId':Js('857108829918'),'appId':Js('1:857108829918:web:a3f12539ff986ee11ad44f'),'measurementId':Js('G-QXYNYLBK9L')}))
pass
pass
pass
pass
pass
pass
pass


# Add lib to the module scope
temp3 = var.to_python()