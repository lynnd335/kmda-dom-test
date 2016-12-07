function simpleExtend(t, e) {
    var i = e || {};
    for (var n in t) n in i || (i[n] = t[n]);
    return i }

function triggerSimpleCustomEvent(t, e) {
    if (jq) jq(t).trigger(e);
    else {
        var i = document.createEvent("CustomEvent");
        i.initCustomEvent(e, !0, !0, {}), t.dispatchEvent(i) } }

function hasClass(t, e) {
    return jq ? jq(t).hasClass(e) : t.classList.contains(e) }

function Datepair(t, e) { this.dateDelta = null, this.timeDelta = null, this._defaults = { startClass: "start", endClass: "end", timeClass: "time", dateClass: "date", defaultDateDelta: 0, defaultTimeDelta: 36e5, anchor: "start", parseTime: function(t) {
            return jq(t).timepicker("getTime") }, updateTime: function(t, e) { jq(t).timepicker("setTime", e) }, setMinTime: function(t, e) { jq(t).timepicker("option", "minTime", e) }, parseDate: function(t) {
            return t.value && jq(t).datepicker("getDate") }, updateDate: function(t, e) { jq(t).datepicker("update", e) } }, this.container = t, this.settings = simpleExtend(this._defaults, e), this.startDateInput = this.container.querySelector("." + this.settings.startClass + "." + this.settings.dateClass), this.endDateInput = this.container.querySelector("." + this.settings.endClass + "." + this.settings.dateClass), this.startTimeInput = this.container.querySelector("." + this.settings.startClass + "." + this.settings.timeClass), this.endTimeInput = this.container.querySelector("." + this.settings.endClass + "." + this.settings.timeClass), this.refresh(), this._bindChangeHandler() }

function _toConsumableArray(t) {
    if (Array.isArray(t)) {
        for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
        return i }
    return Array.from(t) }! function(t, e) { "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t) } : e(t) }("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = !!t && "length" in t && t.length,
            i = pt.type(t);
        return "function" !== i && !pt.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t) }

    function n(t, e, i) {
        if (pt.isFunction(e)) return pt.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i });
        if (e.nodeType) return pt.grep(t, function(t) {
            return t === e !== i });
        if ("string" == typeof e) {
            if (St.test(e)) return pt.filter(e, t, i);
            e = pt.filter(e, t) }
        return pt.grep(t, function(t) {
            return pt.inArray(t, e) > -1 !== i }) }

    function r(t, e) { do t = t[e]; while (t && 1 !== t.nodeType);
        return t }

    function s(t) {
        var e = {};
        return pt.each(t.match(_t) || [], function(t, i) { e[i] = !0 }), e }

    function o() { nt.addEventListener ? (nt.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a)) : (nt.detachEvent("onreadystatechange", a), t.detachEvent("onload", a)) }

    function a() {
        (nt.addEventListener || "load" === t.event.type || "complete" === nt.readyState) && (o(), pt.ready()) }

    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(Ot, "-$1").toLowerCase();
            if (i = t.getAttribute(n), "string" == typeof i) {
                try { i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Nt.test(i) ? pt.parseJSON(i) : i) } catch (t) {}
                pt.data(t, e, i) } else i = void 0 }
        return i }

    function u(t) {
        var e;
        for (e in t)
            if (("data" !== e || !pt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0 }

    function d(t, e, i, n) {
        if (jt(t)) {
            var r, s, o = pt.expando,
                a = t.nodeType,
                l = a ? pt.cache : t,
                u = a ? t[o] : t[o] && o;
            if (u && l[u] && (n || l[u].data) || void 0 !== i || "string" != typeof e) return u || (u = a ? t[o] = it.pop() || pt.guid++ : o), l[u] || (l[u] = a ? {} : { toJSON: pt.noop }), "object" != typeof e && "function" != typeof e || (n ? l[u] = pt.extend(l[u], e) : l[u].data = pt.extend(l[u].data, e)), s = l[u], n || (s.data || (s.data = {}), s = s.data), void 0 !== i && (s[pt.camelCase(e)] = i), "string" == typeof e ? (r = s[e], null == r && (r = s[pt.camelCase(e)])) : r = s, r } }

    function c(t, e, i) {
        if (jt(t)) {
            var n, r, s = t.nodeType,
                o = s ? pt.cache : t,
                a = s ? t[pt.expando] : pt.expando;
            if (o[a]) {
                if (e && (n = i ? o[a] : o[a].data)) { pt.isArray(e) ? e = e.concat(pt.map(e, pt.camelCase)) : e in n ? e = [e] : (e = pt.camelCase(e), e = e in n ? [e] : e.split(" ")), r = e.length;
                    for (; r--;) delete n[e[r]];
                    if (i ? !u(n) : !pt.isEmptyObject(n)) return }(i || (delete o[a].data, u(o[a]))) && (s ? pt.cleanData([t], !0) : ct.deleteExpando || o != o.window ? delete o[a] : o[a] = void 0) } } }

    function h(t, e, i, n) {
        var r, s = 1,
            o = 20,
            a = n ? function() {
                return n.cur() } : function() {
                return pt.css(t, e, "") },
            l = a(),
            u = i && i[3] || (pt.cssNumber[e] ? "" : "px"),
            d = (pt.cssNumber[e] || "px" !== u && +l) && $t.exec(pt.css(t, e));
        if (d && d[3] !== u) { u = u || d[3], i = i || [], d = +l || 1;
            do s = s || ".5", d /= s, pt.style(t, e, d + u); while (s !== (s = a() / l) && 1 !== s && --o) }
        return i && (d = +d || +l || 0, r = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n.start = d, n.end = r)), r }

    function p(t) {
        var e = Vt.split("|"),
            i = t.createDocumentFragment();
        if (i.createElement)
            for (; e.length;) i.createElement(e.pop());
        return i }

    function f(t, e) {
        var i, n, r = 0,
            s = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
        if (!s)
            for (s = [], i = t.childNodes || t; null != (n = i[r]); r++) !e || pt.nodeName(n, e) ? s.push(n) : pt.merge(s, f(n, e));
        return void 0 === e || e && pt.nodeName(t, e) ? pt.merge([t], s) : s }

    function m(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) pt._data(i, "globalEval", !e || pt._data(e[n], "globalEval")) }

    function g(t) { Ht.test(t.type) && (t.defaultChecked = t.checked) }

    function y(t, e, i, n, r) {
        for (var s, o, a, l, u, d, c, h = t.length, y = p(e), v = [], b = 0; b < h; b++)
            if (o = t[b], o || 0 === o)
                if ("object" === pt.type(o)) pt.merge(v, o.nodeType ? [o] : o);
                else if (zt.test(o)) {
            for (l = l || y.appendChild(e.createElement("div")), u = (qt.exec(o) || ["", ""])[1].toLowerCase(), c = Bt[u] || Bt._default, l.innerHTML = c[1] + pt.htmlPrefilter(o) + c[2], s = c[0]; s--;) l = l.lastChild;
            if (!ct.leadingWhitespace && Wt.test(o) && v.push(e.createTextNode(Wt.exec(o)[0])), !ct.tbody)
                for (o = "table" !== u || Jt.test(o) ? "<table>" !== c[1] || Jt.test(o) ? 0 : l : l.firstChild, s = o && o.childNodes.length; s--;) pt.nodeName(d = o.childNodes[s], "tbody") && !d.childNodes.length && o.removeChild(d);
            for (pt.merge(v, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = y.lastChild } else v.push(e.createTextNode(o));
        for (l && y.removeChild(l), ct.appendChecked || pt.grep(f(v, "input"), g), b = 0; o = v[b++];)
            if (n && pt.inArray(o, n) > -1) r && r.push(o);
            else if (a = pt.contains(o.ownerDocument, o), l = f(y.appendChild(o), "script"), a && m(l), i)
            for (s = 0; o = l[s++];) Ut.test(o.type || "") && i.push(o);
        return l = null, y }

    function v() {
        return !0 }

    function b() {
        return !1 }

    function w() {
        try {
            return nt.activeElement } catch (t) {} }

    function k(t, e, i, n, r, s) {
        var o, a;
        if ("object" == typeof e) { "string" != typeof i && (n = n || i, i = void 0);
            for (a in e) k(t, a, i, n, e[a], s);
            return t }
        if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), r === !1) r = b;
        else if (!r) return t;
        return 1 === s && (o = r, r = function(t) {
            return pt().off(t), o.apply(this, arguments) }, r.guid = o.guid || (o.guid = pt.guid++)), t.each(function() { pt.event.add(this, e, r, n, i) }) }

    function T(t, e) {
        return pt.nodeName(t, "table") && pt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t }

    function S(t) {
        return t.type = (null !== pt.find.attr(t, "type")) + "/" + t.type, t }

    function C(t) {
        var e = re.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t }

    function D(t, e) {
        if (1 === e.nodeType && pt.hasData(t)) {
            var i, n, r, s = pt._data(t),
                o = pt._data(e, s),
                a = s.events;
            if (a) { delete o.handle, o.events = {};
                for (i in a)
                    for (n = 0, r = a[i].length; n < r; n++) pt.event.add(e, i, a[i][n]) }
            o.data && (o.data = pt.extend({}, o.data)) } }

    function x(t, e) {
        var i, n, r;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !ct.noCloneEvent && e[pt.expando]) { r = pt._data(e);
                for (n in r.events) pt.removeEvent(e, n, r.handle);
                e.removeAttribute(pt.expando) } "script" === i && e.text !== t.text ? (S(e).text = t.text, C(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ct.html5Clone && t.innerHTML && !pt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Ht.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue) } }

    function E(t, e, i, n) { e = st.apply([], e);
        var r, s, o, a, l, u, d = 0,
            c = t.length,
            h = c - 1,
            p = e[0],
            m = pt.isFunction(p);
        if (m || c > 1 && "string" == typeof p && !ct.checkClone && ne.test(p)) return t.each(function(r) {
            var s = t.eq(r);
            m && (e[0] = p.call(this, r, s.html())), E(s, e, i, n) });
        if (c && (u = y(e, t[0].ownerDocument, !1, t, n), r = u.firstChild, 1 === u.childNodes.length && (u = r), r || n)) {
            for (a = pt.map(f(u, "script"), S), o = a.length; d < c; d++) s = u, d !== h && (s = pt.clone(s, !0, !0), o && pt.merge(a, f(s, "script"))), i.call(t[d], s, d);
            if (o)
                for (l = a[a.length - 1].ownerDocument, pt.map(a, C), d = 0; d < o; d++) s = a[d], Ut.test(s.type || "") && !pt._data(s, "globalEval") && pt.contains(l, s) && (s.src ? pt._evalUrl && pt._evalUrl(s.src) : pt.globalEval((s.text || s.textContent || s.innerHTML || "").replace(se, "")));
            u = r = null }
        return t }

    function M(t, e, i) {
        for (var n, r = e ? pt.filter(e, t) : t, s = 0; null != (n = r[s]); s++) i || 1 !== n.nodeType || pt.cleanData(f(n)), n.parentNode && (i && pt.contains(n.ownerDocument, n) && m(f(n, "script")), n.parentNode.removeChild(n));
        return t }

    function _(t, e) {
        var i = pt(e.createElement(t)).appendTo(e.body),
            n = pt.css(i[0], "display");
        return i.detach(), n }

    function A(t) {
        var e = nt,
            i = ue[t];
        return i || (i = _(t, e), "none" !== i && i || (le = (le || pt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (le[0].contentWindow || le[0].contentDocument).document, e.write(), e.close(), i = _(t, e), le.detach()), ue[t] = i), i }

    function F(t, e) {
        return { get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments) } } }

    function j(t) {
        if (t in Ce) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), i = Se.length; i--;)
            if (t = Se[i] + e, t in Ce) return t }

    function N(t, e) {
        for (var i, n, r, s = [], o = 0, a = t.length; o < a; o++) n = t[o], n.style && (s[o] = pt._data(n, "olddisplay"), i = n.style.display, e ? (s[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && Lt(n) && (s[o] = pt._data(n, "olddisplay", A(n.nodeName)))) : (r = Lt(n), (i && "none" !== i || !r) && pt._data(n, "olddisplay", r ? i : pt.css(n, "display"))));
        for (o = 0; o < a; o++) n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[o] || "" : "none"));
        return t }

    function O(t, e, i) {
        var n = we.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e }

    function I(t, e, i, n, r) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; s < 4; s += 2) "margin" === i && (o += pt.css(t, i + Pt[s], !0, r)), n ? ("content" === i && (o -= pt.css(t, "padding" + Pt[s], !0, r)), "margin" !== i && (o -= pt.css(t, "border" + Pt[s] + "Width", !0, r))) : (o += pt.css(t, "padding" + Pt[s], !0, r), "padding" !== i && (o += pt.css(t, "border" + Pt[s] + "Width", !0, r)));
        return o }

    function $(t, e, i) {
        var n = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            s = fe(t),
            o = ct.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, s);
        if (r <= 0 || null == r) {
            if (r = me(t, e, s), (r < 0 || null == r) && (r = t.style[e]), ce.test(r)) return r;
            n = o && (ct.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0 }
        return r + I(t, e, i || (o ? "border" : "content"), n, s) + "px" }

    function P(t, e, i, n, r) {
        return new P.prototype.init(t, e, i, n, r) }

    function L() {
        return t.setTimeout(function() { De = void 0 }), De = pt.now() }

    function R(t, e) {
        var i, n = { height: t },
            r = 0;
        for (e = e ? 1 : 0; r < 4; r += 2 - e) i = Pt[r], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n }

    function H(t, e, i) {
        for (var n, r = (W.tweeners[e] || []).concat(W.tweeners["*"]), s = 0, o = r.length; s < o; s++)
            if (n = r[s].call(i, e, t)) return n }

    function q(t, e, i) {
        var n, r, s, o, a, l, u, d, c = this,
            h = {},
            p = t.style,
            f = t.nodeType && Lt(t),
            m = pt._data(t, "fxshow");
        i.queue || (a = pt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() { a.unqueued || l() }), a.unqueued++, c.always(function() { c.always(function() { a.unqueued--, pt.queue(t, "fx").length || a.empty.fire() }) })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], u = pt.css(t, "display"), d = "none" === u ? pt._data(t, "olddisplay") || A(t.nodeName) : u, "inline" === d && "none" === pt.css(t, "float") && (ct.inlineBlockNeedsLayout && "inline" !== A(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", ct.shrinkWrapBlocks() || c.always(function() { p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2] }));
        for (n in e)
            if (r = e[n], Ee.exec(r)) {
                if (delete e[n], s = s || "toggle" === r, r === (f ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[n]) continue;
                    f = !0 }
                h[n] = m && m[n] || pt.style(t, n) } else u = void 0;
        if (pt.isEmptyObject(h)) "inline" === ("none" === u ? A(t.nodeName) : u) && (p.display = u);
        else { m ? "hidden" in m && (f = m.hidden) : m = pt._data(t, "fxshow", {}), s && (m.hidden = !f), f ? pt(t).show() : c.done(function() { pt(t).hide() }), c.done(function() {
                var e;
                pt._removeData(t, "fxshow");
                for (e in h) pt.style(t, e, h[e]) });
            for (n in h) o = H(f ? m[n] : 0, n, c), n in m || (m[n] = o.start, f && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0)) } }

    function U(t, e) {
        var i, n, r, s, o;
        for (i in t)
            if (n = pt.camelCase(i), r = e[n], s = t[i], pt.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), o = pt.cssHooks[n], o && "expand" in o) { s = o.expand(s), delete t[n];
                for (i in s) i in t || (t[i] = s[i], e[i] = r) } else e[n] = r }

    function W(t, e, i) {
        var n, r, s = 0,
            o = W.prefilters.length,
            a = pt.Deferred().always(function() { delete l.elem }),
            l = function() {
                if (r) return !1;
                for (var e = De || L(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, s = 1 - n, o = 0, l = u.tweens.length; o < l; o++) u.tweens[o].run(s);
                return a.notifyWith(t, [u, s, i]), s < 1 && l ? i : (a.resolveWith(t, [u]), !1) },
            u = a.promise({ elem: t, props: pt.extend({}, e), opts: pt.extend(!0, { specialEasing: {}, easing: pt.easing._default }, i), originalProperties: e, originalOptions: i, startTime: De || L(), duration: i.duration, tweens: [], createTween: function(e, i) {
                    var n = pt.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n }, stop: function(e) {
                    var i = 0,
                        n = e ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i < n; i++) u.tweens[i].run(1);
                    return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this } }),
            d = u.props;
        for (U(d, u.opts.specialEasing); s < o; s++)
            if (n = W.prefilters[s].call(u, t, d, u.opts)) return pt.isFunction(n.stop) && (pt._queueHooks(u.elem, u.opts.queue).stop = pt.proxy(n.stop, n)), n;
        return pt.map(d, H, u), pt.isFunction(u.opts.start) && u.opts.start.call(t, u), pt.fx.timer(pt.extend(l, { elem: t, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always) }

    function V(t) {
        return pt.attr(t, "class") || "" }

    function B(t) {
        return function(e, i) { "string" != typeof e && (i = e, e = "*");
            var n, r = 0,
                s = e.toLowerCase().match(_t) || [];
            if (pt.isFunction(i))
                for (; n = s[r++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i) } }

    function z(t, e, i, n) {
        function r(a) {
            var l;
            return s[a] = !0, pt.each(t[a] || [], function(t, a) {
                var u = a(e, i, n);
                return "string" != typeof u || o || s[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1) }), l }
        var s = {},
            o = t === Xe;
        return r(e.dataTypes[0]) || !s["*"] && r("*") }

    function J(t, e) {
        var i, n, r = pt.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && pt.extend(!0, t, i), t }

    function Q(t, e, i) {
        for (var n, r, s, o, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (o in a)
                if (a[o] && a[o].test(r)) { l.unshift(o);
                    break }
        if (l[0] in i) s = l[0];
        else {
            for (o in i) {
                if (!l[0] || t.converters[o + " " + l[0]]) { s = o;
                    break }
                n || (n = o) }
            s = s || n }
        if (s) return s !== l[0] && l.unshift(s), i[s] }

    function Y(t, e, i, n) {
        var r, s, o, a, l, u = {},
            d = t.dataTypes.slice();
        if (d[1])
            for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
        for (s = d.shift(); s;)
            if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = d.shift())
                if ("*" === s) s = l;
                else if ("*" !== l && l !== s) {
            if (o = u[l + " " + s] || u["* " + s], !o)
                for (r in u)
                    if (a = r.split(" "), a[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) { o === !0 ? o = u[r] : u[r] !== !0 && (s = a[0], d.unshift(a[1]));
                        break }
            if (o !== !0)
                if (o && t["throws"]) e = o(e);
                else try { e = o(e) } catch (t) {
                    return { state: "parsererror", error: o ? t : "No conversion from " + l + " to " + s } } }
        return { state: "success", data: e } }

    function G(t) {
        return t.style && t.style.display || pt.css(t, "display") }

    function K(t) {
        if (!pt.contains(t.ownerDocument || nt, t)) return !0;
        for (; t && 1 === t.nodeType;) {
            if ("none" === G(t) || "hidden" === t.type) return !0;
            t = t.parentNode }
        return !1 }

    function X(t, e, i, n) {
        var r;
        if (pt.isArray(e)) pt.each(e, function(e, r) { i || ni.test(t) ? n(t, r) : X(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, i, n) });
        else if (i || "object" !== pt.type(e)) n(t, e);
        else
            for (r in e) X(t + "[" + r + "]", e[r], i, n) }

    function Z() {
        try {
            return new t.XMLHttpRequest } catch (t) {} }

    function tt() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }

    function et(t) {
        return pt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow) }
    var it = [],
        nt = t.document,
        rt = it.slice,
        st = it.concat,
        ot = it.push,
        at = it.indexOf,
        lt = {},
        ut = lt.toString,
        dt = lt.hasOwnProperty,
        ct = {},
        ht = "1.12.4",
        pt = function(t, e) {
            return new pt.fn.init(t, e) },
        ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        mt = /^-ms-/,
        gt = /-([\da-z])/gi,
        yt = function(t, e) {
            return e.toUpperCase() };
    pt.fn = pt.prototype = { jquery: ht, constructor: pt, selector: "", length: 0, toArray: function() {
            return rt.call(this) }, get: function(t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : rt.call(this) }, pushStack: function(t) {
            var e = pt.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e }, each: function(t) {
            return pt.each(this, t) }, map: function(t) {
            return this.pushStack(pt.map(this, function(e, i) {
                return t.call(e, i, e) })) }, slice: function() {
            return this.pushStack(rt.apply(this, arguments)) }, first: function() {
            return this.eq(0) }, last: function() {
            return this.eq(-1) }, eq: function(t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : []) }, end: function() {
            return this.prevObject || this.constructor() }, push: ot, sort: it.sort, splice: it.splice }, pt.extend = pt.fn.extend = function() {
        var t, e, i, n, r, s, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || pt.isFunction(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
            if (null != (r = arguments[a]))
                for (n in r) t = o[n], i = r[n], o !== i && (u && i && (pt.isPlainObject(i) || (e = pt.isArray(i))) ? (e ? (e = !1, s = t && pt.isArray(t) ? t : []) : s = t && pt.isPlainObject(t) ? t : {}, o[n] = pt.extend(u, s, i)) : void 0 !== i && (o[n] = i));
        return o }, pt.extend({ expando: "jQuery" + (ht + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(t) {
            throw new Error(t) }, noop: function() {}, isFunction: function(t) {
            return "function" === pt.type(t) }, isArray: Array.isArray || function(t) {
            return "array" === pt.type(t) }, isWindow: function(t) {
            return null != t && t == t.window }, isNumeric: function(t) {
            var e = t && t.toString();
            return !pt.isArray(t) && e - parseFloat(e) + 1 >= 0 }, isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0 }, isPlainObject: function(t) {
            var e;
            if (!t || "object" !== pt.type(t) || t.nodeType || pt.isWindow(t)) return !1;
            try {
                if (t.constructor && !dt.call(t, "constructor") && !dt.call(t.constructor.prototype, "isPrototypeOf")) return !1 } catch (t) {
                return !1 }
            if (!ct.ownFirst)
                for (e in t) return dt.call(t, e);
            for (e in t);
            return void 0 === e || dt.call(t, e) }, type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ut.call(t)] || "object" : typeof t }, globalEval: function(e) { e && pt.trim(e) && (t.execScript || function(e) { t.eval.call(t, e) })(e) }, camelCase: function(t) {
            return t.replace(mt, "ms-").replace(gt, yt) }, nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase() }, each: function(t, e) {
            var n, r = 0;
            if (i(t))
                for (n = t.length; r < n && e.call(t[r], r, t[r]) !== !1; r++);
            else
                for (r in t)
                    if (e.call(t[r], r, t[r]) === !1) break; return t }, trim: function(t) {
            return null == t ? "" : (t + "").replace(ft, "") }, makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? pt.merge(n, "string" == typeof t ? [t] : t) : ot.call(n, t)), n }, inArray: function(t, e, i) {
            var n;
            if (e) {
                if (at) return at.call(e, t, i);
                for (n = e.length, i = i ? i < 0 ? Math.max(0, n + i) : i : 0; i < n; i++)
                    if (i in e && e[i] === t) return i }
            return -1 }, merge: function(t, e) {
            for (var i = +e.length, n = 0, r = t.length; n < i;) t[r++] = e[n++];
            if (i !== i)
                for (; void 0 !== e[n];) t[r++] = e[n++];
            return t.length = r, t }, grep: function(t, e, i) {
            for (var n, r = [], s = 0, o = t.length, a = !i; s < o; s++) n = !e(t[s], s), n !== a && r.push(t[s]);
            return r }, map: function(t, e, n) {
            var r, s, o = 0,
                a = [];
            if (i(t))
                for (r = t.length; o < r; o++) s = e(t[o], o, n), null != s && a.push(s);
            else
                for (o in t) s = e(t[o], o, n), null != s && a.push(s);
            return st.apply([], a) }, guid: 1, proxy: function(t, e) {
            var i, n, r;
            if ("string" == typeof e && (r = t[e], e = t, t = r), pt.isFunction(t)) return i = rt.call(arguments, 2), n = function() {
                return t.apply(e || this, i.concat(rt.call(arguments))) }, n.guid = t.guid = t.guid || pt.guid++, n }, now: function() {
            return +new Date }, support: ct }), "function" == typeof Symbol && (pt.fn[Symbol.iterator] = it[Symbol.iterator]), pt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) { lt["[object " + e + "]"] = e.toLowerCase() });
    var vt = function(t) {
        function e(t, e, i, n) {
            var r, s, o, a, l, u, c, p, f = e && e.ownerDocument,
                m = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return i;
            if (!n && ((e ? e.ownerDocument || e : H) !== j && F(e), e = e || j, O)) {
                if (11 !== m && (u = yt.exec(t)))
                    if (r = u[1]) {
                        if (9 === m) {
                            if (!(o = e.getElementById(r))) return i;
                            if (o.id === r) return i.push(o), i } else if (f && (o = f.getElementById(r)) && L(e, o) && o.id === r) return i.push(o), i } else {
                        if (u[2]) return X.apply(i, e.getElementsByTagName(t)), i;
                        if ((r = u[3]) && k.getElementsByClassName && e.getElementsByClassName) return X.apply(i, e.getElementsByClassName(r)), i }
                if (k.qsa && !B[t + " "] && (!I || !I.test(t))) {
                    if (1 !== m) f = e, p = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = R), c = D(t), s = c.length, l = ht.test(a) ? "#" + a : "[id='" + a + "']"; s--;) c[s] = l + " " + h(c[s]);
                        p = c.join(","), f = vt.test(t) && d(e.parentNode) || e }
                    if (p) try {
                        return X.apply(i, f.querySelectorAll(p)), i } catch (t) {} finally { a === R && e.removeAttribute("id") } } }
            return E(t.replace(at, "$1"), e, i, n) }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > T.cacheLength && delete t[e.shift()], t[i + " "] = n }
            var e = [];
            return t }

        function n(t) {
            return t[R] = !0, t }

        function r(t) {
            var e = j.createElement("div");
            try {
                return !!t(e) } catch (t) {
                return !1 } finally { e.parentNode && e.parentNode.removeChild(e), e = null } }

        function s(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) T.attrHandle[i[n]] = e }

        function o(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || J) - (~t.sourceIndex || J);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1 }

        function a(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t } }

        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t } }

        function u(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var r, s = t([], i.length, e), o = s.length; o--;) i[r = s[o]] && (i[r] = !(n[r] = i[r])) }) }) }

        function d(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t }

        function c() {}

        function h(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n }

        function p(t, e, i) {
            var n = e.dir,
                r = i && "parentNode" === n,
                s = U++;
            return e.first ? function(e, i, s) {
                for (; e = e[n];)
                    if (1 === e.nodeType || r) return t(e, i, s) } : function(e, i, o) {
                var a, l, u, d = [q, s];
                if (o) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || r) && t(e, i, o)) return !0 } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || r) {
                            if (u = e[R] || (e[R] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (a = l[n]) && a[0] === q && a[1] === s) return d[2] = a[2];
                            if (l[n] = d, d[2] = t(e, i, o)) return !0 } } }

        function f(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var r = t.length; r--;)
                    if (!t[r](e, i, n)) return !1;
                return !0 } : t[0] }

        function m(t, i, n) {
            for (var r = 0, s = i.length; r < s; r++) e(t, i[r], n);
            return n }

        function g(t, e, i, n, r) {
            for (var s, o = [], a = 0, l = t.length, u = null != e; a < l; a++)(s = t[a]) && (i && !i(s, n, r) || (o.push(s), u && e.push(a)));
            return o }

        function y(t, e, i, r, s, o) {
            return r && !r[R] && (r = y(r)), s && !s[R] && (s = y(s, o)), n(function(n, o, a, l) {
                var u, d, c, h = [],
                    p = [],
                    f = o.length,
                    y = n || m(e || "*", a.nodeType ? [a] : a, []),
                    v = !t || !n && e ? y : g(y, h, t, a, l),
                    b = i ? s || (n ? t : f || r) ? [] : o : v;
                if (i && i(v, b, a, l), r)
                    for (u = g(b, p), r(u, [], a, l), d = u.length; d--;)(c = u[d]) && (b[p[d]] = !(v[p[d]] = c));
                if (n) {
                    if (s || t) {
                        if (s) {
                            for (u = [], d = b.length; d--;)(c = b[d]) && u.push(v[d] = c);
                            s(null, b = [], u, l) }
                        for (d = b.length; d--;)(c = b[d]) && (u = s ? tt(n, c) : h[d]) > -1 && (n[u] = !(o[u] = c)) } } else b = g(b === o ? b.splice(f, b.length) : b), s ? s(null, o, b, l) : X.apply(o, b) }) }

        function v(t) {
            for (var e, i, n, r = t.length, s = T.relative[t[0].type], o = s || T.relative[" "], a = s ? 1 : 0, l = p(function(t) {
                    return t === e }, o, !0), u = p(function(t) {
                    return tt(e, t) > -1 }, o, !0), d = [function(t, i, n) {
                    var r = !s && (n || i !== M) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n));
                    return e = null, r }]; a < r; a++)
                if (i = T.relative[t[a].type]) d = [p(f(d), i)];
                else {
                    if (i = T.filter[t[a].type].apply(null, t[a].matches), i[R]) {
                        for (n = ++a; n < r && !T.relative[t[n].type]; n++);
                        return y(a > 1 && f(d), a > 1 && h(t.slice(0, a - 1).concat({ value: " " === t[a - 2].type ? "*" : "" })).replace(at, "$1"), i, a < n && v(t.slice(a, n)), n < r && v(t = t.slice(n)), n < r && h(t)) }
                    d.push(i) }
            return f(d) }

        function b(t, i) {
            var r = i.length > 0,
                s = t.length > 0,
                o = function(n, o, a, l, u) {
                    var d, c, h, p = 0,
                        f = "0",
                        m = n && [],
                        y = [],
                        v = M,
                        b = n || s && T.find.TAG("*", u),
                        w = q += null == v ? 1 : Math.random() || .1,
                        k = b.length;
                    for (u && (M = o === j || o || u); f !== k && null != (d = b[f]); f++) {
                        if (s && d) {
                            for (c = 0, o || d.ownerDocument === j || (F(d), a = !O); h = t[c++];)
                                if (h(d, o || j, a)) { l.push(d);
                                    break }
                            u && (q = w) }
                        r && ((d = !h && d) && p--, n && m.push(d)) }
                    if (p += f, r && f !== p) {
                        for (c = 0; h = i[c++];) h(m, y, o, a);
                        if (n) {
                            if (p > 0)
                                for (; f--;) m[f] || y[f] || (y[f] = G.call(l));
                            y = g(y) }
                        X.apply(l, y), u && !n && y.length > 0 && p + i.length > 1 && e.uniqueSort(l) }
                    return u && (q = w, M = v), m };
            return r ? n(o) : o }
        var w, k, T, S, C, D, x, E, M, _, A, F, j, N, O, I, $, P, L, R = "sizzle" + 1 * new Date,
            H = t.document,
            q = 0,
            U = 0,
            W = i(),
            V = i(),
            B = i(),
            z = function(t, e) {
                return t === e && (A = !0), 0 },
            J = 1 << 31,
            Q = {}.hasOwnProperty,
            Y = [],
            G = Y.pop,
            K = Y.push,
            X = Y.push,
            Z = Y.slice,
            tt = function(t, e) {
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] === e) return i;
                return -1 },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            rt = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
            st = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
            ot = new RegExp(it + "+", "g"),
            at = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            lt = new RegExp("^" + it + "*," + it + "*"),
            ut = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            dt = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
            ct = new RegExp(st),
            ht = new RegExp("^" + nt + "$"),
            pt = { ID: new RegExp("^#(" + nt + ")"), CLASS: new RegExp("^\\.(" + nt + ")"), TAG: new RegExp("^(" + nt + "|[*])"), ATTR: new RegExp("^" + rt), PSEUDO: new RegExp("^" + st), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"), bool: new RegExp("^(?:" + et + ")$", "i"), needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i") },
            ft = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            gt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            vt = /[+~]/,
            bt = /'|\\/g,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
            kt = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320) },
            Tt = function() { F() };
        try { X.apply(Y = Z.call(H.childNodes), H.childNodes), Y[H.childNodes.length].nodeType } catch (t) { X = { apply: Y.length ? function(t, e) { K.apply(t, Z.call(e)) } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1 } } }
        k = e.support = {}, C = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName }, F = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t : H;
            return n !== j && 9 === n.nodeType && n.documentElement ? (j = n, N = j.documentElement, O = !C(j), (i = j.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", Tt, !1) : i.attachEvent && i.attachEvent("onunload", Tt)), k.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className") }), k.getElementsByTagName = r(function(t) {
                return t.appendChild(j.createComment("")), !t.getElementsByTagName("*").length }), k.getElementsByClassName = gt.test(j.getElementsByClassName), k.getById = r(function(t) {
                return N.appendChild(t).id = R, !j.getElementsByName || !j.getElementsByName(R).length }), k.getById ? (T.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && O) {
                    var i = e.getElementById(t);
                    return i ? [i] : [] } }, T.filter.ID = function(t) {
                var e = t.replace(wt, kt);
                return function(t) {
                    return t.getAttribute("id") === e } }) : (delete T.find.ID, T.filter.ID = function(t) {
                var e = t.replace(wt, kt);
                return function(t) {
                    var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e } }), T.find.TAG = k.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : k.qsa ? e.querySelectorAll(t) : void 0 } : function(t, e) {
                var i, n = [],
                    r = 0,
                    s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                    return n }
                return s }, T.find.CLASS = k.getElementsByClassName && function(t, e) {
                if ("undefined" != typeof e.getElementsByClassName && O) return e.getElementsByClassName(t) }, $ = [], I = [], (k.qsa = gt.test(j.querySelectorAll)) && (r(function(t) { N.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || I.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + R + "-]").length || I.push("~="), t.querySelectorAll(":checked").length || I.push(":checked"), t.querySelectorAll("a#" + R + "+*").length || I.push(".#.+[+~]") }), r(function(t) {
                var e = j.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && I.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:") })), (k.matchesSelector = gt.test(P = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function(t) { k.disconnectedMatch = P.call(t, "div"), P.call(t, "[s!='']:x"), $.push("!=", st) }), I = I.length && new RegExp(I.join("|")), $ = $.length && new RegExp($.join("|")), e = gt.test(N.compareDocumentPosition), L = e || gt.test(N.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n))) } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1 }, z = e ? function(t, e) {
                if (t === e) return A = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !k.sortDetached && e.compareDocumentPosition(t) === i ? t === j || t.ownerDocument === H && L(H, t) ? -1 : e === j || e.ownerDocument === H && L(H, e) ? 1 : _ ? tt(_, t) - tt(_, e) : 0 : 4 & i ? -1 : 1) } : function(t, e) {
                if (t === e) return A = !0, 0;
                var i, n = 0,
                    r = t.parentNode,
                    s = e.parentNode,
                    a = [t],
                    l = [e];
                if (!r || !s) return t === j ? -1 : e === j ? 1 : r ? -1 : s ? 1 : _ ? tt(_, t) - tt(_, e) : 0;
                if (r === s) return o(t, e);
                for (i = t; i = i.parentNode;) a.unshift(i);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (; a[n] === l[n];) n++;
                return n ? o(a[n], l[n]) : a[n] === H ? -1 : l[n] === H ? 1 : 0 }, j) : j }, e.matches = function(t, i) {
            return e(t, null, null, i) }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== j && F(t), i = i.replace(dt, "='$1']"), k.matchesSelector && O && !B[i + " "] && (!$ || !$.test(i)) && (!I || !I.test(i))) try {
                var n = P.call(t, i);
                if (n || k.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n } catch (t) {}
            return e(i, j, null, [t]).length > 0 }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== j && F(t), L(t, e) }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== j && F(t);
            var i = T.attrHandle[e.toLowerCase()],
                n = i && Q.call(T.attrHandle, e.toLowerCase()) ? i(t, e, !O) : void 0;
            return void 0 !== n ? n : k.attributes || !O ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t) }, e.uniqueSort = function(t) {
            var e, i = [],
                n = 0,
                r = 0;
            if (A = !k.detectDuplicates, _ = !k.sortStable && t.slice(0), t.sort(z), A) {
                for (; e = t[r++];) e === t[r] && (n = i.push(r));
                for (; n--;) t.splice(i[n], 1) }
            return _ = null, t }, S = e.getText = function(t) {
            var e, i = "",
                n = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += S(t) } else if (3 === r || 4 === r) return t.nodeValue } else
                for (; e = t[n++];) i += S(e);
            return i }, T = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: pt,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(t) {
                    return t[1] = t[1].replace(wt, kt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, kt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4) }, CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t }, PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ct.test(i) && (e = D(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3)) } },
            filter: {
                TAG: function(t) {
                    var e = t.replace(wt, kt).toLowerCase();
                    return "*" === t ? function() {
                        return !0 } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e } },
                CLASS: function(t) {
                    var e = W[t + " "];
                    return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && W(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "") }) },
                ATTR: function(t, i, n) {
                    return function(r) {
                        var s = e.attr(r, t);
                        return null == s ? "!=" === i : !i || (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(ot, " ") + " ").indexOf(n) > -1 : "|=" === i && (s === n || s.slice(0, n.length + 1) === n + "-"));
                    }
                },
                CHILD: function(t, e, i, n, r) {
                    var s = "nth" !== t.slice(0, 3),
                        o = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === n && 0 === r ? function(t) {
                        return !!t.parentNode } : function(e, i, l) {
                        var u, d, c, h, p, f, m = s !== o ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            y = a && e.nodeName.toLowerCase(),
                            v = !l && !a,
                            b = !1;
                        if (g) {
                            if (s) {
                                for (; m;) {
                                    for (h = e; h = h[m];)
                                        if (a ? h.nodeName.toLowerCase() === y : 1 === h.nodeType) return !1;
                                    f = m = "only" === t && !f && "nextSibling" }
                                return !0 }
                            if (f = [o ? g.firstChild : g.lastChild], o && v) {
                                for (h = g, c = h[R] || (h[R] = {}), d = c[h.uniqueID] || (c[h.uniqueID] = {}), u = d[t] || [], p = u[0] === q && u[1], b = p && u[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (b = p = 0) || f.pop();)
                                    if (1 === h.nodeType && ++b && h === e) { d[t] = [q, p, b];
                                        break } } else if (v && (h = e, c = h[R] || (h[R] = {}), d = c[h.uniqueID] || (c[h.uniqueID] = {}), u = d[t] || [], p = u[0] === q && u[1], b = p), b === !1)
                                for (;
                                    (h = ++p && h && h[m] || (b = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== y : 1 !== h.nodeType) || !++b || (v && (c = h[R] || (h[R] = {}), d = c[h.uniqueID] || (c[h.uniqueID] = {}), d[t] = [q, b]), h !== e)););
                            return b -= r, b === n || b % n === 0 && b / n >= 0 } } },
                PSEUDO: function(t, i) {
                    var r, s = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return s[R] ? s(i) : s.length > 1 ? (r = [t, t, "", i], T.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, r = s(t, i), o = r.length; o--;) n = tt(t, r[o]), t[n] = !(e[n] = r[o]) }) : function(t) {
                        return s(t, 0, r) }) : s }
            },
            pseudos: { not: n(function(t) {
                    var e = [],
                        i = [],
                        r = x(t.replace(at, "$1"));
                    return r[R] ? n(function(t, e, i, n) {
                        for (var s, o = r(t, null, n, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s)) }) : function(t, n, s) {
                        return e[0] = t, r(e, null, s, i), e[0] = null, !i.pop() } }), has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0 } }), contains: n(function(t) {
                    return t = t.replace(wt, kt),
                        function(e) {
                            return (e.textContent || e.innerText || S(e)).indexOf(t) > -1 } }), lang: n(function(t) {
                    return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, kt).toLowerCase(),
                        function(e) {
                            var i;
                            do
                                if (i = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1 } }), target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id }, root: function(t) {
                    return t === N }, focus: function(t) {
                    return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex) }, enabled: function(t) {
                    return t.disabled === !1 }, disabled: function(t) {
                    return t.disabled === !0 }, checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected }, selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0 }, empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0 }, parent: function(t) {
                    return !T.pseudos.empty(t) }, header: function(t) {
                    return mt.test(t.nodeName) }, input: function(t) {
                    return ft.test(t.nodeName) }, button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e }, text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase()) }, first: u(function() {
                    return [0] }), last: u(function(t, e) {
                    return [e - 1] }), eq: u(function(t, e, i) {
                    return [i < 0 ? i + e : i] }), even: u(function(t, e) {
                    for (var i = 0; i < e; i += 2) t.push(i);
                    return t }), odd: u(function(t, e) {
                    for (var i = 1; i < e; i += 2) t.push(i);
                    return t }), lt: u(function(t, e, i) {
                    for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                    return t }), gt: u(function(t, e, i) {
                    for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                    return t }) }
        }, T.pseudos.nth = T.pseudos.eq;
        for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) T.pseudos[w] = a(w);
        for (w in { submit: !0, reset: !0 }) T.pseudos[w] = l(w);
        return c.prototype = T.filters = T.pseudos, T.setFilters = new c, D = e.tokenize = function(t, i) {
            var n, r, s, o, a, l, u, d = V[t + " "];
            if (d) return i ? 0 : d.slice(0);
            for (a = t, l = [], u = T.preFilter; a;) { n && !(r = lt.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), n = !1, (r = ut.exec(a)) && (n = r.shift(), s.push({ value: n, type: r[0].replace(at, " ") }), a = a.slice(n.length));
                for (o in T.filter) !(r = pt[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), s.push({ value: n, type: o, matches: r }), a = a.slice(n.length));
                if (!n) break }
            return i ? a.length : a ? e.error(t) : V(t, l).slice(0) }, x = e.compile = function(t, e) {
            var i, n = [],
                r = [],
                s = B[t + " "];
            if (!s) {
                for (e || (e = D(t)), i = e.length; i--;) s = v(e[i]), s[R] ? n.push(s) : r.push(s);
                s = B(t, b(r, n)), s.selector = t }
            return s }, E = e.select = function(t, e, i, n) {
            var r, s, o, a, l, u = "function" == typeof t && t,
                c = !n && D(t = u.selector || t);
            if (i = i || [], 1 === c.length) {
                if (s = c[0] = c[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && k.getById && 9 === e.nodeType && O && T.relative[s[1].type]) {
                    if (e = (T.find.ID(o.matches[0].replace(wt, kt), e) || [])[0], !e) return i;
                    u && (e = e.parentNode), t = t.slice(s.shift().value.length) }
                for (r = pt.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !T.relative[a = o.type]);)
                    if ((l = T.find[a]) && (n = l(o.matches[0].replace(wt, kt), vt.test(s[0].type) && d(e.parentNode) || e))) {
                        if (s.splice(r, 1), t = n.length && h(s), !t) return X.apply(i, n), i;
                        break } }
            return (u || x(t, c))(n, e, !O, i, !e || vt.test(t) && d(e.parentNode) || e), i }, k.sortStable = R.split("").sort(z).join("") === R, k.detectDuplicates = !!A, F(), k.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(j.createElement("div")) }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href") }) || s("type|href|height|width", function(t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2) }), k.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value") }) || s("value", function(t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue }), r(function(t) {
            return null == t.getAttribute("disabled") }) || s(et, function(t, e, i) {
            var n;
            if (!i) return t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null }), e
    }(t);
    pt.find = vt, pt.expr = vt.selectors, pt.expr[":"] = pt.expr.pseudos, pt.uniqueSort = pt.unique = vt.uniqueSort, pt.text = vt.getText, pt.isXMLDoc = vt.isXML, pt.contains = vt.contains;
    var bt = function(t, e, i) {
            for (var n = [], r = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && pt(t).is(i)) break;
                    n.push(t) }
            return n },
        wt = function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i },
        kt = pt.expr.match.needsContext,
        Tt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        St = /^.[^:#\[\.,]*$/;
    pt.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? pt.find.matchesSelector(n, t) ? [n] : [] : pt.find.matches(t, pt.grep(e, function(t) {
            return 1 === t.nodeType })) }, pt.fn.extend({ find: function(t) {
            var e, i = [],
                n = this,
                r = n.length;
            if ("string" != typeof t) return this.pushStack(pt(t).filter(function() {
                for (e = 0; e < r; e++)
                    if (pt.contains(n[e], this)) return !0 }));
            for (e = 0; e < r; e++) pt.find(t, n[e], i);
            return i = this.pushStack(r > 1 ? pt.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i }, filter: function(t) {
            return this.pushStack(n(this, t || [], !1)) }, not: function(t) {
            return this.pushStack(n(this, t || [], !0)) }, is: function(t) {
            return !!n(this, "string" == typeof t && kt.test(t) ? pt(t) : t || [], !1).length } });
    var Ct, Dt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        xt = pt.fn.init = function(t, e, i) {
            var n, r;
            if (!t) return this;
            if (i = i || Ct, "string" == typeof t) {
                if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Dt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof pt ? e[0] : e, pt.merge(this, pt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : nt, !0)), Tt.test(n[1]) && pt.isPlainObject(e))
                        for (n in e) pt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this }
                if (r = nt.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2]) return Ct.find(t);
                    this.length = 1, this[0] = r }
                return this.context = nt, this.selector = t, this }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : pt.isFunction(t) ? "undefined" != typeof i.ready ? i.ready(t) : t(pt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), pt.makeArray(t, this)) };
    xt.prototype = pt.fn, Ct = pt(nt);
    var Et = /^(?:parents|prev(?:Until|All))/,
        Mt = { children: !0, contents: !0, next: !0, prev: !0 };
    pt.fn.extend({ has: function(t) {
            var e, i = pt(t, this),
                n = i.length;
            return this.filter(function() {
                for (e = 0; e < n; e++)
                    if (pt.contains(this, i[e])) return !0 }) }, closest: function(t, e) {
            for (var i, n = 0, r = this.length, s = [], o = kt.test(t) || "string" != typeof t ? pt(t, e || this.context) : 0; n < r; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && pt.find.matchesSelector(i, t))) { s.push(i);
                        break }
            return this.pushStack(s.length > 1 ? pt.uniqueSort(s) : s) }, index: function(t) {
            return t ? "string" == typeof t ? pt.inArray(this[0], pt(t)) : pt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(t, e) {
            return this.pushStack(pt.uniqueSort(pt.merge(this.get(), pt(t, e)))) }, addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) } }), pt.each({ parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null }, parents: function(t) {
            return bt(t, "parentNode") }, parentsUntil: function(t, e, i) {
            return bt(t, "parentNode", i) }, next: function(t) {
            return r(t, "nextSibling") }, prev: function(t) {
            return r(t, "previousSibling") }, nextAll: function(t) {
            return bt(t, "nextSibling") }, prevAll: function(t) {
            return bt(t, "previousSibling") }, nextUntil: function(t, e, i) {
            return bt(t, "nextSibling", i) }, prevUntil: function(t, e, i) {
            return bt(t, "previousSibling", i) }, siblings: function(t) {
            return wt((t.parentNode || {}).firstChild, t) }, children: function(t) {
            return wt(t.firstChild) }, contents: function(t) {
            return pt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : pt.merge([], t.childNodes) } }, function(t, e) { pt.fn[t] = function(i, n) {
            var r = pt.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = pt.filter(n, r)), this.length > 1 && (Mt[t] || (r = pt.uniqueSort(r)), Et.test(t) && (r = r.reverse())), this.pushStack(r) } });
    var _t = /\S+/g;
    pt.Callbacks = function(t) { t = "string" == typeof t ? s(t) : pt.extend({}, t);
        var e, i, n, r, o = [],
            a = [],
            l = -1,
            u = function() {
                for (r = t.once, n = e = !0; a.length; l = -1)
                    for (i = a.shift(); ++l < o.length;) o[l].apply(i[0], i[1]) === !1 && t.stopOnFalse && (l = o.length, i = !1);
                t.memory || (i = !1), e = !1, r && (o = i ? [] : "") },
            d = { add: function() {
                    return o && (i && !e && (l = o.length - 1, a.push(i)), function e(i) { pt.each(i, function(i, n) { pt.isFunction(n) ? t.unique && d.has(n) || o.push(n) : n && n.length && "string" !== pt.type(n) && e(n) }) }(arguments), i && !e && u()), this }, remove: function() {
                    return pt.each(arguments, function(t, e) {
                        for (var i;
                            (i = pt.inArray(e, o, i)) > -1;) o.splice(i, 1), i <= l && l-- }), this }, has: function(t) {
                    return t ? pt.inArray(t, o) > -1 : o.length > 0 }, empty: function() {
                    return o && (o = []), this }, disable: function() {
                    return r = a = [], o = i = "", this }, disabled: function() {
                    return !o }, lock: function() {
                    return r = !0, i || d.disable(), this }, locked: function() {
                    return !!r }, fireWith: function(t, i) {
                    return r || (i = i || [], i = [t, i.slice ? i.slice() : i], a.push(i), e || u()), this }, fire: function() {
                    return d.fireWith(this, arguments), this }, fired: function() {
                    return !!n } };
        return d }, pt.extend({ Deferred: function(t) {
            var e = [
                    ["resolve", "done", pt.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", pt.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", pt.Callbacks("memory")]
                ],
                i = "pending",
                n = { state: function() {
                        return i }, always: function() {
                        return r.done(arguments).fail(arguments), this }, then: function() {
                        var t = arguments;
                        return pt.Deferred(function(i) { pt.each(e, function(e, s) {
                                var o = pt.isFunction(t[e]) && t[e];
                                r[s[1]](function() {
                                    var t = o && o.apply(this, arguments);
                                    t && pt.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[s[0] + "With"](this === n ? i.promise() : this, o ? [t] : arguments) }) }), t = null }).promise() }, promise: function(t) {
                        return null != t ? pt.extend(t, n) : n } },
                r = {};
            return n.pipe = n.then, pt.each(e, function(t, s) {
                var o = s[2],
                    a = s[3];
                n[s[1]] = o.add, a && o.add(function() { i = a }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function() {
                    return r[s[0] + "With"](this === r ? n : this, arguments), this }, r[s[0] + "With"] = o.fireWith }), n.promise(r), t && t.call(r, r), r }, when: function(t) {
            var e, i, n, r = 0,
                s = rt.call(arguments),
                o = s.length,
                a = 1 !== o || t && pt.isFunction(t.promise) ? o : 0,
                l = 1 === a ? t : pt.Deferred(),
                u = function(t, i, n) {
                    return function(r) { i[t] = this, n[t] = arguments.length > 1 ? rt.call(arguments) : r, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n) } };
            if (o > 1)
                for (e = new Array(o), i = new Array(o), n = new Array(o); r < o; r++) s[r] && pt.isFunction(s[r].promise) ? s[r].promise().progress(u(r, i, e)).done(u(r, n, s)).fail(l.reject) : --a;
            return a || l.resolveWith(n, s), l.promise() } });
    var At;
    pt.fn.ready = function(t) {
        return pt.ready.promise().done(t), this }, pt.extend({ isReady: !1, readyWait: 1, holdReady: function(t) { t ? pt.readyWait++ : pt.ready(!0) }, ready: function(t) {
            (t === !0 ? --pt.readyWait : pt.isReady) || (pt.isReady = !0, t !== !0 && --pt.readyWait > 0 || (At.resolveWith(nt, [pt]), pt.fn.triggerHandler && (pt(nt).triggerHandler("ready"), pt(nt).off("ready")))) } }), pt.ready.promise = function(e) {
        if (!At)
            if (At = pt.Deferred(), "complete" === nt.readyState || "loading" !== nt.readyState && !nt.documentElement.doScroll) t.setTimeout(pt.ready);
            else if (nt.addEventListener) nt.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a);
        else { nt.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var i = !1;
            try { i = null == t.frameElement && nt.documentElement } catch (t) {}
            i && i.doScroll && ! function e() {
                if (!pt.isReady) {
                    try { i.doScroll("left") } catch (i) {
                        return t.setTimeout(e, 50) }
                    o(), pt.ready() } }() }
        return At.promise(e) }, pt.ready.promise();
    var Ft;
    for (Ft in pt(ct)) break;
    ct.ownFirst = "0" === Ft, ct.inlineBlockNeedsLayout = !1, pt(function() {
            var t, e, i, n;
            i = nt.getElementsByTagName("body")[0], i && i.style && (e = nt.createElement("div"), n = nt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ct.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n)) }),
        function() {
            var t = nt.createElement("div");
            ct.deleteExpando = !0;
            try { delete t.test } catch (t) { ct.deleteExpando = !1 }
            t = null }();
    var jt = function(t) {
            var e = pt.noData[(t.nodeName + " ").toLowerCase()],
                i = +t.nodeType || 1;
            return (1 === i || 9 === i) && (!e || e !== !0 && t.getAttribute("classid") === e) },
        Nt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ot = /([A-Z])/g;
    pt.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(t) {
                return t = t.nodeType ? pt.cache[t[pt.expando]] : t[pt.expando], !!t && !u(t) }, data: function(t, e, i) {
                return d(t, e, i) }, removeData: function(t, e) {
                return c(t, e) }, _data: function(t, e, i) {
                return d(t, e, i, !0) }, _removeData: function(t, e) {
                return c(t, e, !0) } }), pt.fn.extend({ data: function(t, e) {
                var i, n, r, s = this[0],
                    o = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (r = pt.data(s), 1 === s.nodeType && !pt._data(s, "parsedAttrs"))) {
                        for (i = o.length; i--;) o[i] && (n = o[i].name, 0 === n.indexOf("data-") && (n = pt.camelCase(n.slice(5)), l(s, n, r[n])));
                        pt._data(s, "parsedAttrs", !0) }
                    return r }
                return "object" == typeof t ? this.each(function() { pt.data(this, t) }) : arguments.length > 1 ? this.each(function() { pt.data(this, t, e) }) : s ? l(s, t, pt.data(s, t)) : void 0 }, removeData: function(t) {
                return this.each(function() { pt.removeData(this, t) }) } }), pt.extend({ queue: function(t, e, i) {
                var n;
                if (t) return e = (e || "fx") + "queue", n = pt._data(t, e), i && (!n || pt.isArray(i) ? n = pt._data(t, e, pt.makeArray(i)) : n.push(i)), n || [] }, dequeue: function(t, e) { e = e || "fx";
                var i = pt.queue(t, e),
                    n = i.length,
                    r = i.shift(),
                    s = pt._queueHooks(t, e),
                    o = function() { pt.dequeue(t, e) }; "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !n && s && s.empty.fire() }, _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return pt._data(t, i) || pt._data(t, i, { empty: pt.Callbacks("once memory").add(function() { pt._removeData(t, e + "queue"), pt._removeData(t, i) }) }) } }), pt.fn.extend({ queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? pt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = pt.queue(this, t, e);
                    pt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && pt.dequeue(this, t) }) }, dequeue: function(t) {
                return this.each(function() { pt.dequeue(this, t) }) }, clearQueue: function(t) {
                return this.queue(t || "fx", []) }, promise: function(t, e) {
                var i, n = 1,
                    r = pt.Deferred(),
                    s = this,
                    o = this.length,
                    a = function() {--n || r.resolveWith(s, [s]) };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) i = pt._data(s[o], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
                return a(), r.promise(e) } }),
        function() {
            var t;
            ct.shrinkWrapBlocks = function() {
                if (null != t) return t;
                t = !1;
                var e, i, n;
                return i = nt.getElementsByTagName("body")[0], i && i.style ? (e = nt.createElement("div"), n = nt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(nt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0 } }();
    var It = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        $t = new RegExp("^(?:([+-])=|)(" + It + ")([a-z%]*)$", "i"),
        Pt = ["Top", "Right", "Bottom", "Left"],
        Lt = function(t, e) {
            return t = e || t, "none" === pt.css(t, "display") || !pt.contains(t.ownerDocument, t) },
        Rt = function(t, e, i, n, r, s, o) {
            var a = 0,
                l = t.length,
                u = null == i;
            if ("object" === pt.type(i)) { r = !0;
                for (a in i) Rt(t, e, a, i[a], !0, s, o) } else if (void 0 !== n && (r = !0, pt.isFunction(n) || (o = !0), u && (o ? (e.call(t, n), e = null) : (u = e, e = function(t, e, i) {
                    return u.call(pt(t), i) })), e))
                for (; a < l; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
            return r ? t : u ? e.call(t) : l ? e(t[0], i) : s },
        Ht = /^(?:checkbox|radio)$/i,
        qt = /<([\w:-]+)/,
        Ut = /^$|\/(?:java|ecma)script/i,
        Wt = /^\s+/,
        Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var t = nt.createElement("div"),
            e = nt.createDocumentFragment(),
            i = nt.createElement("input");
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ct.leadingWhitespace = 3 === t.firstChild.nodeType, ct.tbody = !t.getElementsByTagName("tbody").length, ct.htmlSerialize = !!t.getElementsByTagName("link").length, ct.html5Clone = "<:nav></:nav>" !== nt.createElement("nav").cloneNode(!0).outerHTML, i.type = "checkbox", i.checked = !0, e.appendChild(i), ct.appendChecked = i.checked, t.innerHTML = "<textarea>x</textarea>", ct.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), i = nt.createElement("input"), i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), t.appendChild(i), ct.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ct.noCloneEvent = !!t.addEventListener, t[pt.expando] = 1, ct.attributes = !t.getAttribute(pt.expando) }();
    var Bt = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: ct.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] };
    Bt.optgroup = Bt.option, Bt.tbody = Bt.tfoot = Bt.colgroup = Bt.caption = Bt.thead, Bt.th = Bt.td;
    var zt = /<|&#?\w+;/,
        Jt = /<tbody/i;
    ! function() {
        var e, i, n = nt.createElement("div");
        for (e in { submit: !0, change: !0, focusin: !0 }) i = "on" + e, (ct[e] = i in t) || (n.setAttribute(i, "t"), ct[e] = n.attributes[i].expando === !1);
        n = null }();
    var Qt = /^(?:input|select|textarea)$/i,
        Yt = /^key/,
        Gt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Kt = /^(?:focusinfocus|focusoutblur)$/,
        Xt = /^([^.]*)(?:\.(.+)|)/;
    pt.event = { global: {}, add: function(t, e, i, n, r) {
            var s, o, a, l, u, d, c, h, p, f, m, g = pt._data(t);
            if (g) {
                for (i.handler && (l = i, i = l.handler, r = l.selector), i.guid || (i.guid = pt.guid++), (o = g.events) || (o = g.events = {}), (d = g.handle) || (d = g.handle = function(t) {
                        return "undefined" == typeof pt || t && pt.event.triggered === t.type ? void 0 : pt.event.dispatch.apply(d.elem, arguments) }, d.elem = t), e = (e || "").match(_t) || [""], a = e.length; a--;) s = Xt.exec(e[a]) || [], p = m = s[1], f = (s[2] || "").split(".").sort(), p && (u = pt.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = pt.event.special[p] || {}, c = pt.extend({ type: p, origType: m, data: n, handler: i, guid: i.guid, selector: r, needsContext: r && pt.expr.match.needsContext.test(r), namespace: f.join(".") }, l), (h = o[p]) || (h = o[p] = [], h.delegateCount = 0, u.setup && u.setup.call(t, n, f, d) !== !1 || (t.addEventListener ? t.addEventListener(p, d, !1) : t.attachEvent && t.attachEvent("on" + p, d))), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), pt.event.global[p] = !0);
                t = null } }, remove: function(t, e, i, n, r) {
            var s, o, a, l, u, d, c, h, p, f, m, g = pt.hasData(t) && pt._data(t);
            if (g && (d = g.events)) {
                for (e = (e || "").match(_t) || [""], u = e.length; u--;)
                    if (a = Xt.exec(e[u]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (c = pt.event.special[p] || {}, p = (n ? c.delegateType : c.bindType) || p, h = d[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = h.length; s--;) o = h[s], !r && m !== o.origType || i && i.guid !== o.guid || a && !a.test(o.namespace) || n && n !== o.selector && ("**" !== n || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(t, o));
                        l && !h.length && (c.teardown && c.teardown.call(t, f, g.handle) !== !1 || pt.removeEvent(t, p, g.handle), delete d[p]) } else
                        for (p in d) pt.event.remove(t, p + e[u], i, n, !0);
                pt.isEmptyObject(d) && (delete g.handle, pt._removeData(t, "events")) } }, trigger: function(e, i, n, r) {
            var s, o, a, l, u, d, c, h = [n || nt],
                p = dt.call(e, "type") ? e.type : e,
                f = dt.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = d = n = n || nt, 3 !== n.nodeType && 8 !== n.nodeType && !Kt.test(p + pt.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), o = p.indexOf(":") < 0 && "on" + p, e = e[pt.expando] ? e : new pt.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : pt.makeArray(i, [e]), u = pt.event.special[p] || {}, r || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                if (!r && !u.noBubble && !pt.isWindow(n)) {
                    for (l = u.delegateType || p, Kt.test(l + p) || (a = a.parentNode); a; a = a.parentNode) h.push(a), d = a;
                    d === (n.ownerDocument || nt) && h.push(d.defaultView || d.parentWindow || t) }
                for (c = 0;
                    (a = h[c++]) && !e.isPropagationStopped();) e.type = c > 1 ? l : u.bindType || p, s = (pt._data(a, "events") || {})[e.type] && pt._data(a, "handle"), s && s.apply(a, i), s = o && a[o], s && s.apply && jt(a) && (e.result = s.apply(a, i), e.result === !1 && e.preventDefault());
                if (e.type = p, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(h.pop(), i) === !1) && jt(n) && o && n[p] && !pt.isWindow(n)) { d = n[o], d && (n[o] = null), pt.event.triggered = p;
                    try { n[p]() } catch (t) {}
                    pt.event.triggered = void 0, d && (n[o] = d) }
                return e.result } }, dispatch: function(t) { t = pt.event.fix(t);
            var e, i, n, r, s, o = [],
                a = rt.call(arguments),
                l = (pt._data(this, "events") || {})[t.type] || [],
                u = pt.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (o = pt.event.handlers.call(this, t, l), e = 0;
                    (r = o[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, i = 0;
                        (s = r.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(s.namespace) || (t.handleObj = s, t.data = s.data, n = ((pt.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result } }, handlers: function(t, e) {
            var i, n, r, s, o = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (n = [], i = 0; i < a; i++) s = e[i], r = s.selector + " ", void 0 === n[r] && (n[r] = s.needsContext ? pt(r, this).index(l) > -1 : pt.find(r, this, null, [l]).length), n[r] && n.push(s);
                        n.length && o.push({ elem: l, handlers: n }) }
            return a < e.length && o.push({ elem: this, handlers: e.slice(a) }), o }, fix: function(t) {
            if (t[pt.expando]) return t;
            var e, i, n, r = t.type,
                s = t,
                o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = Gt.test(r) ? this.mouseHooks : Yt.test(r) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new pt.Event(s), e = n.length; e--;) i = n[e], t[i] = s[i];
            return t.target || (t.target = s.srcElement || nt), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, s) : t }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(t, e) {
                var i, n, r, s = e.button,
                    o = e.fromElement;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || nt, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t } }, special: { load: { noBubble: !0 }, focus: { trigger: function() {
                    if (this !== w() && this.focus) try {
                        return this.focus(), !1 } catch (t) {} }, delegateType: "focusin" }, blur: { trigger: function() {
                    if (this === w() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() {
                    if (pt.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1 }, _default: function(t) {
                    return pt.nodeName(t.target, "a") } }, beforeunload: { postDispatch: function(t) { void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result) } } }, simulate: function(t, e, i) {
            var n = pt.extend(new pt.Event, i, { type: t, isSimulated: !0 });
            pt.event.trigger(n, null, e), n.isDefaultPrevented() && i.preventDefault() } }, pt.removeEvent = nt.removeEventListener ? function(t, e, i) { t.removeEventListener && t.removeEventListener(e, i) } : function(t, e, i) {
        var n = "on" + e;
        t.detachEvent && ("undefined" == typeof t[n] && (t[n] = null), t.detachEvent(n, i)) }, pt.Event = function(t, e) {
        return this instanceof pt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? v : b) : this.type = t, e && pt.extend(this, e), this.timeStamp = t && t.timeStamp || pt.now(), void(this[pt.expando] = !0)) : new pt.Event(t, e) }, pt.Event.prototype = { constructor: pt.Event, isDefaultPrevented: b, isPropagationStopped: b, isImmediatePropagationStopped: b, preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = v, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1) }, stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = v, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0) }, stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = v, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation() } }, pt.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(t, e) { pt.event.special[t] = { delegateType: e, bindType: e, handle: function(t) {
                var i, n = this,
                    r = t.relatedTarget,
                    s = t.handleObj;
                return r && (r === n || pt.contains(n, r)) || (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i } } }), ct.submit || (pt.event.special.submit = { setup: function() {
            return !pt.nodeName(this, "form") && void pt.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    i = pt.nodeName(e, "input") || pt.nodeName(e, "button") ? pt.prop(e, "form") : void 0;
                i && !pt._data(i, "submit") && (pt.event.add(i, "submit._submit", function(t) { t._submitBubble = !0 }), pt._data(i, "submit", !0)) }) }, postDispatch: function(t) { t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && pt.event.simulate("submit", this.parentNode, t)) }, teardown: function() {
            return !pt.nodeName(this, "form") && void pt.event.remove(this, "._submit") } }), ct.change || (pt.event.special.change = { setup: function() {
            return Qt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (pt.event.add(this, "propertychange._change", function(t) { "checked" === t.originalEvent.propertyName && (this._justChanged = !0) }), pt.event.add(this, "click._change", function(t) { this._justChanged && !t.isTrigger && (this._justChanged = !1), pt.event.simulate("change", this, t) })), !1) : void pt.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Qt.test(e.nodeName) && !pt._data(e, "change") && (pt.event.add(e, "change._change", function(t) {!this.parentNode || t.isSimulated || t.isTrigger || pt.event.simulate("change", this.parentNode, t) }), pt._data(e, "change", !0)) }) }, handle: function(t) {
            var e = t.target;
            if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments) }, teardown: function() {
            return pt.event.remove(this, "._change"), !Qt.test(this.nodeName) } }), ct.focusin || pt.each({ focus: "focusin", blur: "focusout" }, function(t, e) {
        var i = function(t) { pt.event.simulate(e, t.target, pt.event.fix(t)) };
        pt.event.special[e] = { setup: function() {
                var n = this.ownerDocument || this,
                    r = pt._data(n, e);
                r || n.addEventListener(t, i, !0), pt._data(n, e, (r || 0) + 1) }, teardown: function() {
                var n = this.ownerDocument || this,
                    r = pt._data(n, e) - 1;
                r ? pt._data(n, e, r) : (n.removeEventListener(t, i, !0), pt._removeData(n, e)) } } }), pt.fn.extend({ on: function(t, e, i, n) {
            return k(this, t, e, i, n) }, one: function(t, e, i, n) {
            return k(this, t, e, i, n, 1) }, off: function(t, e, i) {
            var n, r;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, pt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this }
            return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = b), this.each(function() { pt.event.remove(this, t, i, e) }) }, trigger: function(t, e) {
            return this.each(function() { pt.event.trigger(t, e, this) }) }, triggerHandler: function(t, e) {
            var i = this[0];
            if (i) return pt.event.trigger(t, e, i, !0) } });
    var Zt = / jQuery\d+="(?:null|\d+)"/g,
        te = new RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
        ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ie = /<script|<style|<link/i,
        ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        re = /^true\/(.*)/,
        se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        oe = p(nt),
        ae = oe.appendChild(nt.createElement("div"));
    pt.extend({ htmlPrefilter: function(t) {
            return t.replace(ee, "<$1></$2>") }, clone: function(t, e, i) {
            var n, r, s, o, a, l = pt.contains(t.ownerDocument, t);
            if (ct.html5Clone || pt.isXMLDoc(t) || !te.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (ae.innerHTML = t.outerHTML, ae.removeChild(s = ae.firstChild)), !(ct.noCloneEvent && ct.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || pt.isXMLDoc(t)))
                for (n = f(s), a = f(t), o = 0; null != (r = a[o]); ++o) n[o] && x(r, n[o]);
            if (e)
                if (i)
                    for (a = a || f(t), n = n || f(s), o = 0; null != (r = a[o]); o++) D(r, n[o]);
                else D(t, s);
            return n = f(s, "script"), n.length > 0 && m(n, !l && f(t, "script")), n = a = r = null, s }, cleanData: function(t, e) {
            for (var i, n, r, s, o = 0, a = pt.expando, l = pt.cache, u = ct.attributes, d = pt.event.special; null != (i = t[o]); o++)
                if ((e || jt(i)) && (r = i[a], s = r && l[r])) {
                    if (s.events)
                        for (n in s.events) d[n] ? pt.event.remove(i, n) : pt.removeEvent(i, n, s.handle);
                    l[r] && (delete l[r], u || "undefined" == typeof i.removeAttribute ? i[a] = void 0 : i.removeAttribute(a), it.push(r)) } } }), pt.fn.extend({ domManip: E, detach: function(t) {
            return M(this, t, !0) }, remove: function(t) {
            return M(this, t) }, text: function(t) {
            return Rt(this, function(t) {
                return void 0 === t ? pt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || nt).createTextNode(t)) }, null, t, arguments.length) }, append: function() {
            return E(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = T(this, t);
                    e.appendChild(t) } }) }, prepend: function() {
            return E(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = T(this, t);
                    e.insertBefore(t, e.firstChild) } }) }, before: function() {
            return E(this, arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this) }) }, after: function() {
            return E(this, arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this.nextSibling) }) }, empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && pt.cleanData(f(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && pt.nodeName(t, "select") && (t.options.length = 0) }
            return this }, clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return pt.clone(this, t, e) }) }, html: function(t) {
            return Rt(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Zt, "") : void 0;
                if ("string" == typeof t && !ie.test(t) && (ct.htmlSerialize || !te.test(t)) && (ct.leadingWhitespace || !Wt.test(t)) && !Bt[(qt.exec(t) || ["", ""])[1].toLowerCase()]) { t = pt.htmlPrefilter(t);
                    try {
                        for (; i < n; i++) e = this[i] || {}, 1 === e.nodeType && (pt.cleanData(f(e, !1)), e.innerHTML = t);
                        e = 0 } catch (t) {} }
                e && this.empty().append(t) }, null, t, arguments.length) }, replaceWith: function() {
            var t = [];
            return E(this, arguments, function(e) {
                var i = this.parentNode;
                pt.inArray(this, t) < 0 && (pt.cleanData(f(this)), i && i.replaceChild(e, this)) }, t) } }), pt.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(t, e) {
        pt.fn[t] = function(t) {
            for (var i, n = 0, r = [], s = pt(t), o = s.length - 1; n <= o; n++) i = n === o ? this : this.clone(!0),
                pt(s[n])[e](i), ot.apply(r, i.get());
            return this.pushStack(r)
        }
    });
    var le, ue = { HTML: "block", BODY: "block" },
        de = /^margin/,
        ce = new RegExp("^(" + It + ")(?!px)[a-z%]+$", "i"),
        he = function(t, e, i, n) {
            var r, s, o = {};
            for (s in e) o[s] = t.style[s], t.style[s] = e[s];
            r = i.apply(t, n || []);
            for (s in e) t.style[s] = o[s];
            return r },
        pe = nt.documentElement;
    ! function() {
        function e() {
            var e, d, c = nt.documentElement;
            c.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i = r = a = !1, n = o = !0, t.getComputedStyle && (d = t.getComputedStyle(u), i = "1%" !== (d || {}).top, a = "2px" === (d || {}).marginLeft, r = "4px" === (d || { width: "4px" }).width, u.style.marginRight = "50%", n = "4px" === (d || { marginRight: "4px" }).marginRight, e = u.appendChild(nt.createElement("div")), e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", o = !parseFloat((t.getComputedStyle(e) || {}).marginRight), u.removeChild(e)), u.style.display = "none", s = 0 === u.getClientRects().length, s && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", e = u.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === e[0].offsetHeight, s && (e[0].style.display = "", e[1].style.display = "none", s = 0 === e[0].offsetHeight)), c.removeChild(l) }
        var i, n, r, s, o, a, l = nt.createElement("div"),
            u = nt.createElement("div");
        u.style && (u.style.cssText = "float:left;opacity:.5", ct.opacity = "0.5" === u.style.opacity, ct.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", ct.clearCloneStyle = "content-box" === u.style.backgroundClip, l = nt.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), ct.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, pt.extend(ct, { reliableHiddenOffsets: function() {
                return null == i && e(), s }, boxSizingReliable: function() {
                return null == i && e(), r }, pixelMarginRight: function() {
                return null == i && e(), n }, pixelPosition: function() {
                return null == i && e(), i }, reliableMarginRight: function() {
                return null == i && e(), o }, reliableMarginLeft: function() {
                return null == i && e(), a } })) }();
    var fe, me, ge = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (fe = function(e) {
        var i = e.ownerDocument.defaultView;
        return i && i.opener || (i = t), i.getComputedStyle(e) }, me = function(t, e, i) {
        var n, r, s, o, a = t.style;
        return i = i || fe(t), o = i ? i.getPropertyValue(e) || i[e] : void 0, "" !== o && void 0 !== o || pt.contains(t.ownerDocument, t) || (o = pt.style(t, e)), i && !ct.pixelMarginRight() && ce.test(o) && de.test(e) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s), void 0 === o ? o : o + "" }) : pe.currentStyle && (fe = function(t) {
        return t.currentStyle }, me = function(t, e, i) {
        var n, r, s, o, a = t.style;
        return i = i || fe(t), o = i ? i[e] : void 0, null == o && a && a[e] && (o = a[e]), ce.test(o) && !ge.test(e) && (n = a.left, r = t.runtimeStyle, s = r && r.left, s && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : o, o = a.pixelLeft + "px", a.left = n, s && (r.left = s)), void 0 === o ? o : o + "" || "auto" });
    var ye = /alpha\([^)]*\)/i,
        ve = /opacity\s*=\s*([^)]*)/i,
        be = /^(none|table(?!-c[ea]).+)/,
        we = new RegExp("^(" + It + ")(.*)$", "i"),
        ke = { position: "absolute", visibility: "hidden", display: "block" },
        Te = { letterSpacing: "0", fontWeight: "400" },
        Se = ["Webkit", "O", "Moz", "ms"],
        Ce = nt.createElement("div").style;
    pt.extend({ cssHooks: { opacity: { get: function(t, e) {
                    if (e) {
                        var i = me(t, "opacity");
                        return "" === i ? "1" : i } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": ct.cssFloat ? "cssFloat" : "styleFloat" }, style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = pt.camelCase(e),
                    l = t.style;
                if (e = pt.cssProps[a] || (pt.cssProps[a] = j(a) || a), o = pt.cssHooks[e] || pt.cssHooks[a], void 0 === i) return o && "get" in o && void 0 !== (r = o.get(t, !1, n)) ? r : l[e];
                if (s = typeof i, "string" === s && (r = $t.exec(i)) && r[1] && (i = h(t, e, r), s = "number"), null != i && i === i && ("number" === s && (i += r && r[3] || (pt.cssNumber[a] ? "" : "px")), ct.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(o && "set" in o && void 0 === (i = o.set(t, i, n))))) try { l[e] = i } catch (t) {} } }, css: function(t, e, i, n) {
            var r, s, o, a = pt.camelCase(e);
            return e = pt.cssProps[a] || (pt.cssProps[a] = j(a) || a), o = pt.cssHooks[e] || pt.cssHooks[a], o && "get" in o && (s = o.get(t, !0, i)), void 0 === s && (s = me(t, e, n)), "normal" === s && e in Te && (s = Te[e]), "" === i || i ? (r = parseFloat(s), i === !0 || isFinite(r) ? r || 0 : s) : s } }), pt.each(["height", "width"], function(t, e) { pt.cssHooks[e] = { get: function(t, i, n) {
                if (i) return be.test(pt.css(t, "display")) && 0 === t.offsetWidth ? he(t, ke, function() {
                    return $(t, e, n) }) : $(t, e, n) }, set: function(t, i, n) {
                var r = n && fe(t);
                return O(t, i, n ? I(t, e, n, ct.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, r), r) : 0) } } }), ct.opacity || (pt.cssHooks.opacity = { get: function(t, e) {
            return ve.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : "" }, set: function(t, e) {
            var i = t.style,
                n = t.currentStyle,
                r = pt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                s = n && n.filter || i.filter || "";
            i.zoom = 1, (e >= 1 || "" === e) && "" === pt.trim(s.replace(ye, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = ye.test(s) ? s.replace(ye, r) : s + " " + r) } }), pt.cssHooks.marginRight = F(ct.reliableMarginRight, function(t, e) {
        if (e) return he(t, { display: "inline-block" }, me, [t, "marginRight"]) }), pt.cssHooks.marginLeft = F(ct.reliableMarginLeft, function(t, e) {
        if (e) return (parseFloat(me(t, "marginLeft")) || (pt.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - he(t, { marginLeft: 0 }, function() {
            return t.getBoundingClientRect().left }) : 0)) + "px" }), pt.each({ margin: "", padding: "", border: "Width" }, function(t, e) { pt.cssHooks[t + e] = { expand: function(i) {
                for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) r[t + Pt[n] + e] = s[n] || s[n - 2] || s[0];
                return r } }, de.test(t) || (pt.cssHooks[t + e].set = O) }), pt.fn.extend({ css: function(t, e) {
            return Rt(this, function(t, e, i) {
                var n, r, s = {},
                    o = 0;
                if (pt.isArray(e)) {
                    for (n = fe(t), r = e.length; o < r; o++) s[e[o]] = pt.css(t, e[o], !1, n);
                    return s }
                return void 0 !== i ? pt.style(t, e, i) : pt.css(t, e) }, t, e, arguments.length > 1) }, show: function() {
            return N(this, !0) }, hide: function() {
            return N(this) }, toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() { Lt(this) ? pt(this).show() : pt(this).hide() }) } }), pt.Tween = P, P.prototype = { constructor: P, init: function(t, e, i, n, r, s) { this.elem = t, this.prop = i, this.easing = r || pt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (pt.cssNumber[i] ? "" : "px") }, cur: function() {
            var t = P.propHooks[this.prop];
            return t && t.get ? t.get(this) : P.propHooks._default.get(this) }, run: function(t) {
            var e, i = P.propHooks[this.prop];
            return this.options.duration ? this.pos = e = pt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : P.propHooks._default.set(this), this } }, P.prototype.init.prototype = P.prototype, P.propHooks = { _default: { get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = pt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) }, set: function(t) { pt.fx.step[t.prop] ? pt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[pt.cssProps[t.prop]] && !pt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : pt.style(t.elem, t.prop, t.now + t.unit) } } }, P.propHooks.scrollTop = P.propHooks.scrollLeft = { set: function(t) { t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now) } }, pt.easing = { linear: function(t) {
            return t }, swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2 }, _default: "swing" }, pt.fx = P.prototype.init, pt.fx.step = {};
    var De, xe, Ee = /^(?:toggle|show|hide)$/,
        Me = /queueHooks$/;
    pt.Animation = pt.extend(W, { tweeners: { "*": [function(t, e) {
                    var i = this.createTween(t, e);
                    return h(i.elem, t, $t.exec(e), i), i }] }, tweener: function(t, e) { pt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(_t);
                for (var i, n = 0, r = t.length; n < r; n++) i = t[n], W.tweeners[i] = W.tweeners[i] || [], W.tweeners[i].unshift(e) }, prefilters: [q], prefilter: function(t, e) { e ? W.prefilters.unshift(t) : W.prefilters.push(t) } }), pt.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? pt.extend({}, t) : { complete: i || !i && e || pt.isFunction(t) && t, duration: t, easing: i && e || e && !pt.isFunction(e) && e };
            return n.duration = pt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in pt.fx.speeds ? pt.fx.speeds[n.duration] : pt.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() { pt.isFunction(n.old) && n.old.call(this), n.queue && pt.dequeue(this, n.queue) }, n }, pt.fn.extend({ fadeTo: function(t, e, i, n) {
                return this.filter(Lt).css("opacity", 0).show().end().animate({ opacity: e }, t, i, n) }, animate: function(t, e, i, n) {
                var r = pt.isEmptyObject(t),
                    s = pt.speed(e, i, n),
                    o = function() {
                        var e = W(this, pt.extend({}, t), s);
                        (r || pt._data(this, "finish")) && e.stop(!0) };
                return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o) }, stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i) };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        s = pt.timers,
                        o = pt._data(this);
                    if (r) o[r] && o[r].stop && n(o[r]);
                    else
                        for (r in o) o[r] && o[r].stop && Me.test(r) && n(o[r]);
                    for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(i), e = !1, s.splice(r, 1));!e && i || pt.dequeue(this, t) }) }, finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, i = pt._data(this),
                        n = i[t + "queue"],
                        r = i[t + "queueHooks"],
                        s = pt.timers,
                        o = n ? n.length : 0;
                    for (i.finish = !0, pt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                    for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish }) } }), pt.each(["toggle", "show", "hide"], function(t, e) {
            var i = pt.fn[e];
            pt.fn[e] = function(t, n, r) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(R(e, !0), t, n, r) } }), pt.each({ slideDown: R("show"), slideUp: R("hide"), slideToggle: R("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(t, e) { pt.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n) } }), pt.timers = [], pt.fx.tick = function() {
            var t, e = pt.timers,
                i = 0;
            for (De = pt.now(); i < e.length; i++) t = e[i], t() || e[i] !== t || e.splice(i--, 1);
            e.length || pt.fx.stop(), De = void 0 }, pt.fx.timer = function(t) { pt.timers.push(t), t() ? pt.fx.start() : pt.timers.pop() }, pt.fx.interval = 13, pt.fx.start = function() { xe || (xe = t.setInterval(pt.fx.tick, pt.fx.interval)) }, pt.fx.stop = function() { t.clearInterval(xe), xe = null }, pt.fx.speeds = { slow: 600, fast: 200, _default: 400 }, pt.fn.delay = function(e, i) {
            return e = pt.fx ? pt.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function(i, n) {
                var r = t.setTimeout(i, e);
                n.stop = function() { t.clearTimeout(r) } }) },
        function() {
            var t, e = nt.createElement("input"),
                i = nt.createElement("div"),
                n = nt.createElement("select"),
                r = n.appendChild(nt.createElement("option"));
            i = nt.createElement("div"), i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = i.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), i.appendChild(e), t = i.getElementsByTagName("a")[0], t.style.cssText = "top:1px", ct.getSetAttribute = "t" !== i.className, ct.style = /top/.test(t.getAttribute("style")), ct.hrefNormalized = "/a" === t.getAttribute("href"), ct.checkOn = !!e.value, ct.optSelected = r.selected, ct.enctype = !!nt.createElement("form").enctype, n.disabled = !0, ct.optDisabled = !r.disabled, e = nt.createElement("input"), e.setAttribute("value", ""), ct.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ct.radioValue = "t" === e.value }();
    var _e = /\r/g,
        Ae = /[\x20\t\r\n\f]+/g;
    pt.fn.extend({ val: function(t) {
            var e, i, n, r = this[0]; {
                if (arguments.length) return n = pt.isFunction(t), this.each(function(i) {
                    var r;
                    1 === this.nodeType && (r = n ? t.call(this, i, pt(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : pt.isArray(r) && (r = pt.map(r, function(t) {
                        return null == t ? "" : t + "" })), e = pt.valHooks[this.type] || pt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r)) });
                if (r) return e = pt.valHooks[r.type] || pt.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(_e, "") : null == i ? "" : i) } } }), pt.extend({ valHooks: { option: { get: function(t) {
                    var e = pt.find.attr(t, "value");
                    return null != e ? e : pt.trim(pt.text(t)).replace(Ae, " ") } }, select: { get: function(t) {
                    for (var e, i, n = t.options, r = t.selectedIndex, s = "select-one" === t.type || r < 0, o = s ? null : [], a = s ? r + 1 : n.length, l = r < 0 ? a : s ? r : 0; l < a; l++)
                        if (i = n[l], (i.selected || l === r) && (ct.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !pt.nodeName(i.parentNode, "optgroup"))) {
                            if (e = pt(i).val(), s) return e;
                            o.push(e) }
                    return o }, set: function(t, e) {
                    for (var i, n, r = t.options, s = pt.makeArray(e), o = r.length; o--;)
                        if (n = r[o], pt.inArray(pt.valHooks.option.get(n), s) > -1) try { n.selected = i = !0 } catch (t) { n.scrollHeight } else n.selected = !1;
                    return i || (t.selectedIndex = -1), r } } } }), pt.each(["radio", "checkbox"], function() { pt.valHooks[this] = { set: function(t, e) {
                if (pt.isArray(e)) return t.checked = pt.inArray(pt(t).val(), e) > -1 } }, ct.checkOn || (pt.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value }) });
    var Fe, je, Ne = pt.expr.attrHandle,
        Oe = /^(?:checked|selected)$/i,
        Ie = ct.getSetAttribute,
        $e = ct.input;
    pt.fn.extend({ attr: function(t, e) {
            return Rt(this, pt.attr, t, e, arguments.length > 1) }, removeAttr: function(t) {
            return this.each(function() { pt.removeAttr(this, t) }) } }), pt.extend({ attr: function(t, e, i) {
            var n, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return "undefined" == typeof t.getAttribute ? pt.prop(t, e, i) : (1 === s && pt.isXMLDoc(t) || (e = e.toLowerCase(), r = pt.attrHooks[e] || (pt.expr.match.bool.test(e) ? je : Fe)), void 0 !== i ? null === i ? void pt.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : (n = pt.find.attr(t, e), null == n ? void 0 : n)) }, attrHooks: { type: { set: function(t, e) {
                    if (!ct.radioValue && "radio" === e && pt.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e } } } }, removeAttr: function(t, e) {
            var i, n, r = 0,
                s = e && e.match(_t);
            if (s && 1 === t.nodeType)
                for (; i = s[r++];) n = pt.propFix[i] || i, pt.expr.match.bool.test(i) ? $e && Ie || !Oe.test(i) ? t[n] = !1 : t[pt.camelCase("default-" + i)] = t[n] = !1 : pt.attr(t, i, ""), t.removeAttribute(Ie ? i : n) } }), je = { set: function(t, e, i) {
            return e === !1 ? pt.removeAttr(t, i) : $e && Ie || !Oe.test(i) ? t.setAttribute(!Ie && pt.propFix[i] || i, i) : t[pt.camelCase("default-" + i)] = t[i] = !0, i } }, pt.each(pt.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = Ne[e] || pt.find.attr;
        $e && Ie || !Oe.test(e) ? Ne[e] = function(t, e, n) {
            var r, s;
            return n || (s = Ne[e], Ne[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, Ne[e] = s), r } : Ne[e] = function(t, e, i) {
            if (!i) return t[pt.camelCase("default-" + e)] ? e.toLowerCase() : null } }), $e && Ie || (pt.attrHooks.value = { set: function(t, e, i) {
            return pt.nodeName(t, "input") ? void(t.defaultValue = e) : Fe && Fe.set(t, e, i) } }), Ie || (Fe = { set: function(t, e, i) {
            var n = t.getAttributeNode(i);
            if (n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i)) return e } }, Ne.id = Ne.name = Ne.coords = function(t, e, i) {
        var n;
        if (!i) return (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null }, pt.valHooks.button = { get: function(t, e) {
            var i = t.getAttributeNode(e);
            if (i && i.specified) return i.value }, set: Fe.set }, pt.attrHooks.contenteditable = { set: function(t, e, i) { Fe.set(t, "" !== e && e, i) } }, pt.each(["width", "height"], function(t, e) { pt.attrHooks[e] = { set: function(t, i) {
                if ("" === i) return t.setAttribute(e, "auto"), i } } })), ct.style || (pt.attrHooks.style = { get: function(t) {
            return t.style.cssText || void 0 }, set: function(t, e) {
            return t.style.cssText = e + "" } });
    var Pe = /^(?:input|select|textarea|button|object)$/i,
        Le = /^(?:a|area)$/i;
    pt.fn.extend({ prop: function(t, e) {
            return Rt(this, pt.prop, t, e, arguments.length > 1) }, removeProp: function(t) {
            return t = pt.propFix[t] || t, this.each(function() {
                try { this[t] = void 0, delete this[t] } catch (t) {} }) } }), pt.extend({ prop: function(t, e, i) {
            var n, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && pt.isXMLDoc(t) || (e = pt.propFix[e] || e, r = pt.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e] }, propHooks: { tabIndex: { get: function(t) {
                    var e = pt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Pe.test(t.nodeName) || Le.test(t.nodeName) && t.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), ct.hrefNormalized || pt.each(["href", "src"], function(t, e) { pt.propHooks[e] = { get: function(t) {
                return t.getAttribute(e, 4) } } }), ct.optSelected || (pt.propHooks.selected = { get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null }, set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex) } }), pt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { pt.propFix[this.toLowerCase()] = this }), ct.enctype || (pt.propFix.enctype = "encoding");
    var Re = /[\t\r\n\f]/g;
    pt.fn.extend({ addClass: function(t) {
            var e, i, n, r, s, o, a, l = 0;
            if (pt.isFunction(t)) return this.each(function(e) { pt(this).addClass(t.call(this, e, V(this))) });
            if ("string" == typeof t && t)
                for (e = t.match(_t) || []; i = this[l++];)
                    if (r = V(i), n = 1 === i.nodeType && (" " + r + " ").replace(Re, " ")) {
                        for (o = 0; s = e[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        a = pt.trim(n), r !== a && pt.attr(i, "class", a) }
            return this }, removeClass: function(t) {
            var e, i, n, r, s, o, a, l = 0;
            if (pt.isFunction(t)) return this.each(function(e) { pt(this).removeClass(t.call(this, e, V(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(_t) || []; i = this[l++];)
                    if (r = V(i), n = 1 === i.nodeType && (" " + r + " ").replace(Re, " ")) {
                        for (o = 0; s = e[o++];)
                            for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
                        a = pt.trim(n), r !== a && pt.attr(i, "class", a) }
            return this }, toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : pt.isFunction(t) ? this.each(function(i) { pt(this).toggleClass(t.call(this, i, V(this), e), e) }) : this.each(function() {
                var e, n, r, s;
                if ("string" === i)
                    for (n = 0, r = pt(this), s = t.match(_t) || []; e = s[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else void 0 !== t && "boolean" !== i || (e = V(this), e && pt._data(this, "__className__", e), pt.attr(this, "class", e || t === !1 ? "" : pt._data(this, "__className__") || "")) }) }, hasClass: function(t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + V(i) + " ").replace(Re, " ").indexOf(e) > -1) return !0;
            return !1 } }), pt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) { pt.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e) } }), pt.fn.extend({ hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t) } });
    var He = t.location,
        qe = pt.now(),
        Ue = /\?/,
        We = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pt.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var i, n = null,
            r = pt.trim(e + "");
        return r && !pt.trim(r.replace(We, function(t, e, r, s) {
            return i && e && (n = 0), 0 === n ? t : (i = r || e, n += !s - !r, "") })) ? Function("return " + r)() : pt.error("Invalid JSON: " + e) }, pt.parseXML = function(e) {
        var i, n;
        if (!e || "string" != typeof e) return null;
        try { t.DOMParser ? (n = new t.DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new t.ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e)) } catch (t) { i = void 0 }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || pt.error("Invalid XML: " + e), i };
    var Ve = /#.*$/,
        Be = /([?&])_=[^&]*/,
        ze = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Je = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Qe = /^(?:GET|HEAD)$/,
        Ye = /^\/\//,
        Ge = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ke = {},
        Xe = {},
        Ze = "*/".concat("*"),
        ti = He.href,
        ei = Ge.exec(ti.toLowerCase()) || [];
    pt.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ti, type: "GET", isLocal: Je.test(ei[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Ze, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": pt.parseJSON, "text xml": pt.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(t, e) {
            return e ? J(J(t, pt.ajaxSettings), e) : J(pt.ajaxSettings, t) }, ajaxPrefilter: B(Ke), ajaxTransport: B(Xe), ajax: function(e, i) {
            function n(e, i, n, r) {
                var s, c, v, b, k, S = i;
                2 !== w && (w = 2, l && t.clearTimeout(l), d = void 0, a = r || "", T.readyState = e > 0 ? 4 : 0, s = e >= 200 && e < 300 || 304 === e, n && (b = Q(h, T, n)), b = Y(h, b, T, s), s ? (h.ifModified && (k = T.getResponseHeader("Last-Modified"), k && (pt.lastModified[o] = k), k = T.getResponseHeader("etag"), k && (pt.etag[o] = k)), 204 === e || "HEAD" === h.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = b.state, c = b.data, v = b.error, s = !v)) : (v = S, !e && S || (S = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (i || S) + "", s ? m.resolveWith(p, [c, S, T]) : m.rejectWith(p, [T, S, v]), T.statusCode(y), y = void 0, u && f.trigger(s ? "ajaxSuccess" : "ajaxError", [T, h, s ? c : v]), g.fireWith(p, [T, S]), u && (f.trigger("ajaxComplete", [T, h]), --pt.active || pt.event.trigger("ajaxStop"))) } "object" == typeof e && (i = e, e = void 0), i = i || {};
            var r, s, o, a, l, u, d, c, h = pt.ajaxSetup({}, i),
                p = h.context || h,
                f = h.context && (p.nodeType || p.jquery) ? pt(p) : pt.event,
                m = pt.Deferred(),
                g = pt.Callbacks("once memory"),
                y = h.statusCode || {},
                v = {},
                b = {},
                w = 0,
                k = "canceled",
                T = { readyState: 0, getResponseHeader: function(t) {
                        var e;
                        if (2 === w) {
                            if (!c)
                                for (c = {}; e = ze.exec(a);) c[e[1].toLowerCase()] = e[2];
                            e = c[t.toLowerCase()] }
                        return null == e ? null : e }, getAllResponseHeaders: function() {
                        return 2 === w ? a : null }, setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return w || (t = b[i] = b[i] || t, v[t] = e), this }, overrideMimeType: function(t) {
                        return w || (h.mimeType = t), this }, statusCode: function(t) {
                        var e;
                        if (t)
                            if (w < 2)
                                for (e in t) y[e] = [y[e], t[e]];
                            else T.always(t[T.status]);
                        return this }, abort: function(t) {
                        var e = t || k;
                        return d && d.abort(e), n(0, e), this } };
            if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, h.url = ((e || h.url || ti) + "").replace(Ve, "").replace(Ye, ei[1] + "//"), h.type = i.method || i.type || h.method || h.type, h.dataTypes = pt.trim(h.dataType || "*").toLowerCase().match(_t) || [""], null == h.crossDomain && (r = Ge.exec(h.url.toLowerCase()), h.crossDomain = !(!r || r[1] === ei[1] && r[2] === ei[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (ei[3] || ("http:" === ei[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = pt.param(h.data, h.traditional)), z(Ke, h, i, T), 2 === w) return T;
            u = pt.event && h.global, u && 0 === pt.active++ && pt.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Qe.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (Ue.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Be.test(o) ? o.replace(Be, "$1_=" + qe++) : o + (Ue.test(o) ? "&" : "?") + "_=" + qe++)), h.ifModified && (pt.lastModified[o] && T.setRequestHeader("If-Modified-Since", pt.lastModified[o]), pt.etag[o] && T.setRequestHeader("If-None-Match", pt.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || i.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ze + "; q=0.01" : "") : h.accepts["*"]);
            for (s in h.headers) T.setRequestHeader(s, h.headers[s]);
            if (h.beforeSend && (h.beforeSend.call(p, T, h) === !1 || 2 === w)) return T.abort();
            k = "abort";
            for (s in { success: 1, error: 1, complete: 1 }) T[s](h[s]);
            if (d = z(Xe, h, i, T)) {
                if (T.readyState = 1, u && f.trigger("ajaxSend", [T, h]), 2 === w) return T;
                h.async && h.timeout > 0 && (l = t.setTimeout(function() { T.abort("timeout") }, h.timeout));
                try { w = 1, d.send(v, n) } catch (t) {
                    if (!(w < 2)) throw t;
                    n(-1, t) } } else n(-1, "No Transport");
            return T }, getJSON: function(t, e, i) {
            return pt.get(t, e, i, "json") }, getScript: function(t, e) {
            return pt.get(t, void 0, e, "script") } }), pt.each(["get", "post"], function(t, e) { pt[e] = function(t, i, n, r) {
            return pt.isFunction(i) && (r = r || n, n = i, i = void 0), pt.ajax(pt.extend({ url: t, type: e, dataType: r, data: i, success: n }, pt.isPlainObject(t) && t)) } }), pt._evalUrl = function(t) {
        return pt.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, pt.fn.extend({ wrapAll: function(t) {
            if (pt.isFunction(t)) return this.each(function(e) { pt(this).wrapAll(t.call(this, e)) });
            if (this[0]) {
                var e = pt(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t }).append(this) }
            return this }, wrapInner: function(t) {
            return pt.isFunction(t) ? this.each(function(e) { pt(this).wrapInner(t.call(this, e)) }) : this.each(function() {
                var e = pt(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t) }) }, wrap: function(t) {
            var e = pt.isFunction(t);
            return this.each(function(i) { pt(this).wrapAll(e ? t.call(this, i) : t) }) }, unwrap: function() {
            return this.parent().each(function() { pt.nodeName(this, "body") || pt(this).replaceWith(this.childNodes) }).end() } }), pt.expr.filters.hidden = function(t) {
        return ct.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : K(t) }, pt.expr.filters.visible = function(t) {
        return !pt.expr.filters.hidden(t) };
    var ii = /%20/g,
        ni = /\[\]$/,
        ri = /\r?\n/g,
        si = /^(?:submit|button|image|reset|file)$/i,
        oi = /^(?:input|select|textarea|keygen)/i;
    pt.param = function(t, e) {
        var i, n = [],
            r = function(t, e) { e = pt.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e) };
        if (void 0 === e && (e = pt.ajaxSettings && pt.ajaxSettings.traditional), pt.isArray(t) || t.jquery && !pt.isPlainObject(t)) pt.each(t, function() { r(this.name, this.value) });
        else
            for (i in t) X(i, t[i], e, r);
        return n.join("&").replace(ii, "+") }, pt.fn.extend({ serialize: function() {
            return pt.param(this.serializeArray()) }, serializeArray: function() {
            return this.map(function() {
                var t = pt.prop(this, "elements");
                return t ? pt.makeArray(t) : this }).filter(function() {
                var t = this.type;
                return this.name && !pt(this).is(":disabled") && oi.test(this.nodeName) && !si.test(t) && (this.checked || !Ht.test(t)) }).map(function(t, e) {
                var i = pt(this).val();
                return null == i ? null : pt.isArray(i) ? pt.map(i, function(t) {
                    return { name: e.name, value: t.replace(ri, "\r\n") } }) : { name: e.name, value: i.replace(ri, "\r\n") } }).get() } }), pt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return this.isLocal ? tt() : nt.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || tt() } : Z;
    var ai = 0,
        li = {},
        ui = pt.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in li) li[t](void 0, !0) }), ct.cors = !!ui && "withCredentials" in ui, ui = ct.ajax = !!ui, ui && pt.ajaxTransport(function(e) {
        if (!e.crossDomain || ct.cors) {
            var i;
            return { send: function(n, r) {
                    var s, o = e.xhr(),
                        a = ++ai;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) o[s] = e.xhrFields[s];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (s in n) void 0 !== n[s] && o.setRequestHeader(s, n[s] + "");
                    o.send(e.hasContent && e.data || null), i = function(t, n) {
                        var s, l, u;
                        if (i && (n || 4 === o.readyState))
                            if (delete li[a], i = void 0, o.onreadystatechange = pt.noop, n) 4 !== o.readyState && o.abort();
                            else { u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try { l = o.statusText } catch (t) { l = "" }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404 }
                        u && r(s, l, u, o.getAllResponseHeaders()) }, e.async ? 4 === o.readyState ? t.setTimeout(i) : o.onreadystatechange = li[a] = i : i() }, abort: function() { i && i(void 0, !0) } } } }), pt.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(t) {
                return pt.globalEval(t), t } } }), pt.ajaxPrefilter("script", function(t) { void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1) }), pt.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i = nt.head || pt("head")[0] || nt.documentElement;
            return { send: function(n, r) { e = nt.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, i) {
                        (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || r(200, "success")) }, i.insertBefore(e, i.firstChild) }, abort: function() { e && e.onload(void 0, !0) } } } });
    var di = [],
        ci = /(=)\?(?=&|$)|\?\?/;
    pt.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
            var t = di.pop() || pt.expando + "_" + qe++;
            return this[t] = !0, t } }), pt.ajaxPrefilter("json jsonp", function(e, i, n) {
        var r, s, o, a = e.jsonp !== !1 && (ci.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ci.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = pt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ci, "$1" + r) : e.jsonp !== !1 && (e.url += (Ue.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || pt.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", s = t[r], t[r] = function() { o = arguments }, n.always(function() { void 0 === s ? pt(t).removeProp(r) : t[r] = s, e[r] && (e.jsonpCallback = i.jsonpCallback, di.push(r)), o && pt.isFunction(s) && s(o[0]), o = s = void 0 }), "script" }), pt.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null; "boolean" == typeof e && (i = e, e = !1), e = e || nt;
        var n = Tt.exec(t),
            r = !i && [];
        return n ? [e.createElement(n[1])] : (n = y([t], e, r), r && r.length && pt(r).remove(), pt.merge([], n.childNodes)) };
    var hi = pt.fn.load;
    pt.fn.load = function(t, e, i) {
        if ("string" != typeof t && hi) return hi.apply(this, arguments);
        var n, r, s, o = this,
            a = t.indexOf(" ");
        return a > -1 && (n = pt.trim(t.slice(a, t.length)), t = t.slice(0, a)), pt.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && pt.ajax({ url: t, type: r || "GET", dataType: "html", data: e }).done(function(t) { s = arguments, o.html(n ? pt("<div>").append(pt.parseHTML(t)).find(n) : t) }).always(i && function(t, e) { o.each(function() { i.apply(this, s || [t.responseText, e, t]) }) }), this }, pt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) { pt.fn[e] = function(t) {
            return this.on(e, t) } }), pt.expr.filters.animated = function(t) {
        return pt.grep(pt.timers, function(e) {
            return t === e.elem }).length }, pt.offset = { setOffset: function(t, e, i) {
            var n, r, s, o, a, l, u, d = pt.css(t, "position"),
                c = pt(t),
                h = {}; "static" === d && (t.style.position = "relative"), a = c.offset(), s = pt.css(t, "top"), l = pt.css(t, "left"), u = ("absolute" === d || "fixed" === d) && pt.inArray("auto", [s, l]) > -1, u ? (n = c.position(), o = n.top, r = n.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), pt.isFunction(e) && (e = e.call(t, i, pt.extend({}, a))), null != e.top && (h.top = e.top - a.top + o), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : c.css(h) } }, pt.fn.extend({ offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) { pt.offset.setOffset(this, t, e) });
            var e, i, n = { top: 0, left: 0 },
                r = this[0],
                s = r && r.ownerDocument;
            if (s) return e = s.documentElement, pt.contains(e, r) ? ("undefined" != typeof r.getBoundingClientRect && (n = r.getBoundingClientRect()), i = et(s), { top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0) }) : n }, position: function() {
            if (this[0]) {
                var t, e, i = { top: 0, left: 0 },
                    n = this[0];
                return "fixed" === pt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), pt.nodeName(t[0], "html") || (i = t.offset()), i.top += pt.css(t[0], "borderTopWidth", !0), i.left += pt.css(t[0], "borderLeftWidth", !0)), { top: e.top - i.top - pt.css(n, "marginTop", !0), left: e.left - i.left - pt.css(n, "marginLeft", !0) } } }, offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && !pt.nodeName(t, "html") && "static" === pt.css(t, "position");) t = t.offsetParent;
                return t || pe }) } }), pt.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, e) {
        var i = /Y/.test(e);
        pt.fn[t] = function(n) {
            return Rt(this, function(t, n, r) {
                var s = et(t);
                return void 0 === r ? s ? e in s ? s[e] : s.document.documentElement[n] : t[n] : void(s ? s.scrollTo(i ? pt(s).scrollLeft() : r, i ? r : pt(s).scrollTop()) : t[n] = r) }, t, n, arguments.length, null) } }), pt.each(["top", "left"], function(t, e) { pt.cssHooks[e] = F(ct.pixelPosition, function(t, i) {
            if (i) return i = me(t, e), ce.test(i) ? pt(t).position()[e] + "px" : i }) }), pt.each({ Height: "height", Width: "width" }, function(t, e) {
        pt.each({ padding: "inner" + t, content: e, "": "outer" + t }, function(i, n) {
            pt.fn[n] = function(n, r) {
                var s = arguments.length && (i || "boolean" != typeof n),
                    o = i || (n === !0 || r === !0 ? "margin" : "border");
                return Rt(this, function(e, i, n) {
                    var r;
                    return pt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? pt.css(e, i, o) : pt.style(e, i, n, o);
                }, e, s ? n : void 0, s, null)
            }
        })
    }), pt.fn.extend({ bind: function(t, e, i) {
            return this.on(t, null, e, i) }, unbind: function(t, e) {
            return this.off(t, null, e) }, delegate: function(t, e, i, n) {
            return this.on(e, t, i, n) }, undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i) } }), pt.fn.size = function() {
        return this.length }, pt.fn.andSelf = pt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return pt });
    var pi = t.jQuery,
        fi = t.$;
    return pt.noConflict = function(e) {
        return t.$ === pt && (t.$ = fi), e && t.jQuery === pt && (t.jQuery = pi), pt }, e || (t.jQuery = t.$ = pt), pt
}), + function(t) { "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.affix"),
                s = "object" == typeof e && e;
            r || n.data("bs.affix", r = new i(this, s)), "string" == typeof e && r[e]() }) }
    var i = function(e, n) { this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition() };
    i.VERSION = "3.2.0", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = { offset: 0, target: window }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t }, i.prototype.checkPositionWithEventLoop = function() { setTimeout(t.proxy(this.checkPosition, this), 1) }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = t(document).height(),
                n = this.$target.scrollTop(),
                r = this.$element.offset(),
                s = this.options.offset,
                o = s.top,
                a = s.bottom; "object" != typeof s && (a = o = s), "function" == typeof o && (o = s.top(this.$element)), "function" == typeof a && (a = s.bottom(this.$element));
            var l = !(null != this.unpin && n + this.unpin <= r.top) && (null != a && r.top + this.$element.height() >= e - a ? "bottom" : null != o && n <= o && "top");
            if (this.affixed !== l) { null != this.unpin && this.$element.css("top", "");
                var u = "affix" + (l ? "-" + l : ""),
                    d = t.Event(u + ".bs.affix");
                this.$element.trigger(d), d.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(u).trigger(t.Event(u.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({ top: e - this.$element.height() - a })) } } };
    var n = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = n, this }, t(window).on("load", function() { t('[data-spy="affix"]').each(function() {
            var i = t(this),
                n = i.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n) }) }) }(jQuery), + function(t) { "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.alert");
            r || i.data("bs.alert", r = new n(this)), "string" == typeof e && r[e].call(i) }) }
    var i = '[data-dismiss="alert"]',
        n = function(e) { t(e).on("click", i, this.close) };
    n.VERSION = "3.2.0", n.prototype.close = function(e) {
        function i() { s.detach().trigger("closed.bs.alert").remove() }
        var n = t(this),
            r = n.attr("data-target");
        r || (r = n.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(r);
        e && e.preventDefault(), s.length || (s = n.hasClass("alert") ? n : n.parent()), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(150) : i()) };
    var r = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
        return t.fn.alert = r, this }, t(document).on("click.bs.alert.data-api", i, n.prototype.close) }(jQuery), + function(t) { "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.button"),
                s = "object" == typeof e && e;
            r || n.data("bs.button", r = new i(this, s)), "toggle" == e ? r.toggle() : e && r.setState(e) }) }
    var i = function(e, n) { this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1 };
    i.VERSION = "3.2.0", i.DEFAULTS = { loadingText: "loading..." }, i.prototype.setState = function(e) {
        var i = "disabled",
            n = this.$element,
            r = n.is("input") ? "val" : "html",
            s = n.data();
        e += "Text", null == s.resetText && n.data("resetText", n[r]()), n[r](null == s[e] ? this.options[e] : s[e]), setTimeout(t.proxy(function() { "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i)) }, this), 0) }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input"); "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change") }
        t && this.$element.toggleClass("active") };
    var n = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = n, this }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var n = t(i.target);
        n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), i.preventDefault() }) }(jQuery), + function(t) { "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.carousel"),
                s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                o = "string" == typeof e ? e : s.slide;
            r || n.data("bs.carousel", r = new i(this, s)), "number" == typeof e ? r.to(e) : o ? r[o]() : s.interval && r.pause().cycle() }) }
    var i = function(e, i) { this.$element = t(e).on("keydown.bs.carousel", t.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this)) };
    i.VERSION = "3.2.0", i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0 }, i.prototype.keydown = function(t) {
        switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return }
        t.preventDefault() }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active) }, i.prototype.to = function(e) {
        var i = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() { i.to(e) }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", t(this.$items[e])) }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, i.prototype.next = function() {
        if (!this.sliding) return this.slide("next") }, i.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev") }, i.prototype.slide = function(e, i) {
        var n = this.$element.find(".item.active"),
            r = i || n[e](),
            s = this.interval,
            o = "next" == e ? "left" : "right",
            a = "next" == e ? "first" : "last",
            l = this;
        if (!r.length) {
            if (!this.options.wrap) return;
            r = this.$element.find(".item")[a]() }
        if (r.hasClass("active")) return this.sliding = !1;
        var u = r[0],
            d = t.Event("slide.bs.carousel", { relatedTarget: u, direction: o });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active");
                var c = t(this.$indicators.children()[this.getItemIndex(r)]);
                c && c.addClass("active") }
            var h = t.Event("slid.bs.carousel", { relatedTarget: u, direction: o });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, n.addClass(o), r.addClass(o), n.one("bsTransitionEnd", function() { r.removeClass([e, o].join(" ")).addClass("active"), n.removeClass(["active", o].join(" ")), l.sliding = !1, setTimeout(function() { l.$element.trigger(h) }, 0) }).emulateTransitionEnd(1e3 * n.css("transition-duration").slice(0, -1))) : (n.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(h)), s && this.cycle(), this } };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = n, this }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(i) {
        var n, r = t(this),
            s = t(r.attr("data-target") || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var o = t.extend({}, s.data(), r.data()),
                a = r.attr("data-slide-to");
            a && (o.interval = !1), e.call(s, o), a && s.data("bs.carousel").to(a), i.preventDefault() } }), t(window).on("load", function() { t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data()) }) }) }(jQuery), + function(t) { "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.collapse"),
                s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);!r && s.toggle && "show" == e && (e = !e), r || n.data("bs.collapse", r = new i(this, s)), "string" == typeof e && r[e]() }) }
    var i = function(e, n) { this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle() };
    i.VERSION = "3.2.0", i.DEFAULTS = { toggle: !0 }, i.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height" }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var i = t.Event("show.bs.collapse");
            if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                var n = this.$parent && this.$parent.find("> .panel > .in");
                if (n && n.length) {
                    var r = n.data("bs.collapse");
                    if (r && r.transitioning) return;
                    e.call(n, "hide"), r || n.data("bs.collapse", null) }
                var s = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[s](0), this.transitioning = 1;
                var o = function() { this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") };
                if (!t.support.transition) return o.call(this);
                var a = t.camelCase(["scroll", s].join("-"));
                this.$element.one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(350)[s](this.$element[0][a]) } } }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var n = function() { this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse") };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(350) : n.call(this) } } }, i.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() };
    var n = t.fn.collapse;
    t.fn.collapse = e, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = n, this }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var n, r = t(this),
            s = r.attr("data-target") || i.preventDefault() || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
            o = t(s),
            a = o.data("bs.collapse"),
            l = a ? "toggle" : r.data(),
            u = r.attr("data-parent"),
            d = u && t(u);
        a && a.transitioning || (d && d.find('[data-toggle="collapse"][data-parent="' + u + '"]').not(r).addClass("collapsed"), r[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), e.call(o, l) }) }(jQuery), + function(t) { "use strict";

    function e(e) { e && 3 === e.which || (t(r).remove(), t(s).each(function() {
            var n = i(t(this)),
                r = { relatedTarget: this };
            n.hasClass("open") && (n.trigger(e = t.Event("hide.bs.dropdown", r)), e.isDefaultPrevented() || n.removeClass("open").trigger("hidden.bs.dropdown", r)) })) }

    function i(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = i && t(i);
        return n && n.length ? n : e.parent() }

    function n(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new o(this)), "string" == typeof e && n[e].call(i) }) }
    var r = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        o = function(e) { t(e).on("click.bs.dropdown", this.toggle) };
    o.VERSION = "3.2.0", o.prototype.toggle = function(n) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var s = i(r),
                o = s.hasClass("open");
            if (e(), !o) { "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var a = { relatedTarget: this };
                if (s.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                r.trigger("focus"), s.toggleClass("open").trigger("shown.bs.dropdown", a) }
            return !1 } }, o.prototype.keydown = function(e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var n = t(this);
            if (e.preventDefault(), e.stopPropagation(), !n.is(".disabled, :disabled")) {
                var r = i(n),
                    o = r.hasClass("open");
                if (!o || o && 27 == e.keyCode) return 27 == e.which && r.find(s).trigger("focus"), n.trigger("click");
                var a = " li:not(.divider):visible a",
                    l = r.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                if (l.length) {
                    var u = l.index(l.filter(":focus"));
                    38 == e.keyCode && u > 0 && u--, 40 == e.keyCode && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus") } } } };
    var a = t.fn.dropdown;
    t.fn.dropdown = n, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) { t.stopPropagation() }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s + ', [role="menu"], [role="listbox"]', o.prototype.keydown) }(jQuery), + function(t) { "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.tab");
            r || n.data("bs.tab", r = new i(this)), "string" == typeof e && r[e]() }) }
    var i = function(e) { this.element = t(e) };
    i.VERSION = "3.2.0", i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target");
        if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var r = i.find(".active:last a")[0],
                s = t.Event("show.bs.tab", { relatedTarget: r });
            if (e.trigger(s), !s.isDefaultPrevented()) {
                var o = t(n);
                this.activate(e.closest("li"), i), this.activate(o, o.parent(), function() { e.trigger({ type: "shown.bs.tab", relatedTarget: r }) }) } } }, i.prototype.activate = function(e, i, n) {
        function r() { s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), o ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), n && n() }
        var s = i.find("> .active"),
            o = n && t.support.transition && s.hasClass("fade");
        o ? s.one("bsTransitionEnd", r).emulateTransitionEnd(150) : r(), s.removeClass("in") };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = n, this }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(i) { i.preventDefault(), e.call(t(this), "show") }) }(jQuery), + function(t) { "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
        for (var i in e)
            if (void 0 !== t.style[i]) return { end: e[i] };
        return !1 }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            n = this;
        t(this).one("bsTransitionEnd", function() { i = !0 });
        var r = function() { i || t(n).trigger(t.support.transition.end) };
        return setTimeout(r, e), this }, t(function() { t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = { bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments) } }) }) }(jQuery), + function(t) { "use strict";

    function e(i, n) {
        var r = t.proxy(this.process, this);
        this.$body = t("body"), this.$scrollElement = t(t(i).is("body") ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", r), this.refresh(), this.process() }

    function i(i) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.scrollspy"),
                s = "object" == typeof i && i;
            r || n.data("bs.scrollspy", r = new e(this, s)), "string" == typeof i && r[i]() }) }
    e.VERSION = "3.2.0", e.DEFAULTS = { offset: 10 }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, e.prototype.refresh = function() {
        var e = "offset",
            i = 0;
        t.isWindow(this.$scrollElement[0]) || (e = "position", i = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var n = this;
        this.$body.find(this.selector).map(function() {
            var n = t(this),
                r = n.data("target") || n.attr("href"),
                s = /^#./.test(r) && t(r);
            return s && s.length && s.is(":visible") && [
                [s[e]().top + i, r]
            ] || null }).sort(function(t, e) {
            return t[0] - e[0] }).each(function() { n.offsets.push(this[0]), n.targets.push(this[1]) }) }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(),
            r = this.offsets,
            s = this.targets,
            o = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return o != (t = s[s.length - 1]) && this.activate(t);
        if (o && e <= r[0]) return o != (t = s[0]) && this.activate(t);
        for (t = r.length; t--;) o != s[t] && e >= r[t] && (!r[t + 1] || e <= r[t + 1]) && this.activate(s[t]) }, e.prototype.activate = function(e) { this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy") };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = n, this }, t(window).on("load.bs.scrollspy.data-api", function() { t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data()) }) }) }(jQuery), + function(t) { "use strict";

    function e(e, n) {
        return this.each(function() {
            var r = t(this),
                s = r.data("bs.modal"),
                o = t.extend({}, i.DEFAULTS, r.data(), "object" == typeof e && e);
            s || r.data("bs.modal", s = new i(this, o)), "string" == typeof e ? s[e](n) : o.show && s.show(n) }) }
    var i = function(e, i) { this.options = i, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
    i.VERSION = "3.2.0", i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t) }, i.prototype.show = function(e) {
        var i = this,
            n = t.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
            var n = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), n && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
            var r = t.Event("shown.bs.modal", { relatedTarget: e });
            n ? i.$element.find(".modal-dialog").one("bsTransitionEnd", function() { i.$element.trigger("focus").trigger(r) }).emulateTransitionEnd(300) : i.$element.trigger("focus").trigger(r) })) }, i.prototype.hide = function(e) { e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal()) }, i.prototype.enforceFocus = function() { t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) { this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus") }, this)) }, i.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) { 27 == t.which && this.hide() }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal") }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() { t.$element.trigger("hidden.bs.modal") }) }, i.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, i.prototype.backdrop = function(e) {
        var i = this,
            n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && n;
            if (this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) { t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this)) }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in");
            var s = function() { i.removeBackdrop(), e && e() };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(150) : s() } else e && e() }, i.prototype.checkScrollbar = function() { document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()) }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth) }, i.prototype.resetScrollbar = function() { this.$body.css("padding-right", "") }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e };
    var n = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = n, this }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var n = t(this),
            r = n.attr("href"),
            s = t(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            o = s.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(r) && r }, s.data(), n.data());
        n.is("a") && i.preventDefault(), s.one("show.bs.modal", function(t) { t.isDefaultPrevented() || s.one("hidden.bs.modal", function() { n.is(":visible") && n.trigger("focus") }) }), e.call(s, o, this) }) }(jQuery), + function(t) { "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.tooltip"),
                s = "object" == typeof e && e;
            (r || "destroy" != e) && (r || n.data("bs.tooltip", r = new i(this, s)), "string" == typeof e && r[e]()) }) }
    var i = function(t, e) { this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e) };
    i.VERSION = "3.2.0", i.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, i.prototype.init = function(e, i, n) { this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var r = this.options.trigger.split(" "), s = r.length; s--;) {
            var o = r[s];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != o) {
                var a = "hover" == o ? "mouseenter" : "focusin",
                    l = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this)) } }
        this.options.selector ? this._options = t.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, i.prototype.getDefaults = function() {
        return i.DEFAULTS }, i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e }, i.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, n) { i[t] != n && (e[t] = n) }), e }, i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() { "in" == i.hoverState && i.show() }, i.options.delay.show)) : i.show() }, i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() { "out" == i.hoverState && i.hide() }, i.options.delay.hide)) : i.hide() }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) { this.$element.trigger(e);
            var i = t.contains(document.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var n = this,
                r = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
            var o = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                l = a.test(o);
            l && (o = o.replace(a, "") || "top"), r.detach().css({ top: 0, left: 0, display: "block" }).addClass(o).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            var u = this.getPosition(),
                d = r[0].offsetWidth,
                c = r[0].offsetHeight;
            if (l) {
                var h = o,
                    p = this.$element.parent(),
                    f = this.getPosition(p);
                o = "bottom" == o && u.top + u.height + c - f.scroll > f.height ? "top" : "top" == o && u.top - f.scroll - c < 0 ? "bottom" : "right" == o && u.right + d > f.width ? "left" : "left" == o && u.left - d < f.left ? "right" : o, r.removeClass(h).addClass(o) }
            var m = this.getCalculatedOffset(o, u, d, c);
            this.applyPlacement(m, o);
            var g = function() { n.$element.trigger("shown.bs." + n.type), n.hoverState = null };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(150) : g() } }, i.prototype.applyPlacement = function(e, i) {
        var n = this.tip(),
            r = n[0].offsetWidth,
            s = n[0].offsetHeight,
            o = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(a) && (a = 0), e.top = e.top + o, e.left = e.left + a, t.offset.setOffset(n[0], t.extend({ using: function(t) { n.css({ top: Math.round(t.top), left: Math.round(t.left) }) } }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth,
            u = n[0].offsetHeight; "top" == i && u != s && (e.top = e.top + s - u);
        var d = this.getViewportAdjustedDelta(i, e, l, u);
        d.left ? e.left += d.left : e.top += d.top;
        var c = d.left ? 2 * d.left - r + l : 2 * d.top - s + u,
            h = d.left ? "left" : "top",
            p = d.left ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(c, n[0][p], h) }, i.prototype.replaceArrow = function(t, e, i) { this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "") }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right") }, i.prototype.hide = function() {
        function e() { "in" != i.hoverState && n.detach(), i.$element.trigger("hidden.bs." + i.type) }
        var i = this,
            n = this.tip(),
            r = t.Event("hide.bs." + this.type);
        if (this.$element.removeAttr("aria-describedby"), this.$element.trigger(r), !r.isDefaultPrevented()) return n.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), this.hoverState = null, this }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "") }, i.prototype.hasContent = function() {
        return this.getTitle() }, i.prototype.getPosition = function(e) { e = e || this.$element;
        var i = e[0],
            n = "BODY" == i.tagName;
        return t.extend({}, "function" == typeof i.getBoundingClientRect ? i.getBoundingClientRect() : null, { scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(), width: n ? t(window).width() : e.outerWidth(), height: n ? t(window).height() : e.outerHeight() }, n ? { top: 0, left: 0 } : e.offset()) }, i.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 } : "top" == t ? { top: e.top - n, left: e.left + e.width / 2 - i / 2 } : "left" == t ? { top: e.top + e.height / 2 - n / 2, left: e.left - i } : { top: e.top + e.height / 2 - n / 2, left: e.left + e.width } }, i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var r = { top: 0, left: 0 };
        if (!this.$viewport) return r;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            o = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - o.scroll,
                l = e.top + s - o.scroll + n;
            a < o.top ? r.top = o.top - a : l > o.top + o.height && (r.top = o.top + o.height - l) } else {
            var u = e.left - s,
                d = e.left + s + i;
            u < o.left ? r.left = o.left - u : d > o.width && (r.left = o.left + o.width - d) }
        return r }, i.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title) }, i.prototype.getUID = function(t) { do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t }, i.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template) }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, i.prototype.validate = function() { this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null) }, i.prototype.enable = function() { this.enabled = !0 }, i.prototype.disable = function() { this.enabled = !1 }, i.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i) }, i.prototype.destroy = function() { clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type) };
    var n = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = n, this } }(jQuery), + function(t) { "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.popover"),
                s = "object" == typeof e && e;
            (r || "destroy" != e) && (r || n.data("bs.popover", r = new i(this, s)), "string" == typeof e && r[e]()) }) }
    var i = function(t, e) { this.init("popover", t, e) };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.2.0", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
        return i.DEFAULTS }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide() }, i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent() }, i.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content) }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow") }, i.prototype.tip = function() {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip };
    var n = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
        return t.fn.popover = n, this } }(jQuery),
function() {
    var t, e;
    t = window.jQuery || ("function" == typeof require ? require("jquery") : void 0), e = t(document), t.turbo = { version: "2.1.0", isReady: !1, use: function(t, i) {
            return e.off(".turbo").on("" + t + ".turbo", this.onLoad).on("" + i + ".turbo", this.onFetch) }, addCallback: function(i) {
            return t.turbo.isReady && i(t), e.on("turbo:ready", function() {
                return i(t) }) }, onLoad: function() {
            return t.turbo.isReady = !0, e.trigger("turbo:ready") }, onFetch: function() {
            return t.turbo.isReady = !1 }, register: function() {
            return t(this.onLoad), t.fn.ready = this.addCallback } }, t.turbo.register(), t.turbo.use("page:load", "page:fetch") }.call(this),
    function(t, e) {
        "use strict";
        t.rails !== e && t.error("jquery-ujs has already been loaded!");
        var i, n = t(document);
        t.rails = i = { linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]", buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)", inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]", formSubmitSelector: "form", formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])", disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled", enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled", requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])", fileInputSelector: "input[name][type=file]:not([disabled])", linkDisableSelector: "a[data-disable-with], a[data-disable]", buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]", csrfToken: function() {
                return t("meta[name=csrf-token]").attr("content") }, csrfParam: function() {
                return t("meta[name=csrf-param]").attr("content") }, CSRFProtection: function(t) {
                var e = i.csrfToken();
                e && t.setRequestHeader("X-CSRF-Token", e) }, refreshCSRFTokens: function() { t('form input[name="' + i.csrfParam() + '"]').val(i.csrfToken()) }, fire: function(e, i, n) {
                var r = t.Event(i);
                return e.trigger(r, n), r.result !== !1 }, confirm: function(t) {
                return confirm(t) }, ajax: function(e) {
                return t.ajax(e) }, href: function(t) {
                return t[0].href }, isRemote: function(t) {
                return t.data("remote") !== e && t.data("remote") !== !1 }, handleRemote: function(n) {
                var r, s, o, a, l, u;
                if (i.fire(n, "ajax:before")) {
                    if (a = n.data("with-credentials") || null, l = n.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, n.is("form")) { r = n.data("ujs:submit-button-formmethod") || n.attr("method"), s = n.data("ujs:submit-button-formaction") || n.attr("action"), o = t(n[0]).serializeArray();
                        var d = n.data("ujs:submit-button");
                        d && (o.push(d), n.data("ujs:submit-button", null)), n.data("ujs:submit-button-formmethod", null), n.data("ujs:submit-button-formaction", null) } else n.is(i.inputChangeSelector) ? (r = n.data("method"), s = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (r = n.data("method") || "get", s = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (r = n.data("method"), s = i.href(n), o = n.data("params") || null);
                    return u = { type: r || "GET", data: o, dataType: l, beforeSend: function(t, r) {
                            return r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), !!i.fire(n, "ajax:beforeSend", [t, r]) && void n.trigger("ajax:send", t) }, success: function(t, e, i) { n.trigger("ajax:success", [t, e, i]) }, complete: function(t, e) { n.trigger("ajax:complete", [t, e]) }, error: function(t, e, i) { n.trigger("ajax:error", [t, e, i]) }, crossDomain: i.isCrossDomain(s) }, a && (u.xhrFields = { withCredentials: a }), s && (u.url = s), i.ajax(u) }
                return !1 }, isCrossDomain: function(t) {
                var e = document.createElement("a");
                e.href = location.href;
                var i = document.createElement("a");
                try {
                    return i.href = t, i.href = i.href, !((!i.protocol || ":" === i.protocol) && !i.host || e.protocol + "//" + e.host == i.protocol + "//" + i.host) } catch (t) {
                    return !0 } }, handleMethod: function(n) {
                var r = i.href(n),
                    s = n.data("method"),
                    o = n.attr("target"),
                    a = i.csrfToken(),
                    l = i.csrfParam(),
                    u = t('<form method="post" action="' + r + '"></form>'),
                    d = '<input name="_method" value="' + s + '" type="hidden" />';
                l === e || a === e || i.isCrossDomain(r) || (d += '<input name="' + l + '" value="' + a + '" type="hidden" />'), o && u.attr("target", o), u.hide().append(d).appendTo("body"), u.submit() }, formElements: function(e, i) {
                return e.is("form") ? t(e[0].elements).filter(i) : e.find(i) }, disableFormElements: function(e) { i.formElements(e, i.disableSelector).each(function() { i.disableFormElement(t(this)) }) }, disableFormElement: function(t) {
                var i, n;
                i = t.is("button") ? "html" : "val", n = t.data("disable-with"), n !== e && (t.data("ujs:enable-with", t[i]()), t[i](n)), t.prop("disabled", !0), t.data("ujs:disabled", !0) }, enableFormElements: function(e) { i.formElements(e, i.enableSelector).each(function() { i.enableFormElement(t(this)) }) }, enableFormElement: function(t) {
                var i = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") !== e && (t[i](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.prop("disabled", !1), t.removeData("ujs:disabled") }, allowAction: function(t) {
                var e, n = t.data("confirm"),
                    r = !1;
                if (!n) return !0;
                if (i.fire(t, "confirm")) {
                    try { r = i.confirm(n) } catch (t) {
                        (console.error || console.log).call(console, t.stack || t) }
                    e = i.fire(t, "confirm:complete", [r]) }
                return r && e }, blankInputs: function(e, i, n) {
                var r, s, o, a, l = t(),
                    u = i || "input,textarea",
                    d = e.find(u),
                    c = {};
                return d.each(function() { r = t(this), r.is("input[type=radio]") ? (a = r.attr("name"), c[a] || (0 === e.find('input[type=radio]:checked[name="' + a + '"]').length && (o = e.find('input[type=radio][name="' + a + '"]'), l = l.add(o)), c[a] = a)) : (s = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val(), s === n && (l = l.add(r))) }), !!l.length && l }, nonBlankInputs: function(t, e) {
                return i.blankInputs(t, e, !0) }, stopEverything: function(e) {
                return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1 }, disableElement: function(t) {
                var n = t.data("disable-with");
                n !== e && (t.data("ujs:enable-with", t.html()), t.html(n)), t.bind("click.railsDisable", function(t) {
                    return i.stopEverything(t) }), t.data("ujs:disabled", !0) }, enableElement: function(t) { t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable"), t.removeData("ujs:disabled") } }, i.fire(n, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, n) { t.crossDomain || i.CSRFProtection(n) }), t(window).on("pageshow.rails", function() { t(t.rails.enableSelector).each(function() {
                var e = t(this);
                e.data("ujs:disabled") && t.rails.enableFormElement(e) }), t(t.rails.linkDisableSelector).each(function() {
                var e = t(this);
                e.data("ujs:disabled") && t.rails.enableElement(e) }) }), n.on("ajax:complete", i.linkDisableSelector, function() { i.enableElement(t(this)) }), n.on("ajax:complete", i.buttonDisableSelector, function() { i.enableFormElement(t(this)) }), n.on("click.rails", i.linkClickSelector, function(e) {
            var n = t(this),
                r = n.data("method"),
                s = n.data("params"),
                o = e.metaKey || e.ctrlKey;
            if (!i.allowAction(n)) return i.stopEverything(e);
            if (!o && n.is(i.linkDisableSelector) && i.disableElement(n), i.isRemote(n)) {
                if (o && (!r || "GET" === r) && !s) return !0;
                var a = i.handleRemote(n);
                return a === !1 ? i.enableElement(n) : a.fail(function() { i.enableElement(n) }), !1 }
            return r ? (i.handleMethod(n), !1) : void 0 }), n.on("click.rails", i.buttonClickSelector, function(e) {
            var n = t(this);
            if (!i.allowAction(n) || !i.isRemote(n)) return i.stopEverything(e);
            n.is(i.buttonDisableSelector) && i.disableFormElement(n);
            var r = i.handleRemote(n);
            return r === !1 ? i.enableFormElement(n) : r.fail(function() { i.enableFormElement(n) }), !1 }), n.on("change.rails", i.inputChangeSelector, function(e) {
            var n = t(this);
            return i.allowAction(n) && i.isRemote(n) ? (i.handleRemote(n), !1) : i.stopEverything(e) }), n.on("submit.rails", i.formSubmitSelector, function(n) {
            var r, s, o = t(this),
                a = i.isRemote(o);
            if (!i.allowAction(o)) return i.stopEverything(n);
            if (o.attr("novalidate") === e)
                if (o.data("ujs:formnovalidate-button") === e) {
                    if (r = i.blankInputs(o, i.requiredInputSelector, !1), r && i.fire(o, "ajax:aborted:required", [r])) return i.stopEverything(n) } else o.data("ujs:formnovalidate-button", e);
            if (a) {
                if (s = i.nonBlankInputs(o, i.fileInputSelector)) { setTimeout(function() { i.disableFormElements(o) }, 13);
                    var l = i.fire(o, "ajax:aborted:file", [s]);
                    return l || setTimeout(function() { i.enableFormElements(o) }, 13), l }
                return i.handleRemote(o), !1 }
            setTimeout(function() { i.disableFormElements(o) }, 13) }), n.on("click.rails", i.formInputClickSelector, function(e) {
            var n = t(this);
            if (!i.allowAction(n)) return i.stopEverything(e);
            var r = n.attr("name"),
                s = r ? { name: r, value: n.val() } : null,
                o = n.closest("form");
            0 === o.length && (o = t("#" + n.attr("form"))), o.data("ujs:submit-button", s), o.data("ujs:formnovalidate-button", n.attr("formnovalidate")), o.data("ujs:submit-button-formaction", n.attr("formaction")), o.data("ujs:submit-button-formmethod", n.attr("formmethod")) }), n.on("ajax:send.rails", i.formSubmitSelector, function(e) { this === e.target && i.disableFormElements(t(this)) }), n.on("ajax:complete.rails", i.formSubmitSelector, function(e) { this === e.target && i.enableFormElements(t(this)) }), t(function() { i.refreshCSRFTokens() }))
    }(jQuery),
    function() {
        (function() {
            (function() { this.Turbolinks = { supported: function() {
                        return null != window.history.pushState && null != window.requestAnimationFrame }(), visit: function(e, i) {
                        return t.controller.visit(e, i) }, clearCache: function() {
                        return t.controller.clearCache() } } }).call(this) }).call(this);
        var t = this.Turbolinks;
        (function() {
            (function() {
                var e, i;
                t.copyObject = function(t) {
                    var e, i, n;
                    i = {};
                    for (e in t) n = t[e], i[e] = n;
                    return i }, t.closest = function(t, i) {
                    return e.call(t, i) }, e = function() {
                    var t, e;
                    return t = document.documentElement, null != (e = t.closest) ? e : function(t) {
                        var e;
                        for (e = this; e;) {
                            if (e.nodeType === Node.ELEMENT_NODE && i.call(e, t)) return e;
                            e = e.parentNode } } }(), t.defer = function(t) {
                    return setTimeout(t, 1) }, t.dispatch = function(t, e) {
                    var i, n, r, s, o;
                    return s = null != e ? e : {}, o = s.target, i = s.cancelable, n = s.data, r = document.createEvent("Events"), r.initEvent(t, !0, i === !0), r.data = null != n ? n : {}, (null != o ? o : document).dispatchEvent(r), r }, t.match = function(t, e) {
                    return i.call(t, e) }, i = function() {
                    var t, e, i, n;
                    return t = document.documentElement, null != (e = null != (i = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? i : t.msMatchesSelector) ? e : t.mozMatchesSelector }(), t.uuid = function() {
                    var t, e, i;
                    for (i = "", t = e = 1; 36 >= e; t = ++e) i += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
                    return i } }).call(this),
                function() { t.Location = function() {
                        function t(t) {
                            var e, i;
                            null == t && (t = ""), i = document.createElement("a"), i.href = t.toString(), this.absoluteURL = i.href, e = i.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = i.hash.slice(1)) }
                        var e, i, n, r;
                        return t.wrap = function(t) {
                            return t instanceof this ? t : new this(t) }, t.prototype.getOrigin = function() {
                            return this.absoluteURL.split("/", 3).join("/") }, t.prototype.getPath = function() {
                            var t, e;
                            return null != (t = null != (e = this.absoluteURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/" }, t.prototype.getPathComponents = function() {
                            return this.getPath().split("/").slice(1) }, t.prototype.getLastPathComponent = function() {
                            return this.getPathComponents().slice(-1)[0] }, t.prototype.getExtension = function() {
                            var t, e;
                            return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "" }, t.prototype.isHTML = function() {
                            return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/) }, t.prototype.isPrefixedBy = function(t) {
                            var e;
                            return e = i(t), this.isEqualTo(t) || r(this.absoluteURL, e) }, t.prototype.isEqualTo = function(t) {
                            return this.absoluteURL === (null != t ? t.absoluteURL : void 0) }, t.prototype.toCacheKey = function() {
                            return this.requestURL }, t.prototype.toJSON = function() {
                            return this.absoluteURL }, t.prototype.toString = function() {
                            return this.absoluteURL }, t.prototype.valueOf = function() {
                            return this.absoluteURL }, i = function(t) {
                            return e(t.getOrigin() + t.getPath()) }, e = function(t) {
                            return n(t, "/") ? t : t + "/" }, r = function(t, e) {
                            return t.slice(0, e.length) === e }, n = function(t, e) {
                            return t.slice(-e.length) === e }, t }() }.call(this),
                function() {
                    var e = function(t, e) {
                        return function() {
                            return t.apply(e, arguments) } };
                    t.HttpRequest = function() {
                        function i(i, n, r) { this.delegate = i, this.requestCanceled = e(this.requestCanceled, this), this.requestTimedOut = e(this.requestTimedOut, this), this.requestFailed = e(this.requestFailed, this), this.requestLoaded = e(this.requestLoaded, this), this.requestProgressed = e(this.requestProgressed, this), this.url = t.Location.wrap(n).requestURL, this.referrer = t.Location.wrap(r).absoluteURL, this.createXHR() }
                        return i.NETWORK_FAILURE = 0, i.TIMEOUT_FAILURE = -1, i.timeout = 60, i.prototype.send = function() {
                            var t;
                            return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof(t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0 }, i.prototype.cancel = function() {
                            return this.xhr && this.sent ? this.xhr.abort() : void 0 }, i.prototype.requestProgressed = function(t) {
                            return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0 }, i.prototype.requestLoaded = function() {
                            return this.endRequest(function(t) {
                                return function() {
                                    var e;
                                    return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText)) } }(this)) }, i.prototype.requestFailed = function() {
                            return this.endRequest(function(t) {
                                return function() {
                                    return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE) } }(this)) }, i.prototype.requestTimedOut = function() {
                            return this.endRequest(function(t) {
                                return function() {
                                    return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE) } }(this)) }, i.prototype.requestCanceled = function() {
                            return this.endRequest() }, i.prototype.notifyApplicationBeforeRequestStart = function() {
                            return t.dispatch("turbolinks:request-start", { data: { url: this.url, xhr: this.xhr } }) }, i.prototype.notifyApplicationAfterRequestEnd = function() {
                            return t.dispatch("turbolinks:request-end", { data: { url: this.url, xhr: this.xhr } }) }, i.prototype.createXHR = function() {
                            return this.xhr = new XMLHttpRequest, this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled }, i.prototype.endRequest = function(t) {
                            return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0 }, i.prototype.setProgress = function(t) {
                            var e;
                            return this.progress = t, "function" == typeof(e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0 }, i.prototype.destroy = function() {
                            var t;
                            return this.setProgress(1), "function" == typeof(t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null }, i }() }.call(this),
                function() {
                    var e = function(t, e) {
                        return function() {
                            return t.apply(e, arguments) } };
                    t.ProgressBar = function() {
                        function t() { this.trickle = e(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement() }
                        var i;
                        return i = 300, t.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + i + "ms ease-out, opacity " + i / 2 + "ms " + i / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", t.prototype.show = function() {
                            return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling()) }, t.prototype.hide = function() {
                            return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function(t) {
                                return function() {
                                    return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1 } }(this))) : void 0 }, t.prototype.setValue = function(t) {
                            return this.value = t, this.refresh() }, t.prototype.installStylesheetElement = function() {
                            return document.head.insertBefore(this.stylesheetElement, document.head.firstChild) }, t.prototype.installProgressElement = function() {
                            return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh() }, t.prototype.fadeProgressElement = function(t) {
                            return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * i) }, t.prototype.uninstallProgressElement = function() {
                            return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0 }, t.prototype.startTrickling = function() {
                            return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, i) }, t.prototype.stopTrickling = function() {
                            return clearInterval(this.trickleInterval), this.trickleInterval = null }, t.prototype.trickle = function() {
                            return this.setValue(this.value + Math.random() / 100) }, t.prototype.refresh = function() {
                            return requestAnimationFrame(function(t) {
                                return function() {
                                    return t.progressElement.style.width = 10 + 90 * t.value + "%" } }(this)) }, t.prototype.createStylesheetElement = function() {
                            var t;
                            return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t }, t.prototype.createProgressElement = function() {
                            var t;
                            return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t }, t }() }.call(this),
                function() {
                    var e = function(t, e) {
                        return function() {
                            return t.apply(e, arguments) } };
                    t.BrowserAdapter = function() {
                        function i(i) { this.controller = i, this.showProgressBar = e(this.showProgressBar, this), this.progressBar = new t.ProgressBar }
                        var n, r, s, o;
                        return o = t.HttpRequest, n = o.NETWORK_FAILURE, s = o.TIMEOUT_FAILURE, r = 500, i.prototype.visitProposedToLocationWithAction = function(t, e) {
                            return this.controller.startVisitToLocationWithAction(t, e) }, i.prototype.visitStarted = function(t) {
                            return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot() }, i.prototype.visitRequestStarted = function(t) {
                            return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar() }, i.prototype.visitRequestProgressed = function(t) {
                            return this.progressBar.setValue(t.progress) }, i.prototype.visitRequestCompleted = function(t) {
                            return t.loadResponse() }, i.prototype.visitRequestFailedWithStatusCode = function(t, e) {
                            switch (e) {
                                case n:
                                case s:
                                    return this.reload();
                                default:
                                    return t.loadResponse() } }, i.prototype.visitRequestFinished = function() {
                            return this.hideProgressBar() }, i.prototype.visitCompleted = function(t) {
                            return t.followRedirect() }, i.prototype.pageInvalidated = function() {
                            return this.reload() }, i.prototype.showProgressBarAfterDelay = function() {
                            return this.progressBarTimeout = setTimeout(this.showProgressBar, r) }, i.prototype.showProgressBar = function() {
                            return this.progressBar.show() }, i.prototype.hideProgressBar = function() {
                            return this.progressBar.hide(), clearTimeout(this.progressBarTimeout) }, i.prototype.reload = function() {
                            return window.location.reload() }, i }() }.call(this),
                function() {
                    var e, i = function(t, e) {
                        return function() {
                            return t.apply(e, arguments) } };
                    e = !1, addEventListener("load", function() {
                        return t.defer(function() {
                            return e = !0 }) }, !1), t.History = function() {
                        function n(t) { this.delegate = t, this.onPopState = i(this.onPopState, this) }
                        return n.prototype.start = function() {
                            return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), this.started = !0) }, n.prototype.stop = function() {
                            return this.started ? (removeEventListener("popstate", this.onPopState, !1), this.started = !1) : void 0 }, n.prototype.push = function(e, i) {
                            return e = t.Location.wrap(e), this.update("push", e, i) }, n.prototype.replace = function(e, i) {
                            return e = t.Location.wrap(e), this.update("replace", e, i) }, n.prototype.onPopState = function(e) {
                            var i, n, r, s;
                            return this.shouldHandlePopState() && (s = null != (n = e.state) ? n.turbolinks : void 0) ? (i = t.Location.wrap(window.location), r = s.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(i, r)) : void 0 }, n.prototype.shouldHandlePopState = function() {
                            return e === !0 }, n.prototype.update = function(t, e, i) {
                            var n;
                            return n = { turbolinks: { restorationIdentifier: i } }, history[t + "State"](n, null, e) }, n }() }.call(this),
                function() { t.Snapshot = function() {
                        function e(t) {
                            var e, i;
                            i = t.head, e = t.body, this.head = null != i ? i : document.createElement("head"), this.body = null != e ? e : document.createElement("body") }
                        return e.wrap = function(t) {
                            return t instanceof this ? t : this.fromHTML(t) }, e.fromHTML = function(t) {
                            var e;
                            return e = document.createElement("html"), e.innerHTML = t, this.fromElement(e) }, e.fromElement = function(t) {
                            return new this({ head: t.querySelector("head"), body: t.querySelector("body") }) }, e.prototype.clone = function() {
                            return new e({ head: this.head.cloneNode(!0), body: this.body.cloneNode(!0) }) }, e.prototype.getRootLocation = function() {
                            var e, i;
                            return i = null != (e = this.getSetting("root")) ? e : "/", new t.Location(i) }, e.prototype.getCacheControlValue = function() {
                            return this.getSetting("cache-control") }, e.prototype.hasAnchor = function(t) {
                            try {
                                return null != this.body.querySelector("[id='" + t + "']") } catch (t) {} }, e.prototype.isPreviewable = function() {
                            return "no-preview" !== this.getCacheControlValue() }, e.prototype.isCacheable = function() {
                            return "no-cache" !== this.getCacheControlValue() }, e.prototype.getSetting = function(t) {
                            var e, i;
                            return i = this.head.querySelectorAll("meta[name='turbolinks-" + t + "']"), e = i[i.length - 1], null != e ? e.getAttribute("content") : void 0 }, e }() }.call(this),
                function() {
                    var e = [].slice;
                    t.Renderer = function() {
                        function t() {}
                        var i;
                        return t.render = function() {
                            var t, i, n, r;
                            return n = arguments[0], i = arguments[1], t = 3 <= arguments.length ? e.call(arguments, 2) : [], r = function(t, e, i) { i.prototype = t.prototype;
                                var n = new i,
                                    r = t.apply(n, e);
                                return Object(r) === r ? r : n }(this, t, function() {}), r.delegate = n, r.render(i), r }, t.prototype.renderView = function(t) {
                            return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody) }, t.prototype.invalidateView = function() {
                            return this.delegate.viewInvalidated() }, t.prototype.createScriptElement = function(t) {
                            var e;
                            return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, i(e, t), e) }, i = function(t, e) {
                            var i, n, r, s, o, a, l;
                            for (s = e.attributes, a = [], i = 0, n = s.length; n > i; i++) o = s[i], r = o.name, l = o.value, a.push(t.setAttribute(r, l));
                            return a }, t }() }.call(this),
                function() { t.HeadDetails = function() {
                        function t(t) {
                            var e, i, s, o, a, l, u;
                            for (this.element = t, this.elements = {}, u = this.element.childNodes, o = 0, l = u.length; l > o; o++) s = u[o], s.nodeType === Node.ELEMENT_NODE && (a = s.outerHTML, i = null != (e = this.elements)[a] ? e[a] : e[a] = { type: r(s), tracked: n(s), elements: [] }, i.elements.push(s)) }
                        var e, i, n, r;
                        return t.prototype.hasElementWithKey = function(t) {
                            return t in this.elements }, t.prototype.getTrackedElementSignature = function() {
                            var t, e;
                            return function() {
                                var i, n;
                                i = this.elements, n = [];
                                for (t in i) e = i[t].tracked, e && n.push(t);
                                return n }.call(this).join("") }, t.prototype.getScriptElementsNotInDetails = function(t) {
                            return this.getElementsMatchingTypeNotInDetails("script", t) }, t.prototype.getStylesheetElementsNotInDetails = function(t) {
                            return this.getElementsMatchingTypeNotInDetails("stylesheet", t) }, t.prototype.getElementsMatchingTypeNotInDetails = function(t, e) {
                            var i, n, r, s, o, a;
                            r = this.elements, o = [];
                            for (n in r) s = r[n], a = s.type, i = s.elements, a !== t || e.hasElementWithKey(n) || o.push(i[0]);
                            return o }, t.prototype.getProvisionalElements = function() {
                            var t, e, i, n, r, s, o;
                            i = [], n = this.elements;
                            for (e in n) r = n[e], o = r.type, s = r.tracked, t = r.elements, null != o || s ? t.length > 1 && i.push.apply(i, t.slice(1)) : i.push.apply(i, t);
                            return i }, r = function(t) {
                            return e(t) ? "script" : i(t) ? "stylesheet" : void 0 }, n = function(t) {
                            return "reload" === t.getAttribute("data-turbolinks-track") }, e = function(t) {
                            var e;
                            return e = t.tagName.toLowerCase(), "script" === e }, i = function(t) {
                            var e;
                            return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel") }, t }() }.call(this),
                function() {
                    var e = function(t, e) {
                            function n() { this.constructor = t }
                            for (var r in e) i.call(e, r) && (t[r] = e[r]);
                            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t },
                        i = {}.hasOwnProperty;
                    t.SnapshotRenderer = function(i) {
                        function n(e, i) { this.currentSnapshot = e, this.newSnapshot = i, this.currentHeadDetails = new t.HeadDetails(this.currentSnapshot.head), this.newHeadDetails = new t.HeadDetails(this.newSnapshot.head), this.newBody = this.newSnapshot.body }
                        return e(n, i), n.prototype.render = function(t) {
                            return this.trackedElementsAreIdentical() ? (this.mergeHead(), this.renderView(function(e) {
                                return function() {
                                    return e.replaceBody(), e.focusFirstAutofocusableElement(), t() } }(this))) : this.invalidateView() }, n.prototype.mergeHead = function() {
                            return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements() }, n.prototype.replaceBody = function() {
                            return this.activateBodyScriptElements(), this.importBodyPermanentElements(), this.assignNewBody() }, n.prototype.trackedElementsAreIdentical = function() {
                            return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature() }, n.prototype.copyNewHeadStylesheetElements = function() {
                            var t, e, i, n, r;
                            for (n = this.getNewHeadStylesheetElements(), r = [], e = 0, i = n.length; i > e; e++) t = n[e], r.push(document.head.appendChild(t));
                            return r }, n.prototype.copyNewHeadScriptElements = function() {
                            var t, e, i, n, r;
                            for (n = this.getNewHeadScriptElements(), r = [], e = 0, i = n.length; i > e; e++) t = n[e], r.push(document.head.appendChild(this.createScriptElement(t)));
                            return r }, n.prototype.removeCurrentHeadProvisionalElements = function() {
                            var t, e, i, n, r;
                            for (n = this.getCurrentHeadProvisionalElements(), r = [], e = 0, i = n.length; i > e; e++) t = n[e], r.push(document.head.removeChild(t));
                            return r }, n.prototype.copyNewHeadProvisionalElements = function() {
                            var t, e, i, n, r;
                            for (n = this.getNewHeadProvisionalElements(), r = [], e = 0, i = n.length; i > e; e++) t = n[e], r.push(document.head.appendChild(t));
                            return r }, n.prototype.importBodyPermanentElements = function() {
                            var t, e, i, n, r, s;
                            for (n = this.getNewBodyPermanentElements(), s = [], e = 0, i = n.length; i > e; e++) r = n[e], (t = this.findCurrentBodyPermanentElement(r)) ? s.push(r.parentNode.replaceChild(t, r)) : s.push(void 0);
                            return s }, n.prototype.activateBodyScriptElements = function() {
                            var t, e, i, n, r, s;
                            for (n = this.getNewBodyScriptElements(), s = [], e = 0, i = n.length; i > e; e++) r = n[e], t = this.createScriptElement(r), s.push(r.parentNode.replaceChild(t, r));
                            return s }, n.prototype.assignNewBody = function() {
                            return document.body = this.newBody }, n.prototype.focusFirstAutofocusableElement = function() {
                            var t;
                            return null != (t = this.findFirstAutofocusableElement()) ? t.focus() : void 0 }, n.prototype.getNewHeadStylesheetElements = function() {
                            return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails) }, n.prototype.getNewHeadScriptElements = function() {
                            return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails) }, n.prototype.getCurrentHeadProvisionalElements = function() {
                            return this.currentHeadDetails.getProvisionalElements() }, n.prototype.getNewHeadProvisionalElements = function() {
                            return this.newHeadDetails.getProvisionalElements() }, n.prototype.getNewBodyPermanentElements = function() {
                            return this.newBody.querySelectorAll("[id][data-turbolinks-permanent]") }, n.prototype.findCurrentBodyPermanentElement = function(t) {
                            return document.body.querySelector("#" + t.id + "[data-turbolinks-permanent]") }, n.prototype.getNewBodyScriptElements = function() {
                            return this.newBody.querySelectorAll("script") }, n.prototype.findFirstAutofocusableElement = function() {
                            return document.body.querySelector("[autofocus]") }, n }(t.Renderer) }.call(this),
                function() {
                    var e = function(t, e) {
                            function n() { this.constructor = t }
                            for (var r in e) i.call(e, r) && (t[r] = e[r]);
                            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t },
                        i = {}.hasOwnProperty;
                    t.ErrorRenderer = function(t) {
                        function i(t) { this.html = t }
                        return e(i, t), i.prototype.render = function(t) {
                            return this.renderView(function(e) {
                                return function() {
                                    return e.replaceDocumentHTML(), e.activateBodyScriptElements(), t() } }(this)) }, i.prototype.replaceDocumentHTML = function() {
                            return document.documentElement.innerHTML = this.html }, i.prototype.activateBodyScriptElements = function() {
                            var t, e, i, n, r, s;
                            for (n = this.getScriptElements(), s = [], e = 0, i = n.length; i > e; e++) r = n[e], t = this.createScriptElement(r), s.push(r.parentNode.replaceChild(t, r));
                            return s }, i.prototype.getScriptElements = function() {
                            return document.documentElement.querySelectorAll("script") }, i }(t.Renderer) }.call(this),
                function() { t.View = function() {
                        function e(t) { this.delegate = t, this.element = document.documentElement }
                        return e.prototype.getRootLocation = function() {
                            return this.getSnapshot().getRootLocation() }, e.prototype.getSnapshot = function() {
                            return t.Snapshot.fromElement(this.element) }, e.prototype.render = function(t, e) {
                            var i, n, r;
                            return r = t.snapshot, i = t.error, n = t.isPreview, this.markAsPreview(n), null != r ? this.renderSnapshot(r, e) : this.renderError(i, e) }, e.prototype.markAsPreview = function(t) {
                            return t ? this.element.setAttribute("data-turbolinks-preview", "") : this.element.removeAttribute("data-turbolinks-preview") }, e.prototype.renderSnapshot = function(e, i) {
                            return t.SnapshotRenderer.render(this.delegate, i, this.getSnapshot(), t.Snapshot.wrap(e)) }, e.prototype.renderError = function(e, i) {
                            return t.ErrorRenderer.render(this.delegate, i, e) }, e }() }.call(this),
                function() {
                    var e = function(t, e) {
                        return function() {
                            return t.apply(e, arguments) } };
                    t.ScrollManager = function() {
                        function t(t) { this.delegate = t, this.onScroll = e(this.onScroll, this) }
                        return t.prototype.start = function() {
                            return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0) }, t.prototype.stop = function() {
                            return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0 }, t.prototype.scrollToElement = function(t) {
                            return t.scrollIntoView() }, t.prototype.scrollToPosition = function(t) {
                            var e, i;
                            return e = t.x, i = t.y, window.scrollTo(e, i) }, t.prototype.onScroll = function() {
                            return this.updatePosition({ x: window.pageXOffset, y: window.pageYOffset }) }, t.prototype.updatePosition = function(t) {
                            var e;
                            return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0 }, t }() }.call(this),
                function() { t.SnapshotCache = function() {
                        function e(t) { this.size = t, this.keys = [], this.snapshots = {} }
                        var i;
                        return e.prototype.has = function(t) {
                            var e;
                            return e = i(t), e in this.snapshots }, e.prototype.get = function(t) {
                            var e;
                            if (this.has(t)) return e = this.read(t), this.touch(t), e }, e.prototype.put = function(t, e) {
                            return this.write(t, e), this.touch(t), e }, e.prototype.read = function(t) {
                            var e;
                            return e = i(t), this.snapshots[e] }, e.prototype.write = function(t, e) {
                            var n;
                            return n = i(t), this.snapshots[n] = e }, e.prototype.touch = function(t) {
                            var e, n;
                            return n = i(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim() }, e.prototype.trim = function() {
                            var t, e, i, n, r;
                            for (n = this.keys.splice(this.size), r = [], t = 0, i = n.length; i > t; t++) e = n[t], r.push(delete this.snapshots[e]);
                            return r }, i = function(e) {
                            return t.Location.wrap(e).toCacheKey() }, e }() }.call(this),
                function() {
                    var e = function(t, e) {
                        return function() {
                            return t.apply(e, arguments) } };
                    t.Visit = function() {
                        function i(i, n, r) { this.controller = i, this.action = r, this.performScroll = e(this.performScroll, this), this.identifier = t.uuid(), this.location = t.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {} }
                        var n;
                        return i.prototype.start = function() {
                            return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0 }, i.prototype.cancel = function() {
                            var t;
                            return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0 }, i.prototype.complete = function() {
                            var t;
                            return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof(t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0 }, i.prototype.fail = function() {
                            var t;
                            return "started" === this.state ? (this.state = "failed", "function" == typeof(t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0 }, i.prototype.changeHistory = function() {
                            var t, e;
                            return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0) }, i.prototype.issueRequest = function() {
                            return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new t.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0 }, i.prototype.getCachedSnapshot = function() {
                            var t;
                            return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t }, i.prototype.hasCachedSnapshot = function() {
                            return null != this.getCachedSnapshot() }, i.prototype.loadCachedSnapshot = function() {
                            var t, e;
                            return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function() {
                                var i;
                                return this.cacheSnapshot(), this.controller.render({ snapshot: e, isPreview: t }, this.performScroll), "function" == typeof(i = this.adapter).visitRendered && i.visitRendered(this), t ? void 0 : this.complete() })) : void 0 }, i.prototype.loadResponse = function() {
                            return null != this.response ? this.render(function() {
                                var t, e;
                                return this.cacheSnapshot(), this.request.failed ? (this.controller.render({ error: this.response }, this.performScroll), "function" == typeof(t = this.adapter).visitRendered && t.visitRendered(this),
                                    this.fail()) : (this.controller.render({ snapshot: this.response }, this.performScroll), "function" == typeof(e = this.adapter).visitRendered && e.visitRendered(this), this.complete())
                            }) : void 0
                        }, i.prototype.followRedirect = function() {
                            return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0 }, i.prototype.requestStarted = function() {
                            var t;
                            return this.recordTimingMetric("requestStart"), "function" == typeof(t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0 }, i.prototype.requestProgressed = function(t) {
                            var e;
                            return this.progress = t, "function" == typeof(e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0 }, i.prototype.requestCompletedWithResponse = function(e, i) {
                            return this.response = e, null != i && (this.redirectedToLocation = t.Location.wrap(i)), this.adapter.visitRequestCompleted(this) }, i.prototype.requestFailedWithStatusCode = function(t, e) {
                            return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t) }, i.prototype.requestFinished = function() {
                            var t;
                            return this.recordTimingMetric("requestEnd"), "function" == typeof(t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0 }, i.prototype.performScroll = function() {
                            return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0) }, i.prototype.scrollToRestoredPosition = function() {
                            var t, e;
                            return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0 }, i.prototype.scrollToAnchor = function() {
                            return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0 }, i.prototype.scrollToTop = function() {
                            return this.controller.scrollToPosition({ x: 0, y: 0 }) }, i.prototype.recordTimingMetric = function(t) {
                            var e;
                            return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = (new Date).getTime() }, i.prototype.getTimingMetrics = function() {
                            return t.copyObject(this.timingMetrics) }, n = function(t) {
                            switch (t) {
                                case "replace":
                                    return "replaceHistoryWithLocationAndRestorationIdentifier";
                                case "advance":
                                case "restore":
                                    return "pushHistoryWithLocationAndRestorationIdentifier" } }, i.prototype.shouldIssueRequest = function() {
                            return "restore" !== this.action || !this.hasCachedSnapshot() }, i.prototype.cacheSnapshot = function() {
                            return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0) }, i.prototype.render = function(t) {
                            return this.cancelRender(), this.frame = requestAnimationFrame(function(e) {
                                return function() {
                                    return e.frame = null, t.call(e) } }(this)) }, i.prototype.cancelRender = function() {
                            return this.frame ? cancelAnimationFrame(this.frame) : void 0 }, i
                    }()
                }.call(this),
                function() {
                    var e = function(t, e) {
                        return function() {
                            return t.apply(e, arguments) } };
                    t.Controller = function() {
                        function i() { this.clickBubbled = e(this.clickBubbled, this), this.clickCaptured = e(this.clickCaptured, this), this.pageLoaded = e(this.pageLoaded, this), this.history = new t.History(this), this.view = new t.View(this), this.scrollManager = new t.ScrollManager(this), this.restorationData = {}, this.clearCache() }
                        return i.prototype.start = function() {
                            return t.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0 }, i.prototype.disable = function() {
                            return this.enabled = !1 }, i.prototype.stop = function() {
                            return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0 }, i.prototype.clearCache = function() {
                            return this.cache = new t.SnapshotCache(10) }, i.prototype.visit = function(e, i) {
                            var n, r;
                            return null == i && (i = {}), e = t.Location.wrap(e), this.applicationAllowsVisitingLocation(e) ? this.locationIsVisitable(e) ? (n = null != (r = i.action) ? r : "advance", this.adapter.visitProposedToLocationWithAction(e, n)) : window.location = e : void 0 }, i.prototype.startVisitToLocationWithAction = function(e, i, n) {
                            var r;
                            return t.supported ? (r = this.getRestorationDataForIdentifier(n), this.startVisit(e, i, { restorationData: r })) : window.location = e }, i.prototype.startHistory = function() {
                            return this.location = t.Location.wrap(window.location), this.restorationIdentifier = t.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier) }, i.prototype.stopHistory = function() {
                            return this.history.stop() }, i.prototype.pushHistoryWithLocationAndRestorationIdentifier = function(e, i) {
                            return this.restorationIdentifier = i, this.location = t.Location.wrap(e), this.history.push(this.location, this.restorationIdentifier) }, i.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function(e, i) {
                            return this.restorationIdentifier = i, this.location = t.Location.wrap(e), this.history.replace(this.location, this.restorationIdentifier) }, i.prototype.historyPoppedToLocationWithRestorationIdentifier = function(e, i) {
                            var n;
                            return this.restorationIdentifier = i, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(e, "restore", { restorationIdentifier: this.restorationIdentifier, restorationData: n, historyChanged: !0 }), this.location = t.Location.wrap(e)) : this.adapter.pageInvalidated() }, i.prototype.getCachedSnapshotForLocation = function(t) {
                            var e;
                            return e = this.cache.get(t), e ? e.clone() : void 0 }, i.prototype.shouldCacheSnapshot = function() {
                            return this.view.getSnapshot().isCacheable() }, i.prototype.cacheSnapshot = function() {
                            var t;
                            return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), t = this.view.getSnapshot(), this.cache.put(this.lastRenderedLocation, t.clone())) : void 0 }, i.prototype.scrollToAnchor = function(t) {
                            var e;
                            return (e = document.getElementById(t)) ? this.scrollToElement(e) : this.scrollToPosition({ x: 0, y: 0 }) }, i.prototype.scrollToElement = function(t) {
                            return this.scrollManager.scrollToElement(t) }, i.prototype.scrollToPosition = function(t) {
                            return this.scrollManager.scrollToPosition(t) }, i.prototype.scrollPositionChanged = function(t) {
                            var e;
                            return e = this.getCurrentRestorationData(), e.scrollPosition = t }, i.prototype.render = function(t, e) {
                            return this.view.render(t, e) }, i.prototype.viewInvalidated = function() {
                            return this.adapter.pageInvalidated() }, i.prototype.viewWillRender = function(t) {
                            return this.notifyApplicationBeforeRender(t) }, i.prototype.viewRendered = function() {
                            return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender() }, i.prototype.pageLoaded = function() {
                            return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad() }, i.prototype.clickCaptured = function() {
                            return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1) }, i.prototype.clickBubbled = function(t) {
                            var e, i, n;
                            return this.enabled && this.clickEventIsSignificant(t) && (i = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(i)) && this.applicationAllowsFollowingLinkToLocation(i, n) ? (t.preventDefault(), e = this.getActionForLink(i), this.visit(n, { action: e })) : void 0 }, i.prototype.applicationAllowsFollowingLinkToLocation = function(t, e) {
                            var i;
                            return i = this.notifyApplicationAfterClickingLinkToLocation(t, e), !i.defaultPrevented }, i.prototype.applicationAllowsVisitingLocation = function(t) {
                            var e;
                            return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented }, i.prototype.notifyApplicationAfterClickingLinkToLocation = function(e, i) {
                            return t.dispatch("turbolinks:click", { target: e, data: { url: i.absoluteURL }, cancelable: !0 }) }, i.prototype.notifyApplicationBeforeVisitingLocation = function(e) {
                            return t.dispatch("turbolinks:before-visit", { data: { url: e.absoluteURL }, cancelable: !0 }) }, i.prototype.notifyApplicationAfterVisitingLocation = function(e) {
                            return t.dispatch("turbolinks:visit", { data: { url: e.absoluteURL } }) }, i.prototype.notifyApplicationBeforeCachingSnapshot = function() {
                            return t.dispatch("turbolinks:before-cache") }, i.prototype.notifyApplicationBeforeRender = function(e) {
                            return t.dispatch("turbolinks:before-render", { data: { newBody: e } }) }, i.prototype.notifyApplicationAfterRender = function() {
                            return t.dispatch("turbolinks:render") }, i.prototype.notifyApplicationAfterPageLoad = function(e) {
                            return null == e && (e = {}), t.dispatch("turbolinks:load", { data: { url: this.location.absoluteURL, timing: e } }) }, i.prototype.startVisit = function(t, e, i) {
                            var n;
                            return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, i), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t) }, i.prototype.createVisit = function(e, i, n) {
                            var r, s, o, a, l;
                            return s = null != n ? n : {}, a = s.restorationIdentifier, o = s.restorationData, r = s.historyChanged, l = new t.Visit(this, e, i), l.restorationIdentifier = null != a ? a : t.uuid(), l.restorationData = t.copyObject(o), l.historyChanged = r, l.referrer = this.location, l }, i.prototype.visitCompleted = function(t) {
                            return this.notifyApplicationAfterPageLoad(t.getTimingMetrics()) }, i.prototype.clickEventIsSignificant = function(t) {
                            return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey) }, i.prototype.getVisitableLinkForNode = function(e) {
                            return this.nodeIsVisitable(e) ? t.closest(e, "a[href]:not([target])") : void 0 }, i.prototype.getVisitableLocationForLink = function(e) {
                            var i;
                            return i = new t.Location(e.getAttribute("href")), this.locationIsVisitable(i) ? i : void 0 }, i.prototype.getActionForLink = function(t) {
                            var e;
                            return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance" }, i.prototype.nodeIsVisitable = function(e) {
                            var i;
                            return !(i = t.closest(e, "[data-turbolinks]")) || "false" !== i.getAttribute("data-turbolinks") }, i.prototype.locationIsVisitable = function(t) {
                            return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML() }, i.prototype.getCurrentRestorationData = function() {
                            return this.getRestorationDataForIdentifier(this.restorationIdentifier) }, i.prototype.getRestorationDataForIdentifier = function(t) {
                            var e;
                            return null != (e = this.restorationData)[t] ? e[t] : e[t] = {} }, i }() }.call(this),
                function() {
                    var e, i, n;
                    t.start = function() {
                        return i() ? (null == t.controller && (t.controller = e()), t.controller.start()) : void 0 }, i = function() {
                        return null == window.Turbolinks && (window.Turbolinks = t), n() }, e = function() {
                        var e;
                        return e = new t.Controller, e.adapter = new t.BrowserAdapter(e), e }, n = function() {
                        return window.Turbolinks === t }, n() && t.start() }.call(this)
        }).call(this), "object" == typeof module && module.exports ? module.exports = t : "function" == typeof define && define.amd && define(t)
    }.call(this), ! function(t) { t(["jquery"], function(t) {
            return function() {
                function e(t, e, i) {
                    return f({ type: k.error, iconClass: m().iconClasses.error, message: t, optionsOverride: i, title: e }) }

                function i(e, i) {
                    return e || (e = m()), y = t("#" + e.containerId), y.length ? y : (i && (y = c(e)), y) }

                function n(t, e, i) {
                    return f({ type: k.info, iconClass: m().iconClasses.info, message: t, optionsOverride: i, title: e }) }

                function r(t) { v = t }

                function s(t, e, i) {
                    return f({ type: k.success, iconClass: m().iconClasses.success, message: t, optionsOverride: i, title: e }) }

                function o(t, e, i) {
                    return f({ type: k.warning, iconClass: m().iconClasses.warning, message: t, optionsOverride: i, title: e }) }

                function a(t) {
                    var e = m();
                    y || i(e), d(t, e) || u(e) }

                function l(e) {
                    var n = m();
                    return y || i(n), e && 0 === t(":focus", e).length ? void g(e) : void(y.children().length && y.remove()) }

                function u(e) {
                    for (var i = y.children(), n = i.length - 1; n >= 0; n--) d(t(i[n]), e) }

                function d(e, i) {
                    return !(!e || 0 !== t(":focus", e).length) && (e[i.hideMethod]({ duration: i.hideDuration, easing: i.hideEasing, complete: function() { g(e) } }), !0) }

                function c(e) {
                    return y = t("<div/>").attr("id", e.containerId).addClass(e.positionClass).attr("aria-live", "polite").attr("role", "alert"), y.appendTo(t(e.target)), y }

                function h() {
                    return { tapToDismiss: !0, toastClass: "toast", containerId: "toast-container", debug: !1, showMethod: "fadeIn", showDuration: 300, showEasing: "swing", onShown: void 0, hideMethod: "fadeOut", hideDuration: 1e3, hideEasing: "swing", onHidden: void 0, extendedTimeOut: 1e3, iconClasses: { error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning" }, iconClass: "toast-info", positionClass: "toast-top-right", timeOut: 5e3, titleClass: "toast-title", messageClass: "toast-message", target: "body", closeHtml: '<button type="button">&times;</button>', newestOnTop: !0, preventDuplicates: !1, progressBar: !1 } }

                function p(t) { v && v(t) }

                function f(e) {
                    function n(e) {
                        return !t(":focus", d).length || e ? (clearTimeout(k.intervalId), d[a.hideMethod]({ duration: a.hideDuration, easing: a.hideEasing, complete: function() { g(d), a.onHidden && "hidden" !== T.state && a.onHidden(), T.state = "hidden", T.endTime = new Date, p(T) } })) : void 0 }

                    function r() {
                        (a.timeOut > 0 || a.extendedTimeOut > 0) && (u = setTimeout(n, a.extendedTimeOut), k.maxHideTime = parseFloat(a.extendedTimeOut), k.hideEta = (new Date).getTime() + k.maxHideTime) }

                    function s() { clearTimeout(u), k.hideEta = 0, d.stop(!0, !0)[a.showMethod]({ duration: a.showDuration, easing: a.showEasing }) }

                    function o() {
                        var t = (k.hideEta - (new Date).getTime()) / k.maxHideTime * 100;
                        f.width(t + "%") }
                    var a = m(),
                        l = e.iconClass || a.iconClass;
                    if ("undefined" != typeof e.optionsOverride && (a = t.extend(a, e.optionsOverride), l = e.optionsOverride.iconClass || l), a.preventDuplicates) {
                        if (e.message === b) return;
                        b = e.message }
                    w++, y = i(a, !0);
                    var u = null,
                        d = t("<div/>"),
                        c = t("<div/>"),
                        h = t("<div/>"),
                        f = t("<div/>"),
                        v = t(a.closeHtml),
                        k = { intervalId: null, hideEta: null, maxHideTime: null },
                        T = { toastId: w, state: "visible", startTime: new Date, options: a, map: e };
                    return e.iconClass && d.addClass(a.toastClass).addClass(l), e.title && (c.append(e.title).addClass(a.titleClass), d.append(c)), e.message && (h.append(e.message).addClass(a.messageClass), d.append(h)), a.closeButton && (v.addClass("toast-close-button").attr("role", "button"), d.prepend(v)), a.progressBar && (f.addClass("toast-progress"), d.prepend(f)), d.hide(), a.newestOnTop ? y.prepend(d) : y.append(d), d[a.showMethod]({ duration: a.showDuration, easing: a.showEasing, complete: a.onShown }), a.timeOut > 0 && (u = setTimeout(n, a.timeOut), k.maxHideTime = parseFloat(a.timeOut), k.hideEta = (new Date).getTime() + k.maxHideTime, a.progressBar && (k.intervalId = setInterval(o, 10))), d.hover(s, r), !a.onclick && a.tapToDismiss && d.click(n), a.closeButton && v && v.click(function(t) { t.stopPropagation ? t.stopPropagation() : void 0 !== t.cancelBubble && t.cancelBubble !== !0 && (t.cancelBubble = !0), n(!0) }), a.onclick && d.click(function() { a.onclick(), n() }), p(T), a.debug && console && console.log(T), d }

                function m() {
                    return t.extend({}, h(), T.options) }

                function g(t) { y || (y = i()), t.is(":visible") || (t.remove(), t = null, 0 === y.children().length && (y.remove(), b = void 0)) }
                var y, v, b, w = 0,
                    k = { error: "error", info: "info", success: "success", warning: "warning" },
                    T = { clear: a, remove: l, error: e, getContainer: i, info: n, options: {}, subscribe: r, success: s, version: "2.1.0", warning: o };
                return T }() }) }("function" == typeof define && define.amd ? define : function(t, e) { "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : window.toastr = e(window.jQuery) }), + function(t, e, i) { "use strict";
        var n = { calc: !1 };
        e.fn.rrssb = function(t) {
            var n = e.extend({ description: i, emailAddress: i, emailBody: i, emailSubject: i, image: i, title: i, url: i }, t);
            for (var r in n) n.hasOwnProperty(r) && n[r] !== i && (n[r] = s(n[r]));
            n.url !== i && (e(this).find(".rrssb-facebook a").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + n.url), e(this).find(".rrssb-tumblr a").attr("href", "http://tumblr.com/share/link?url=" + n.url + (n.title !== i ? "&name=" + n.title : "") + (n.description !== i ? "&description=" + n.description : "")), e(this).find(".rrssb-linkedin a").attr("href", "http://www.linkedin.com/shareArticle?mini=true&url=" + n.url + (n.title !== i ? "&title=" + n.title : "") + (n.description !== i ? "&summary=" + n.description : "")), e(this).find(".rrssb-twitter a").attr("href", "https://twitter.com/intent/tweet?text=" + (n.description !== i ? n.description : "") + "%20" + n.url), e(this).find(".rrssb-hackernews a").attr("href", "https://news.ycombinator.com/submitlink?u=" + n.url + (n.title !== i ? "&text=" + n.title : "")), e(this).find(".rrssb-reddit a").attr("href", "http://www.reddit.com/submit?url=" + n.url + (n.description !== i ? "&text=" + n.description : "") + (n.title !== i ? "&title=" + n.title : "")), e(this).find(".rrssb-googleplus a").attr("href", "https://plus.google.com/share?url=" + (n.description !== i ? n.description : "") + "%20" + n.url), e(this).find(".rrssb-pinterest a").attr("href", "http://pinterest.com/pin/create/button/?url=" + n.url + (n.image !== i ? "&amp;media=" + n.image : "") + (n.description !== i ? "&amp;description=" + n.description : "")), e(this).find(".rrssb-pocket a").attr("href", "https://getpocket.com/save?url=" + n.url), e(this).find(".rrssb-github a").attr("href", n.url)), n.emailAddress !== i && e(this).find(".rrssb-email a").attr("href", "mailto:" + n.emailAddress + "?" + (n.emailSubject !== i ? "subject=" + n.emailSubject : "") + (n.emailBody !== i ? "&amp;body=" + n.emailBody : "")) };
        var r = function() {
                var t = e("<div>"),
                    i = ["calc", "-webkit-calc", "-moz-calc"];
                e("body").append(t);
                for (var r = 0; r < i.length; r++)
                    if (t.css("width", i[r] + "(1px)"), 1 === t.width()) { n.calc = i[r];
                        break }
                t.remove() },
            s = function(t) {
                if (t !== i && null !== t) {
                    if (null === t.match(/%[0-9a-f]{2}/i)) return encodeURIComponent(t);
                    t = decodeURIComponent(t), s(t) } },
            o = function() { e(".rrssb-buttons").each(function() {
                    var t = e(this),
                        i = e("li:visible", t),
                        n = i.length,
                        r = 100 / n;
                    i.css("width", r + "%").attr("data-initwidth", r) }) },
            a = function() { e(".rrssb-buttons").each(function() {
                    var t = e(this),
                        i = t.width(),
                        n = e("li", t).not(".small").first().width();
                    n > 170 && e("li.small", t).length < 1 ? t.addClass("large-format") : t.removeClass("large-format"), 200 > i ? t.removeClass("small-format").addClass("tiny-format") : t.removeClass("tiny-format") }) },
            l = function() { e(".rrssb-buttons").each(function() {
                    var t = e(this),
                        i = e("li", t),
                        n = i.filter(".small"),
                        r = 0,
                        s = 0,
                        o = n.first(),
                        a = parseFloat(o.attr("data-size")) + 55,
                        l = n.length;
                    if (l === i.length) {
                        var u = 42 * l,
                            c = t.width();
                        c > u + a && (t.removeClass("small-format"), n.first().removeClass("small"), d()) } else { i.not(".small").each(function() {
                            var t = e(this),
                                i = parseFloat(t.attr("data-size")) + 55,
                                n = parseFloat(t.width());
                            r += n, s += i });
                        var h = r - s;
                        h > a && (o.removeClass("small"), d()) } }) },
            u = function(t) { e(".rrssb-buttons").each(function() {
                    var t = e(this),
                        i = e("li", t);
                    e(i.get().reverse()).each(function(t, n) {
                        var r = e(this);
                        if (r.hasClass("small") === !1) {
                            var s = parseFloat(r.attr("data-size")) + 55,
                                o = parseFloat(r.width());
                            if (s > o) {
                                var a = i.not(".small").last();
                                e(a).addClass("small"), d() } }--n || l() }) }), t === !0 && h(d) },
            d = function() { e(".rrssb-buttons").each(function() {
                    var t, i, r, s, a, l = e(this),
                        u = e("li", l),
                        d = u.filter(".small"),
                        c = d.length;
                    c > 0 && c !== u.length ? (l.removeClass("small-format"), d.css("width", "42px"), r = 42 * c, t = u.not(".small").length, i = 100 / t, a = r / t, n.calc === !1 ? (s = (l.innerWidth() - 1) / t - a, s = Math.floor(1e3 * s) / 1e3, s += "px") : s = n.calc + "(" + i + "% - " + a + "px)", u.not(".small").css("width", s)) : c === u.length ? (l.addClass("small-format"), o()) : (l.removeClass("small-format"), o()) }), a() },
            c = function() { e(".rrssb-buttons").each(function(t) { e(this).addClass("rrssb-" + (t + 1)) }), r(), o(), e(".rrssb-buttons li .rrssb-text").each(function() {
                    var t = e(this),
                        i = t.width();
                    t.closest("li").attr("data-size", i) }), u(!0) },
            h = function(t) { e(".rrssb-buttons li.small").removeClass("small"), u(), t() },
            p = function(e, n, r, s) {
                var o = t.screenLeft !== i ? t.screenLeft : screen.left,
                    a = t.screenTop !== i ? t.screenTop : screen.top,
                    l = t.innerWidth ? t.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                    u = t.innerHeight ? t.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                    d = l / 2 - r / 2 + o,
                    c = u / 3 - s / 3 + a,
                    h = t.open(e, n, "scrollbars=yes, width=" + r + ", height=" + s + ", top=" + c + ", left=" + d);
                t.focus && h.focus() },
            f = function() {
                var t = {};
                return function(e, i, n) { n || (n = "Don't call this twice without a uniqueId"), t[n] && clearTimeout(t[n]), t[n] = setTimeout(e, i) } }();
        e(document).ready(function() { e(document).on("click", ".rrssb-buttons a.popup", {}, function(t) {
                var i = e(this);
                p(i.attr("href"), i.find(".rrssb-text").html(), 580, 470), t.preventDefault() }), e(t).resize(function() { h(d), f(function() { h(d) }, 200, "finished resizing") }), c() }), t.rrssbInit = c }(window, jQuery),
    function() {
        var t;
        t = function() {
                function t(t, e) {
                    var i, n;
                    if (this.options = { target: "instafeed", get: "popular", resolution: "thumbnail", sortBy: "none", links: !0, mock: !1, useHttp: !1 }, "object" == typeof t)
                        for (i in t) n = t[i], this.options[i] = n;
                    this.context = null != e ? e : this, this.unique = this._genKey() }
                return t.prototype.hasNext = function() {
                    return "string" == typeof this.context.nextUrl && this.context.nextUrl.length > 0 }, t.prototype.next = function() {
                    return !!this.hasNext() && this.run(this.context.nextUrl) }, t.prototype.run = function(e) {
                    var i, n, r;
                    if ("string" != typeof this.options.clientId && "string" != typeof this.options.accessToken) throw new Error("Missing clientId or accessToken.");
                    if ("string" != typeof this.options.accessToken && "string" != typeof this.options.clientId) throw new Error("Missing clientId or accessToken.");
                    return null != this.options.before && "function" == typeof this.options.before && this.options.before.call(this), "undefined" != typeof document && null !== document && (r = document.createElement("script"), r.id = "instafeed-fetcher", r.src = e || this._buildUrl(), i = document.getElementsByTagName("head"), i[0].appendChild(r), n = "instafeedCache" + this.unique, window[n] = new t(this.options, this), window[n].unique = this.unique), !0 }, t.prototype.parse = function(t) {
                    var e, i, n, r, s, o, a, l, u, d, c, h, p, f, m, g, y, v, b, w, k, T, S, C, D, x, E, M, _, A, F, j, N;
                    if ("object" != typeof t) {
                        if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "Invalid JSON data"), !1;
                        throw new Error("Invalid JSON response") }
                    if (200 !== t.meta.code) {
                        if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, t.meta.error_message), !1;
                        throw new Error("Error from Instagram: " + t.meta.error_message) }
                    if (0 === t.data.length) {
                        if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "No images were returned from Instagram"), !1;
                        throw new Error("No images were returned from Instagram") }
                    if (null != this.options.success && "function" == typeof this.options.success && this.options.success.call(this, t), this.context.nextUrl = "", null != t.pagination && (this.context.nextUrl = t.pagination.next_url), "none" !== this.options.sortBy) switch (F = "random" === this.options.sortBy ? ["", "random"] : this.options.sortBy.split("-"), A = "least" === F[0], F[1]) {
                        case "random":
                            t.data.sort(function() {
                                return .5 - Math.random() });
                            break;
                        case "recent":
                            t.data = this._sortBy(t.data, "created_time", A);
                            break;
                        case "liked":
                            t.data = this._sortBy(t.data, "likes.count", A);
                            break;
                        case "commented":
                            t.data = this._sortBy(t.data, "comments.count", A);
                            break;
                        default:
                            throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.") }
                    if ("undefined" != typeof document && null !== document && this.options.mock === !1) {
                        if (g = t.data, _ = parseInt(this.options.limit, 10), null != this.options.limit && g.length > _ && (g = g.slice(0, _)), a = document.createDocumentFragment(), null != this.options.filter && "function" == typeof this.options.filter && (g = this._filter(g, this.options.filter)), null != this.options.template && "string" == typeof this.options.template) {
                            for (u = "", f = "", w = "", N = document.createElement("div"), c = 0, D = g.length; c < D; c++) {
                                if (h = g[c], p = h.images[this.options.resolution], "object" != typeof p) throw o = "No image found for resolution: " + this.options.resolution + ".", new Error(o);
                                k = p.width, v = p.height, b = "square", k > v && (b = "landscape"), k < v && (b = "portrait"), m = p.url, d = window.location.protocol.indexOf("http") >= 0, d && !this.options.useHttp && (m = m.replace(/https?:\/\//, "//")), f = this._makeTemplate(this.options.template, { model: h, id: h.id, link: h.link, type: h.type, image: m, width: k, height: v, orientation: b, caption: this._getObjectProperty(h, "caption.text"), likes: h.likes.count, comments: h.comments.count, location: this._getObjectProperty(h, "location.name") }), u += f }
                            for (N.innerHTML = u, r = [], n = 0, i = N.childNodes.length; n < i;) r.push(N.childNodes[n]), n += 1;
                            for (S = 0, x = r.length; S < x; S++) M = r[S], a.appendChild(M) } else
                            for (C = 0, E = g.length; C < E; C++) {
                                if (h = g[C], y = document.createElement("img"), p = h.images[this.options.resolution], "object" != typeof p) throw o = "No image found for resolution: " + this.options.resolution + ".", new Error(o);
                                m = p.url, d = window.location.protocol.indexOf("http") >= 0, d && !this.options.useHttp && (m = m.replace(/https?:\/\//, "//")), y.src = m, this.options.links === !0 ? (e = document.createElement("a"), e.href = h.link, e.appendChild(y), a.appendChild(e)) : a.appendChild(y) }
                        if (j = this.options.target, "string" == typeof j && (j = document.getElementById(j)), null == j) throw o = 'No element with id="' + this.options.target + '" on page.', new Error(o);
                        j.appendChild(a), l = document.getElementsByTagName("head")[0], l.removeChild(document.getElementById("instafeed-fetcher")), T = "instafeedCache" + this.unique, window[T] = void 0;
                        try { delete window[T] } catch (t) { s = t } }
                    return null != this.options.after && "function" == typeof this.options.after && this.options.after.call(this), !0 }, t.prototype._buildUrl = function() {
                    var t, e, i;
                    switch (t = "https://api.instagram.com/v1", this.options.get) {
                        case "popular":
                            e = "media/popular";
                            break;
                        case "tagged":
                            if (!this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
                            e = "tags/" + this.options.tagName + "/media/recent";
                            break;
                        case "location":
                            if (!this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
                            e = "locations/" + this.options.locationId + "/media/recent";
                            break;
                        case "user":
                            if (!this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
                            e = "users/" + this.options.userId + "/media/recent";
                            break;
                        default:
                            throw new Error("Invalid option for get: '" + this.options.get + "'.") }
                    return i = t + "/" + e, i += null != this.options.accessToken ? "?access_token=" + this.options.accessToken : "?client_id=" + this.options.clientId, null != this.options.limit && (i += "&count=" + this.options.limit), i += "&callback=instafeedCache" + this.unique + ".parse" }, t.prototype._genKey = function() {
                    var t;
                    return t = function() {
                        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1) }, "" + t() + t() + t() + t() }, t.prototype._makeTemplate = function(t, e) {
                    var i, n, r, s, o;
                    for (n = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, i = t; n.test(i);) s = i.match(n)[1], o = null != (r = this._getObjectProperty(e, s)) ? r : "", i = i.replace(n, function() {
                        return "" + o });
                    return i }, t.prototype._getObjectProperty = function(t, e) {
                    var i, n;
                    for (e = e.replace(/\[(\w+)\]/g, ".$1"), n = e.split("."); n.length;) {
                        if (i = n.shift(), !(null != t && i in t)) return null;
                        t = t[i] }
                    return t }, t.prototype._sortBy = function(t, e, i) {
                    var n;
                    return n = function(t, n) {
                        var r, s;
                        return r = this._getObjectProperty(t, e), s = this._getObjectProperty(n, e), i ? r > s ? 1 : -1 : r < s ? 1 : -1 }, t.sort(n.bind(this)), t }, t.prototype._filter = function(t, e) {
                    var i, n, r, s, o;
                    for (i = [], n = function(t) {
                            if (e(t)) return i.push(t) }, r = 0, o = t.length; r < o; r++) s = t[r], n(s);
                    return i }, t }(),
            function(t, e) {
                return "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : t.Instafeed = e() }(this, function() {
                return t }) }.call(this),
    function() {
        var t = !1;
        window.JQClass = function() {}, JQClass.classes = {}, JQClass.extend = function e(i) {
            function n() {!t && this._init && this._init.apply(this, arguments) }
            var r = this.prototype;
            t = !0;
            var s = new this;
            t = !1;
            for (var o in i) s[o] = "function" == typeof i[o] && "function" == typeof r[o] ? function(t, e) {
                return function() {
                    var i = this._super;
                    this._super = function(e) {
                        return r[t].apply(this, e || []) };
                    var n = e.apply(this, arguments);
                    return this._super = i, n } }(o, i[o]) : i[o];
            return n.prototype = s, n.prototype.constructor = n, n.extend = e, n } }(),
    function($) {
        function camelCase(t) {
            return t.replace(/-([a-z])/g, function(t, e) {
                return e.toUpperCase() }) }
        JQClass.classes.JQPlugin = JQClass.extend({ name: "plugin", defaultOptions: {}, regionalOptions: {}, _getters: [], _getMarker: function() {
                return "is-" + this.name }, _init: function() { $.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
                var t = camelCase(this.name);
                $[t] = this, $.fn[t] = function(e) {
                    var i = Array.prototype.slice.call(arguments, 1);
                    return $[t]._isNotChained(e, i) ? $[t][e].apply($[t], [this[0]].concat(i)) : this.each(function() {
                        if ("string" == typeof e) {
                            if ("_" === e[0] || !$[t][e]) throw "Unknown method: " + e;
                            $[t][e].apply($[t], [this].concat(i)) } else $[t]._attach(this, e) }) } }, setDefaults: function(t) { $.extend(this.defaultOptions, t || {}) }, _isNotChained: function(t, e) {
                return "option" === t && (0 === e.length || 1 === e.length && "string" == typeof e[0]) || $.inArray(t, this._getters) > -1 }, _attach: function(t, e) {
                if (t = $(t), !t.hasClass(this._getMarker())) { t.addClass(this._getMarker()), e = $.extend({}, this.defaultOptions, this._getMetadata(t), e || {});
                    var i = $.extend({ name: this.name, elem: t, options: e }, this._instSettings(t, e));
                    t.data(this.name, i), this._postAttach(t, i), this.option(t, e) } }, _instSettings: function() {
                return {} }, _postAttach: function() {}, _getMetadata: function(d) {
                try {
                    var f = d.data(this.name.toLowerCase()) || "";
                    f = f.replace(/'/g, '"'), f = f.replace(/([a-zA-Z0-9]+):/g, function(t, e, i) {
                        var n = f.substring(0, i).match(/"/g);
                        return n && n.length % 2 !== 0 ? e + ":" : '"' + e + '":' }), f = $.parseJSON("{" + f + "}");
                    for (var g in f) {
                        var h = f[g]; "string" == typeof h && h.match(/^new Date\((.*)\)$/) && (f[g] = eval(h)) }
                    return f } catch (t) {
                    return {} } }, _getInst: function(t) {
                return $(t).data(this.name) || {} }, option: function(t, e, i) { t = $(t);
                var n = t.data(this.name);
                if (!e || "string" == typeof e && null == i) {
                    var r = (n || {}).options;
                    return r && e ? r[e] : r }
                if (t.hasClass(this._getMarker())) {
                    var r = e || {}; "string" == typeof e && (r = {}, r[e] = i), this._optionsChanged(t, n, r), $.extend(n.options, r) } }, _optionsChanged: function() {}, destroy: function(t) { t = $(t), t.hasClass(this._getMarker()) && (this._preDestroy(t, this._getInst(t)), t.removeData(this.name).removeClass(this._getMarker())) }, _preDestroy: function() {} }), $.JQPlugin = { createPlugin: function(t, e) { "object" == typeof t && (e = t, t = "JQPlugin"), t = camelCase(t);
                var i = camelCase(e.name);
                JQClass.classes[i] = JQClass.classes[t].extend(e), new JQClass.classes[i] } } }(jQuery),
    function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery) }(function(t) {
        var e = Array.prototype.slice,
            i = Array.prototype.splice,
            n = { topSpacing: 0, bottomSpacing: 0, className: "is-sticky", wrapperClassName: "sticky-wrapper", center: !1, getWidthFrom: "", widthFromWrapper: !0, responsiveWidth: !1 },
            r = t(window),
            s = t(document),
            o = [],
            a = r.height(),
            l = function() {
                for (var e = r.scrollTop(), i = s.height(), n = i - a, l = e > n ? n - e : 0, u = 0, d = o.length; u < d; u++) {
                    var c = o[u],
                        h = c.stickyWrapper.offset().top,
                        p = h - c.topSpacing - l;
                    if (c.stickyWrapper.css("height", c.stickyElement.outerHeight()), e <= p) null !== c.currentTop && (c.stickyElement.css({ width: "", position: "", top: "" }), c.stickyElement.parent().removeClass(c.className), c.stickyElement.trigger("sticky-end", [c]), c.currentTop = null);
                    else {
                        var f = i - c.stickyElement.outerHeight() - c.topSpacing - c.bottomSpacing - e - l;
                        if (f < 0 ? f += c.topSpacing : f = c.topSpacing, c.currentTop !== f) {
                            var m;
                            c.getWidthFrom ? m = t(c.getWidthFrom).width() || null : c.widthFromWrapper && (m = c.stickyWrapper.width()), null == m && (m = c.stickyElement.width()), c.stickyElement.css("width", m).css("position", "fixed").css("top", f), c.stickyElement.parent().addClass(c.className), null === c.currentTop ? c.stickyElement.trigger("sticky-start", [c]) : c.stickyElement.trigger("sticky-update", [c]), c.currentTop === c.topSpacing && c.currentTop > f || null === c.currentTop && f < c.topSpacing ? c.stickyElement.trigger("sticky-bottom-reached", [c]) : null !== c.currentTop && f === c.topSpacing && c.currentTop < f && c.stickyElement.trigger("sticky-bottom-unreached", [c]), c.currentTop = f }
                        var g = c.stickyWrapper.parent(),
                            y = c.stickyElement.offset().top + c.stickyElement.outerHeight() >= g.offset().top + g.outerHeight() && c.stickyElement.offset().top <= c.topSpacing;
                        y ? c.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0) : c.stickyElement.css("position", "fixed").css("top", f).css("bottom", "") } } },
            u = function() { a = r.height();
                for (var e = 0, i = o.length; e < i; e++) {
                    var n = o[e],
                        s = null;
                    n.getWidthFrom ? n.responsiveWidth && (s = t(n.getWidthFrom).width()) : n.widthFromWrapper && (s = n.stickyWrapper.width()), null != s && n.stickyElement.css("width", s) } },
            d = { init: function(e) {
                    var i = t.extend({}, n, e);
                    return this.each(function() {
                        var e = t(this),
                            r = e.attr("id"),
                            s = r ? r + "-" + n.wrapperClassName : n.wrapperClassName,
                            a = t("<div></div>").attr("id", s).addClass(i.wrapperClassName);
                        e.wrapAll(a);
                        var l = e.parent();
                        i.center && l.css({ width: e.outerWidth(), marginLeft: "auto", marginRight: "auto" }), "right" === e.css("float") && e.css({ "float": "none" }).parent().css({ "float": "right" }), i.stickyElement = e, i.stickyWrapper = l, i.currentTop = null, o.push(i), d.setWrapperHeight(this), d.setupChangeListeners(this) }) }, setWrapperHeight: function(e) {
                    var i = t(e),
                        n = i.parent();
                    n && n.css("height", i.outerHeight()) }, setupChangeListeners: function(t) {
                    if (window.MutationObserver) {
                        var e = new window.MutationObserver(function(e) {
                            (e[0].addedNodes.length || e[0].removedNodes.length) && d.setWrapperHeight(t) });
                        e.observe(t, { subtree: !0, childList: !0 }) } else t.addEventListener("DOMNodeInserted", function() { d.setWrapperHeight(t) }, !1), t.addEventListener("DOMNodeRemoved", function() { d.setWrapperHeight(t) }, !1) }, update: l, unstick: function() {
                    return this.each(function() {
                        for (var e = this, n = t(e), r = -1, s = o.length; s-- > 0;) o[s].stickyElement.get(0) === e && (i.call(o, s, 1), r = s);
                        r !== -1 && (n.unwrap(), n.css({ width: "", position: "", top: "", "float": "" })) }) } };
        window.addEventListener ? (window.addEventListener("scroll", l, !1), window.addEventListener("resize", u, !1)) : window.attachEvent && (window.attachEvent("onscroll", l),
            window.attachEvent("onresize", u)), t.fn.sticky = function(i) {
            return d[i] ? d[i].apply(this, e.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.sticky") : d.init.apply(this, arguments) }, t.fn.unstick = function(i) {
            return d[i] ? d[i].apply(this, e.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.sticky") : d.unstick.apply(this, arguments) }, t(function() { setTimeout(l, 0) })
    }),
    function(t, e, i) { t.fn.backstretch = function(n, r) {
            return (n === i || 0 === n.length) && t.error("No images were supplied for Backstretch"), 0 === t(e).scrollTop() && e.scrollTo(0, 0), this.each(function() {
                var e = t(this),
                    i = e.data("backstretch");
                if (i) {
                    if ("string" == typeof n && "function" == typeof i[n]) return void i[n](r);
                    r = t.extend(i.options, r), i.destroy(!0) }
                i = new s(this, n, r), e.data("backstretch", i) }) }, t.backstretch = function(e, i) {
            return t("body").backstretch(e, i).data("backstretch") }, t.expr[":"].backstretch = function(e) {
            return t(e).data("backstretch") !== i }, t.fn.backstretch.defaults = { centeredX: !0, centeredY: !0, duration: 5e3, fade: 0 };
        var n = { left: 0, top: 0, overflow: "hidden", margin: 0, padding: 0, height: "100%", width: "100%", zIndex: -999999 },
            r = { position: "absolute", display: "none", margin: 0, padding: 0, border: "none", width: "auto", height: "auto", maxHeight: "none", maxWidth: "none", zIndex: -999999 },
            s = function(i, r, s) { this.options = t.extend({}, t.fn.backstretch.defaults, s || {}), this.images = t.isArray(r) ? r : [r], t.each(this.images, function() { t("<img />")[0].src = this }), this.isBody = i === document.body, this.$container = t(i), this.$root = this.isBody ? t(o ? e : document) : this.$container, i = this.$container.children(".backstretch").first(), this.$wrap = i.length ? i : t('<div class="backstretch"></div>').css(n).appendTo(this.$container), this.isBody || (i = this.$container.css("position"), r = this.$container.css("zIndex"), this.$container.css({ position: "static" === i ? "relative" : i, zIndex: "auto" === r ? 0 : r, background: "none" }), this.$wrap.css({ zIndex: -999998 })), this.$wrap.css({ position: this.isBody && o ? "fixed" : "absolute" }), this.index = 0, this.show(this.index), t(e).on("resize.backstretch", t.proxy(this.resize, this)).on("orientationchange.backstretch", t.proxy(function() { this.isBody && 0 === e.pageYOffset && (e.scrollTo(0, 1), this.resize()) }, this)) };
        s.prototype = { resize: function() {
                try {
                    var t, i = { left: 0, top: 0 },
                        n = this.isBody ? this.$root.width() : this.$root.innerWidth(),
                        r = n,
                        s = this.isBody ? e.innerHeight ? e.innerHeight : this.$root.height() : this.$root.innerHeight(),
                        o = r / this.$img.data("ratio");
                    o >= s ? (t = (o - s) / 2, this.options.centeredY && (i.top = "-" + t + "px")) : (o = s, r = o * this.$img.data("ratio"), t = (r - n) / 2, this.options.centeredX && (i.left = "-" + t + "px")), this.$wrap.css({ width: n, height: s }).find("img:not(.deleteable)").css({ width: r, height: o }).css(i) } catch (t) {}
                return this }, show: function(e) {
                if (!(Math.abs(e) > this.images.length - 1)) {
                    var i = this,
                        n = i.$wrap.find("img").addClass("deleteable"),
                        s = { relatedTarget: i.$container[0] };
                    return i.$container.trigger(t.Event("backstretch.before", s), [i, e]), this.index = e, clearInterval(i.interval), i.$img = t("<img />").css(r).bind("load", function(r) {
                        var o = this.width || t(r.target).width();
                        r = this.height || t(r.target).height(), t(this).data("ratio", o / r), t(this).fadeIn(i.options.speed || i.options.fade, function() { n.remove(), i.paused || i.cycle(), t(["after", "show"]).each(function() { i.$container.trigger(t.Event("backstretch." + this, s), [i, e]) }) }), i.resize() }).appendTo(i.$wrap), i.$img.attr("src", i.images[e]), i } }, next: function() {
                return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0) }, prev: function() {
                return this.show(0 === this.index ? this.images.length - 1 : this.index - 1) }, pause: function() {
                return this.paused = !0, this }, resume: function() {
                return this.paused = !1, this.next(), this }, cycle: function() {
                return 1 < this.images.length && (clearInterval(this.interval), this.interval = setInterval(t.proxy(function() { this.paused || this.next() }, this), this.options.duration)), this }, destroy: function(i) { t(e).off("resize.backstretch orientationchange.backstretch"), clearInterval(this.interval), i || this.$wrap.remove(), this.$container.removeData("backstretch") } };
        var o, a = navigator.userAgent,
            l = navigator.platform,
            u = a.match(/AppleWebKit\/([0-9]+)/),
            u = !!u && u[1],
            d = a.match(/Fennec\/([0-9]+)/),
            d = !!d && d[1],
            c = a.match(/Opera Mobi\/([0-9]+)/),
            h = !!c && c[1],
            p = a.match(/MSIE ([0-9]+)/),
            p = !!p && p[1];
        o = !((-1 < l.indexOf("iPhone") || -1 < l.indexOf("iPad") || -1 < l.indexOf("iPod")) && u && 534 > u || e.operamini && "[object OperaMini]" === {}.toString.call(e.operamini) || c && 7458 > h || -1 < a.indexOf("Android") && u && 533 > u || d && 6 > d || "palmGetResource" in e && u && 534 > u || -1 < a.indexOf("MeeGo") && -1 < a.indexOf("NokiaBrowser/8.5.0") || p && 6 >= p) }(jQuery, window),
    function(t) { "object" == typeof exports && exports && "object" == typeof module && module && module.exports === exports ? t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery) }(function(t) {
        function e(t) {
            var e = t[0];
            return e.offsetWidth > 0 && e.offsetHeight > 0 }

        function i(e) {
            if (e.minTime && (e.minTime = b(e.minTime)), e.maxTime && (e.maxTime = b(e.maxTime)), e.durationTime && "function" != typeof e.durationTime && (e.durationTime = b(e.durationTime)), "now" == e.scrollDefault) e.scrollDefault = function() {
                return e.roundingFunction(b(new Date), e) };
            else if (e.scrollDefault && "function" != typeof e.scrollDefault) {
                var i = e.scrollDefault;
                e.scrollDefault = function() {
                    return e.roundingFunction(b(i), e) } } else e.minTime && (e.scrollDefault = function() {
                return e.roundingFunction(e.minTime, e) });
            if ("string" === t.type(e.timeFormat) && e.timeFormat.match(/[gh]/) && (e._twelveHourTime = !0), e.showOnFocus === !1 && e.showOn.indexOf("focus") != -1 && e.showOn.splice(e.showOn.indexOf("focus"), 1), e.disableTimeRanges.length > 0) {
                for (var n in e.disableTimeRanges) e.disableTimeRanges[n] = [b(e.disableTimeRanges[n][0]), b(e.disableTimeRanges[n][1])];
                e.disableTimeRanges = e.disableTimeRanges.sort(function(t, e) {
                    return t[0] - e[0] });
                for (var n = e.disableTimeRanges.length - 1; n > 0; n--) e.disableTimeRanges[n][0] <= e.disableTimeRanges[n - 1][1] && (e.disableTimeRanges[n - 1] = [Math.min(e.disableTimeRanges[n][0], e.disableTimeRanges[n - 1][0]), Math.max(e.disableTimeRanges[n][1], e.disableTimeRanges[n - 1][1])], e.disableTimeRanges.splice(n, 1)) }
            return e }

        function n(e) {
            var i = e.data("timepicker-settings"),
                n = e.data("timepicker-list");
            if (n && n.length && (n.remove(), e.data("timepicker-list", !1)), i.useSelect) { n = t("<select />", { "class": "ui-timepicker-select" });
                var o = n } else { n = t("<ul />", { "class": "ui-timepicker-list" });
                var o = t("<div />", { "class": "ui-timepicker-wrapper", tabindex: -1 });
                o.css({ display: "none", position: "absolute" }).append(n) }
            if (i.noneOption)
                if (i.noneOption === !0 && (i.noneOption = i.useSelect ? "Time..." : "None"), t.isArray(i.noneOption)) {
                    for (var l in i.noneOption)
                        if (parseInt(l, 10) == l) {
                            var d = r(i.noneOption[l], i.useSelect);
                            n.append(d) } } else {
                    var d = r(i.noneOption, i.useSelect);
                    n.append(d) }
            if (i.className && o.addClass(i.className), (null !== i.minTime || null !== i.durationTime) && i.showDuration) { "function" == typeof i.step ? "function" : i.step;
                o.addClass("ui-timepicker-with-duration"), o.addClass("ui-timepicker-step-" + i.step) }
            var c = i.minTime; "function" == typeof i.durationTime ? c = b(i.durationTime()) : null !== i.durationTime && (c = i.durationTime);
            var p = null !== i.minTime ? i.minTime : 0,
                f = null !== i.maxTime ? i.maxTime : p + w - 1;
            f < p && (f += w), f === w - 1 && "string" === t.type(i.timeFormat) && i.show2400 && (f = w);
            var m = i.disableTimeRanges,
                k = 0,
                S = m.length,
                C = i.step; "function" != typeof C && (C = function() {
                return i.step });
            for (var l = p, D = 0; l <= f; D++, l += 60 * C(D)) {
                var x = l,
                    E = v(x, i);
                if (i.useSelect) {
                    var M = t("<option />", { value: E });
                    M.text(E) } else {
                    var M = t("<li />");
                    M.addClass(x % 86400 < 43200 ? "ui-timepicker-am" : "ui-timepicker-pm"), M.data("time", x <= 86400 ? x : x % 86400), M.text(E) }
                if ((null !== i.minTime || null !== i.durationTime) && i.showDuration) {
                    var _ = y(l - c, i.step);
                    if (i.useSelect) M.text(M.text() + " (" + _ + ")");
                    else {
                        var A = t("<span />", { "class": "ui-timepicker-duration" });
                        A.text(" (" + _ + ")"), M.append(A) } }
                k < S && (x >= m[k][1] && (k += 1), m[k] && x >= m[k][0] && x < m[k][1] && (i.useSelect ? M.prop("disabled", !0) : M.addClass("ui-timepicker-disabled"))), n.append(M) }
            if (o.data("timepicker-input", e), e.data("timepicker-list", o), i.useSelect) e.val() && n.val(s(b(e.val()), i)), n.on("focus", function() { t(this).data("timepicker-input").trigger("showTimepicker") }), n.on("blur", function() { t(this).data("timepicker-input").trigger("hideTimepicker") }), n.on("change", function() { h(e, t(this).val(), "select") }), h(e, n.val(), "initial"), e.hide().after(n);
            else {
                var F = i.appendTo; "string" == typeof F ? F = t(F) : "function" == typeof F && (F = F(e)), F.append(o), u(e, n), n.on("mousedown click", "li", function() { e.off("focus.timepicker"), e.on("focus.timepicker-ie-hack", function() { e.off("focus.timepicker-ie-hack"), e.on("focus.timepicker", T.show) }), a(e) || e[0].focus(), n.find("li").removeClass("ui-timepicker-selected"), t(this).addClass("ui-timepicker-selected"), g(e) && (e.trigger("hideTimepicker"), n.on("mouseup.timepicker click.timepicker", "li", function() { n.off("mouseup.timepicker click.timepicker"), o.hide() })) }) } }

        function r(e, i) {
            var n, r, s;
            return "object" == typeof e ? (n = e.label, r = e.className, s = e.value) : "string" == typeof e ? n = e : t.error("Invalid noneOption value"), i ? t("<option />", { value: s, "class": r, text: n }) : t("<li />", { "class": r, text: n }).data("time", String(s)) }

        function s(t, e) {
            if (t = e.roundingFunction(t, e), null !== t) return v(t, e) }

        function o(e) {
            if (e.target != window) {
                var i = t(e.target);
                i.closest(".ui-timepicker-input").length || i.closest(".ui-timepicker-wrapper").length || (T.hide(), t(document).unbind(".ui-timepicker"), t(window).unbind(".ui-timepicker")) } }

        function a(t) {
            var e = t.data("timepicker-settings");
            return (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && e.disableTouchKeyboard }

        function l(e, i, n) {
            if (!n && 0 !== n) return !1;
            var r = e.data("timepicker-settings"),
                s = !1,
                n = r.roundingFunction(n, r);
            return i.find("li").each(function(e, i) {
                var r = t(i);
                if ("number" == typeof r.data("time")) return r.data("time") == n ? (s = r, !1) : void 0 }), s }

        function u(t, e) { e.find("li").removeClass("ui-timepicker-selected");
            var i = b(c(t), t.data("timepicker-settings"));
            if (null !== i) {
                var n = l(t, e, i);
                if (n) {
                    var r = n.offset().top - e.offset().top;
                    (r + n.outerHeight() > e.outerHeight() || r < 0) && e.scrollTop(e.scrollTop() + n.position().top - n.outerHeight()), n.addClass("ui-timepicker-selected") } } }

        function d(e, i) {
            if ("" !== this.value && "timepicker" != i) {
                var n = t(this);
                if (!n.is(":focus") || e && "change" == e.type) {
                    var r = n.data("timepicker-settings"),
                        s = b(this.value, r);
                    if (null === s) return void n.trigger("timeFormatError");
                    var o = !1;
                    null !== r.minTime && null !== r.maxTime && (s < r.minTime || s > r.maxTime) && (o = !0), t.each(r.disableTimeRanges, function() {
                        if (s >= this[0] && s < this[1]) return o = !0, !1 }), r.forceRoundTime && (s = r.roundingFunction(s, r));
                    var a = v(s, r);
                    o ? h(n, a, "error") && n.trigger("timeRangeError") : h(n, a) } } }

        function c(t) {
            return t.is("input") ? t.val() : t.data("ui-timepicker-value") }

        function h(t, e, i) {
            if (t.is("input")) { t.val(e);
                var n = t.data("timepicker-settings");
                n.useSelect && "select" != i && "initial" != i && t.data("timepicker-list").val(s(b(e), n)) }
            return t.data("ui-timepicker-value") != e ? (t.data("ui-timepicker-value", e), "select" == i ? t.trigger("selectTime").trigger("changeTime").trigger("change", "timepicker") : "error" != i && t.trigger("changeTime"), !0) : (t.trigger("selectTime"), !1) }

        function p(t) {
            switch (t.keyCode) {
                case 13:
                case 9:
                    return;
                default:
                    t.preventDefault() } }

        function f(i) {
            var n = t(this),
                r = n.data("timepicker-list");
            if (!r || !e(r)) {
                if (40 != i.keyCode) return !0;
                T.show.call(n.get(0)), r = n.data("timepicker-list"), a(n) || n.focus() }
            switch (i.keyCode) {
                case 13:
                    return g(n) && (d.call(n.get(0), { type: "change" }), T.hide.apply(this)), i.preventDefault(), !1;
                case 38:
                    var s = r.find(".ui-timepicker-selected");
                    return s.length ? s.is(":first-child") || (s.removeClass("ui-timepicker-selected"), s.prev().addClass("ui-timepicker-selected"), s.prev().position().top < s.outerHeight() && r.scrollTop(r.scrollTop() - s.outerHeight())) : (r.find("li").each(function(e, i) {
                        if (t(i).position().top > 0) return s = t(i), !1 }), s.addClass("ui-timepicker-selected")), !1;
                case 40:
                    return s = r.find(".ui-timepicker-selected"), 0 === s.length ? (r.find("li").each(function(e, i) {
                        if (t(i).position().top > 0) return s = t(i), !1 }), s.addClass("ui-timepicker-selected")) : s.is(":last-child") || (s.removeClass("ui-timepicker-selected"), s.next().addClass("ui-timepicker-selected"), s.next().position().top + 2 * s.outerHeight() > r.outerHeight() && r.scrollTop(r.scrollTop() + s.outerHeight())), !1;
                case 27:
                    r.find("li").removeClass("ui-timepicker-selected"), T.hide();
                    break;
                case 9:
                    T.hide();
                    break;
                default:
                    return !0 } }

        function m(i) {
            var n = t(this),
                r = n.data("timepicker-list"),
                s = n.data("timepicker-settings");
            if (!r || !e(r) || s.disableTextInput) return !0;
            switch (i.keyCode) {
                case 96:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                case 65:
                case 77:
                case 80:
                case 186:
                case 8:
                case 46:
                    s.typeaheadHighlight ? u(n, r) : r.hide() } }

        function g(t) {
            var e = t.data("timepicker-settings"),
                i = t.data("timepicker-list"),
                n = null,
                r = i.find(".ui-timepicker-selected");
            return !r.hasClass("ui-timepicker-disabled") && (r.length && (n = r.data("time")), null !== n && ("string" != typeof n && (n = v(n, e)), h(t, n, "select")), !0) }

        function y(t, e) { t = Math.abs(t);
            var i, n, r = Math.round(t / 60),
                s = [];
            return r < 60 ? s = [r, k.mins] : (i = Math.floor(r / 60), n = r % 60, 30 == e && 30 == n && (i += k.decimal + 5), s.push(i), s.push(1 == i ? k.hr : k.hrs), 30 != e && n && (s.push(n), s.push(k.mins))), s.join(" ") }

        function v(e, i) {
            if ("number" != typeof e) return null;
            var n = parseInt(e % 60),
                r = parseInt(e / 60 % 60),
                s = parseInt(e / 3600 % 24),
                o = new Date(1970, 0, 2, s, r, n, 0);
            if (isNaN(o.getTime())) return null;
            if ("function" === t.type(i.timeFormat)) return i.timeFormat(o);
            for (var a, l, u = "", d = 0; d < i.timeFormat.length; d++) switch (l = i.timeFormat.charAt(d)) {
                case "a":
                    u += o.getHours() > 11 ? k.pm : k.am;
                    break;
                case "A":
                    u += o.getHours() > 11 ? k.PM : k.AM;
                    break;
                case "g":
                    a = o.getHours() % 12, u += 0 === a ? "12" : a;
                    break;
                case "G":
                    a = o.getHours(), e === w && (a = i.show2400 ? 24 : 0), u += a;
                    break;
                case "h":
                    a = o.getHours() % 12, 0 !== a && a < 10 && (a = "0" + a), u += 0 === a ? "12" : a;
                    break;
                case "H":
                    a = o.getHours(), e === w && (a = i.show2400 ? 24 : 0), u += a > 9 ? a : "0" + a;
                    break;
                case "i":
                    var r = o.getMinutes();
                    u += r > 9 ? r : "0" + r;
                    break;
                case "s":
                    n = o.getSeconds(), u += n > 9 ? n : "0" + n;
                    break;
                case "\\":
                    d++, u += i.timeFormat.charAt(d);
                    break;
                default:
                    u += l }
            return u }

        function b(t, e) {
            if ("" === t || null === t) return null;
            if ("object" == typeof t) return 3600 * t.getHours() + 60 * t.getMinutes() + t.getSeconds();
            if ("string" != typeof t) return t;
            t = t.toLowerCase().replace(/[\s\.]/g, ""), "a" != t.slice(-1) && "p" != t.slice(-1) || (t += "m");
            var i = "(" + k.am.replace(".", "") + "|" + k.pm.replace(".", "") + "|" + k.AM.replace(".", "") + "|" + k.PM.replace(".", "") + ")?",
                n = new RegExp("^" + i + "([0-9]?[0-9])\\W?([0-5][0-9])?\\W?([0-5][0-9])?" + i + "$"),
                r = t.match(n);
            if (!r) return null;
            var s = parseInt(1 * r[2], 10);
            if (s > 24) {
                if (e && e.wrapHours === !1) return null;
                s %= 24 }
            var o = r[1] || r[5],
                a = s;
            if (s <= 12 && o) {
                var l = o == k.pm || o == k.PM;
                a = 12 == s ? l ? 12 : 0 : s + (l ? 12 : 0) }
            var u = 1 * r[3] || 0,
                d = 1 * r[4] || 0,
                c = 3600 * a + 60 * u + d;
            if (s < 12 && !o && e && e._twelveHourTime && e.scrollDefault) {
                var h = c - e.scrollDefault();
                h < 0 && h >= w / -2 && (c = (c + w / 2) % w) }
            return c }
        var w = 86400,
            k = { am: "am", pm: "pm", AM: "AM", PM: "PM", decimal: ".", mins: "mins", hr: "hr", hrs: "hrs" },
            T = { init: function(e) {
                    return this.each(function() {
                        var r = t(this),
                            s = [];
                        for (var o in t.fn.timepicker.defaults) r.data(o) && (s[o] = r.data(o));
                        var a = t.extend({}, t.fn.timepicker.defaults, s, e);
                        if (a.lang && (k = t.extend(k, a.lang)), a = i(a), r.data("timepicker-settings", a), r.addClass("ui-timepicker-input"), a.useSelect) n(r);
                        else {
                            if (r.prop("autocomplete", "off"), a.showOn)
                                for (var l in a.showOn) r.on(a.showOn[l] + ".timepicker", T.show);
                            r.on("change.timepicker", d), r.on("keydown.timepicker", f), r.on("keyup.timepicker", m), a.disableTextInput && r.on("keydown.timepicker", p), d.call(r.get(0)) } }) }, show: function(i) {
                    var r = t(this),
                        s = r.data("timepicker-settings");
                    if (i && i.preventDefault(), s.useSelect) return void r.data("timepicker-list").focus();
                    a(r) && r.blur();
                    var d = r.data("timepicker-list");
                    if (!r.prop("readonly") && (d && 0 !== d.length && "function" != typeof s.durationTime || (n(r), d = r.data("timepicker-list")), !e(d))) { r.data("ui-timepicker-value", r.val()), u(r, d), T.hide(), d.show();
                        var h = {};
                        s.orientation.match(/r/) ? h.left = r.offset().left + r.outerWidth() - d.outerWidth() + parseInt(d.css("marginLeft").replace("px", ""), 10) : h.left = r.offset().left + parseInt(d.css("marginLeft").replace("px", ""), 10);
                        var p;
                        p = s.orientation.match(/t/) ? "t" : s.orientation.match(/b/) ? "b" : r.offset().top + r.outerHeight(!0) + d.outerHeight() > t(window).height() + t(window).scrollTop() ? "t" : "b", "t" == p ? (d.addClass("ui-timepicker-positioned-top"), h.top = r.offset().top - d.outerHeight() + parseInt(d.css("marginTop").replace("px", ""), 10)) : (d.removeClass("ui-timepicker-positioned-top"), h.top = r.offset().top + r.outerHeight() + parseInt(d.css("marginTop").replace("px", ""), 10)), d.offset(h);
                        var f = d.find(".ui-timepicker-selected");
                        if (!f.length) {
                            var m = b(c(r));
                            null !== m ? f = l(r, d, m) : s.scrollDefault && (f = l(r, d, s.scrollDefault())) }
                        if (f && f.length) {
                            var g = d.scrollTop() + f.position().top - f.outerHeight();
                            d.scrollTop(g) } else d.scrollTop(0);
                        return s.stopScrollPropagation && t(document).on("wheel.ui-timepicker", ".ui-timepicker-wrapper", function(e) { e.preventDefault();
                            var i = t(this).scrollTop();
                            t(this).scrollTop(i + e.originalEvent.deltaY) }), t(document).on("touchstart.ui-timepicker mousedown.ui-timepicker", o), t(window).on("resize.ui-timepicker", o), s.closeOnWindowScroll && t(document).on("scroll.ui-timepicker", o), r.trigger("showTimepicker"), this } }, hide: function() {
                    var i = t(this),
                        n = i.data("timepicker-settings");
                    return n && n.useSelect && i.blur(), t(".ui-timepicker-wrapper").each(function() {
                        var i = t(this);
                        if (e(i)) {
                            var n = i.data("timepicker-input"),
                                r = n.data("timepicker-settings");
                            r && r.selectOnBlur && g(n), i.hide(), n.trigger("hideTimepicker") } }), this }, option: function(e, r) {
                    return "string" == typeof e && "undefined" == typeof r ? t(this).data("timepicker-settings")[e] : this.each(function() {
                        var s = t(this),
                            o = s.data("timepicker-settings"),
                            a = s.data("timepicker-list"); "object" == typeof e ? o = t.extend(o, e) : "string" == typeof e && (o[e] = r), o = i(o), s.data("timepicker-settings", o), a && (a.remove(), s.data("timepicker-list", !1)), o.useSelect && n(s) }) }, getSecondsFromMidnight: function() {
                    return b(c(this)) }, getTime: function(t) {
                    var e = this,
                        i = c(e);
                    if (!i) return null;
                    var n = b(i);
                    if (null === n) return null;
                    t || (t = new Date);
                    var r = new Date(t);
                    return r.setHours(n / 3600), r.setMinutes(n % 3600 / 60), r.setSeconds(n % 60), r.setMilliseconds(0), r }, isVisible: function() {
                    var t = this,
                        i = t.data("timepicker-list");
                    return !(!i || !e(i)) }, setTime: function(t) {
                    var e = this,
                        i = e.data("timepicker-settings");
                    if (i.forceRoundTime) var n = s(b(t), i);
                    else var n = v(b(t), i);
                    return t && null === n && i.noneOption && (n = t), h(e, n), e.data("timepicker-list") && u(e, e.data("timepicker-list")), this }, remove: function() {
                    var t = this;
                    if (t.hasClass("ui-timepicker-input")) {
                        var e = t.data("timepicker-settings");
                        return t.removeAttr("autocomplete", "off"), t.removeClass("ui-timepicker-input"), t.removeData("timepicker-settings"), t.off(".timepicker"), t.data("timepicker-list") && t.data("timepicker-list").remove(), e.useSelect && t.show(), t.removeData("timepicker-list"), this } } };
        t.fn.timepicker = function(e) {
            return this.length ? T[e] ? this.hasClass("ui-timepicker-input") ? T[e].apply(this, Array.prototype.slice.call(arguments, 1)) : this : "object" != typeof e && e ? void t.error("Method " + e + " does not exist on jQuery.timepicker") : T.init.apply(this, arguments) : this }, t.fn.timepicker.defaults = { appendTo: "body", className: null, closeOnWindowScroll: !1, disableTextInput: !1, disableTimeRanges: [], disableTouchKeyboard: !1, durationTime: null, forceRoundTime: !1, maxTime: null, minTime: null, noneOption: !1, orientation: "l", roundingFunction: function(t, e) {
                if (null === t) return null;
                if ("number" != typeof e.step) return t;
                var i = t % (60 * e.step);
                return i >= 30 * e.step ? t += 60 * e.step - i : t -= i, t == w && e.show2400 ? t : t % w }, scrollDefault: null, selectOnBlur: !1, show2400: !1, showDuration: !1, showOn: ["click", "focus"], showOnFocus: !0, step: 30, stopScrollPropagation: !1, timeFormat: "g:ia", typeaheadHighlight: !0, useSelect: !1, wrapHours: !0 } }),
    function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery) }(function(t, e) {
        function i() {
            return new Date(Date.UTC.apply(Date, arguments)) }

        function n() {
            var t = new Date;
            return i(t.getFullYear(), t.getMonth(), t.getDate()) }

        function r(t, e) {
            return t.getUTCFullYear() === e.getUTCFullYear() && t.getUTCMonth() === e.getUTCMonth() && t.getUTCDate() === e.getUTCDate() }

        function s(t) {
            return function() {
                return this[t].apply(this, arguments) } }

        function o(t) {
            return t && !isNaN(t.getTime()) }

        function a(e, i) {
            function n(t, e) {
                return e.toLowerCase() }
            var r, s = t(e).data(),
                o = {},
                a = new RegExp("^" + i.toLowerCase() + "([A-Z])");
            i = new RegExp("^" + i.toLowerCase());
            for (var l in s) i.test(l) && (r = l.replace(a, n), o[r] = s[l]);
            return o }

        function l(e) {
            var i = {};
            if (g[e] || (e = e.split("-")[0], g[e])) {
                var n = g[e];
                return t.each(m, function(t, e) { e in n && (i[e] = n[e]) }), i } }
        var u = function() {
                var e = { get: function(t) {
                        return this.slice(t)[0] }, contains: function(t) {
                        for (var e = t && t.valueOf(), i = 0, n = this.length; i < n; i++)
                            if (this[i].valueOf() === e) return i;
                        return -1 }, remove: function(t) { this.splice(t, 1) }, replace: function(e) { e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e)) }, clear: function() { this.length = 0 }, copy: function() {
                        var t = new u;
                        return t.replace(this), t } };
                return function() {
                    var i = [];
                    return i.push.apply(i, arguments), t.extend(i, e), i } }(),
            d = function(e, i) { t(e).data("datepicker", this), this._process_options(i), this.dates = new u, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = t(e), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.hasInput = this.component && this.inputField.length, this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = t(y.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function(t, e) {
                    return parseInt(e) + 1 }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted), this.setDatesDisabled(this.o.datesDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show() };
        d.prototype = {
            constructor: d,
            _resolveViewName: function(t, i) {
                return 0 === t || "days" === t || "month" === t ? 0 : 1 === t || "months" === t || "year" === t ? 1 : 2 === t || "years" === t || "decade" === t ? 2 : 3 === t || "decades" === t || "century" === t ? 3 : 4 === t || "centuries" === t || "millennium" === t ? 4 : i !== e && i },
            _check_template: function(i) {
                try {
                    if (i === e || "" === i) return !1;
                    if ((i.match(/[<>]/g) || []).length <= 0) return !0;
                    var n = t(i);
                    return n.length > 0 } catch (t) {
                    return !1 } },
            _process_options: function(e) { this._o = t.extend({}, this._o, e);
                var r = this.o = t.extend({}, this._o),
                    s = r.language;
                g[s] || (s = s.split("-")[0], g[s] || (s = f.language)), r.language = s, r.startView = this._resolveViewName(r.startView, 0), r.minViewMode = this._resolveViewName(r.minViewMode, 0), r.maxViewMode = this._resolveViewName(r.maxViewMode, 4), r.startView = Math.min(r.startView, r.maxViewMode), r.startView = Math.max(r.startView, r.minViewMode), r.multidate !== !0 && (r.multidate = Number(r.multidate) || !1, r.multidate !== !1 && (r.multidate = Math.max(0, r.multidate))), r.multidateSeparator = String(r.multidateSeparator), r.weekStart %= 7, r.weekEnd = (r.weekStart + 6) % 7;
                var o = y.parseFormat(r.format);
                r.startDate !== -(1 / 0) && (r.startDate ? r.startDate instanceof Date ? r.startDate = this._local_to_utc(this._zero_time(r.startDate)) : r.startDate = y.parseDate(r.startDate, o, r.language, r.assumeNearbyYear) : r.startDate = -(1 / 0)), r.endDate !== 1 / 0 && (r.endDate ? r.endDate instanceof Date ? r.endDate = this._local_to_utc(this._zero_time(r.endDate)) : r.endDate = y.parseDate(r.endDate, o, r.language, r.assumeNearbyYear) : r.endDate = 1 / 0), r.daysOfWeekDisabled = r.daysOfWeekDisabled || [], t.isArray(r.daysOfWeekDisabled) || (r.daysOfWeekDisabled = r.daysOfWeekDisabled.split(/[,\s]*/)), r.daysOfWeekDisabled = t.map(r.daysOfWeekDisabled, function(t) {
                    return parseInt(t, 10) }), r.daysOfWeekHighlighted = r.daysOfWeekHighlighted || [], t.isArray(r.daysOfWeekHighlighted) || (r.daysOfWeekHighlighted = r.daysOfWeekHighlighted.split(/[,\s]*/)), r.daysOfWeekHighlighted = t.map(r.daysOfWeekHighlighted, function(t) {
                    return parseInt(t, 10) }), r.datesDisabled = r.datesDisabled || [], t.isArray(r.datesDisabled) || (r.datesDisabled = [r.datesDisabled]), r.datesDisabled = t.map(r.datesDisabled, function(t) {
                    return y.parseDate(t, o, r.language, r.assumeNearbyYear) });
                var a = String(r.orientation).toLowerCase().split(/\s+/g),
                    l = r.orientation.toLowerCase();
                if (a = t.grep(a, function(t) {
                        return /^auto|left|right|top|bottom$/.test(t) }), r.orientation = { x: "auto", y: "auto" }, l && "auto" !== l)
                    if (1 === a.length) switch (a[0]) {
                        case "top":
                        case "bottom":
                            r.orientation.y = a[0];
                            break;
                        case "left":
                        case "right":
                            r.orientation.x = a[0] } else l = t.grep(a, function(t) {
                        return /^left|right$/.test(t) }), r.orientation.x = l[0] || "auto", l = t.grep(a, function(t) {
                        return /^top|bottom$/.test(t) }), r.orientation.y = l[0] || "auto";
                    else;
                if (r.defaultViewDate) {
                    var u = r.defaultViewDate.year || (new Date).getFullYear(),
                        d = r.defaultViewDate.month || 0,
                        c = r.defaultViewDate.day || 1;
                    r.defaultViewDate = i(u, d, c) } else r.defaultViewDate = n() },
            _events: [],
            _secondaryEvents: [],
            _applyEvents: function(t) {
                for (var i, n, r, s = 0; s < t.length; s++) i = t[s][0], 2 === t[s].length ? (n = e, r = t[s][1]) : 3 === t[s].length && (n = t[s][1], r = t[s][2]), i.on(r, n) },
            _unapplyEvents: function(t) {
                for (var i, n, r, s = 0; s < t.length; s++) i = t[s][0], 2 === t[s].length ? (r = e, n = t[s][1]) : 3 === t[s].length && (r = t[s][1], n = t[s][2]), i.off(n, r) },
            _buildEvents: function() {
                var e = { keyup: t.proxy(function(e) { t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1 && this.update() }, this), keydown: t.proxy(this.keydown, this), paste: t.proxy(this.paste, this) };
                this.o.showOnFocus === !0 && (e.focus = t.proxy(this.show, this)), this.isInput ? this._events = [
                    [this.element, e]
                ] : this.component && this.hasInput ? this._events = [
                    [this.inputField, e],
                    [this.component, { click: t.proxy(this.show, this) }]
                ] : this._events = [
                    [this.element, { click: t.proxy(this.show, this), keydown: t.proxy(this.keydown, this) }]
                ], this._events.push([this.element, "*", { blur: t.proxy(function(t) { this._focused_from = t.target }, this) }], [this.element, { blur: t.proxy(function(t) { this._focused_from = t.target }, this) }]), this.o.immediateUpdates && this._events.push([this.element, { "changeYear changeMonth": t.proxy(function(t) { this.update(t.date) }, this) }]), this._secondaryEvents = [
                    [this.picker, { click: t.proxy(this.click, this) }],
                    [t(window), { resize: t.proxy(this.place, this) }],
                    [t(document), { mousedown: t.proxy(function(t) { this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.isInline || this.hide() }, this) }]
                ] },
            _attachEvents: function() { this._detachEvents(), this._applyEvents(this._events) },
            _detachEvents: function() { this._unapplyEvents(this._events) },
            _attachSecondaryEvents: function() { this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents) },
            _detachSecondaryEvents: function() { this._unapplyEvents(this._secondaryEvents) },
            _trigger: function(e, i) {
                var n = i || this.dates.get(-1),
                    r = this._utc_to_local(n);
                this.element.trigger({ type: e, date: r, dates: t.map(this.dates, this._utc_to_local), format: t.proxy(function(t, e) { 0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format;
                        var i = this.dates.get(t);
                        return y.formatDate(i, e, this.o.language) }, this) }) },
            show: function() {
                if (!(this.inputField.prop("disabled") || this.inputField.prop("readonly") && this.o.enableOnReadonly === !1)) return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && t(this.element).blur(), this },
            hide: function() {
                return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide"), this) },
            destroy: function() {
                return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this },
            paste: function(e) {
                var i;
                if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types && t.inArray("text/plain", e.originalEvent.clipboardData.types) !== -1) i = e.originalEvent.clipboardData.getData("text/plain");
                else {
                    if (!window.clipboardData) return;
                    i = window.clipboardData.getData("Text") }
                this.setDate(i), this.update(), e.preventDefault() },
            _utc_to_local: function(t) {
                return t && new Date(t.getTime() + 6e4 * t.getTimezoneOffset()) },
            _local_to_utc: function(t) {
                return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset()) },
            _zero_time: function(t) {
                return t && new Date(t.getFullYear(), t.getMonth(), t.getDate()) },
            _zero_utc_time: function(t) {
                return t && new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())) },
            getDates: function() {
                return t.map(this.dates, this._utc_to_local) },
            getUTCDates: function() {
                return t.map(this.dates, function(t) {
                    return new Date(t) }) },
            getDate: function() {
                return this._utc_to_local(this.getUTCDate()) },
            getUTCDate: function() {
                var t = this.dates.get(-1);
                return "undefined" != typeof t ? new Date(t) : null },
            clearDates: function() { this.inputField && this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide() },
            setDates: function() {
                var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.update.apply(this, e), this._trigger("changeDate"), this.setValue(), this },
            setUTCDates: function() {
                var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.update.apply(this, t.map(e, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this },
            setDate: s("setDates"),
            setUTCDate: s("setUTCDates"),
            remove: s("destroy"),
            setValue: function() {
                var t = this.getFormattedDate();
                return this.inputField.val(t), this },
            getFormattedDate: function(i) { i === e && (i = this.o.format);
                var n = this.o.language;
                return t.map(this.dates, function(t) {
                    return y.formatDate(t, i, n) }).join(this.o.multidateSeparator) },
            getStartDate: function() {
                return this.o.startDate },
            setStartDate: function(t) {
                return this._process_options({ startDate: t }), this.update(), this.updateNavArrows(), this },
            getEndDate: function() {
                return this.o.endDate },
            setEndDate: function(t) {
                return this._process_options({ endDate: t }), this.update(), this.updateNavArrows(), this },
            setDaysOfWeekDisabled: function(t) {
                return this._process_options({ daysOfWeekDisabled: t }), this.update(), this.updateNavArrows(), this },
            setDaysOfWeekHighlighted: function(t) {
                return this._process_options({ daysOfWeekHighlighted: t }), this.update(), this },
            setDatesDisabled: function(t) { this._process_options({ datesDisabled: t }), this.update(), this.updateNavArrows() },
            place: function() {
                if (this.isInline) return this;
                var e = this.picker.outerWidth(),
                    i = this.picker.outerHeight(),
                    n = 10,
                    r = t(this.o.container),
                    s = r.width(),
                    o = "body" === this.o.container ? t(document).scrollTop() : r.scrollTop(),
                    a = r.offset(),
                    l = [];
                this.element.parents().each(function() {
                    var e = t(this).css("z-index"); "auto" !== e && 0 !== e && l.push(parseInt(e)) });
                var u = Math.max.apply(Math, l) + this.o.zIndexOffset,
                    d = this.component ? this.component.parent().offset() : this.element.offset(),
                    c = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                    h = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                    p = d.left - a.left,
                    f = d.top - a.top; "body" !== this.o.container && (f += o), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (p -= e - h)) : d.left < 0 ? (this.picker.addClass("datepicker-orient-left"), p -= d.left - n) : p + e > s ? (this.picker.addClass("datepicker-orient-right"), p += h - e) : this.picker.addClass("datepicker-orient-left");
                var m, g = this.o.orientation.y;
                if ("auto" === g && (m = -o + f - i, g = m < 0 ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + g), "top" === g ? f -= i + parseInt(this.picker.css("padding-top")) : f += c, this.o.rtl) {
                    var y = s - (p + h);
                    this.picker.css({ top: f, right: y, zIndex: u }) } else this.picker.css({ top: f, left: p, zIndex: u });
                return this },
            _allow_update: !0,
            update: function() {
                if (!this._allow_update) return this;
                var e = this.dates.copy(),
                    i = [],
                    n = !1;
                return arguments.length ? (t.each(arguments, t.proxy(function(t, e) { e instanceof Date && (e = this._local_to_utc(e)), i.push(e) }, this)), n = !0) : (i = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val(), i = i && this.o.multidate ? i.split(this.o.multidateSeparator) : [i], delete this.element.data().date), i = t.map(i, t.proxy(function(t) {
                    return y.parseDate(t, this.o.format, this.o.language, this.o.assumeNearbyYear) }, this)), i = t.grep(i, t.proxy(function(t) {
                    return !this.dateWithinRange(t) || !t;
                }, this), !0), this.dates.replace(i), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate, n ? this.setValue() : i.length && String(e) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && e.length && this._trigger("clearDate"), this.fill(), this.element.change(), this
            },
            fillDow: function() {
                var e = this.o.weekStart,
                    i = "<tr>";
                for (this.o.calendarWeeks && (this.picker.find(".datepicker-days .datepicker-switch").attr("colspan", function(t, e) {
                        return parseInt(e) + 1 }), i += '<th class="cw">&#160;</th>'); e < this.o.weekStart + 7;) i += '<th class="dow', t.inArray(e, this.o.daysOfWeekDisabled) > -1 && (i += " disabled"), i += '">' + g[this.o.language].daysMin[e++ % 7] + "</th>";
                i += "</tr>", this.picker.find(".datepicker-days thead").append(i) },
            fillMonths: function() {
                for (var t = this._utc_to_local(this.viewDate), e = "", i = 0; i < 12;) {
                    var n = t && t.getMonth() === i ? " focused" : "";
                    e += '<span class="month' + n + '">' + g[this.o.language].monthsShort[i++] + "</span>" }
                this.picker.find(".datepicker-months td").html(e) },
            setRange: function(e) { e && e.length ? this.range = t.map(e, function(t) {
                    return t.valueOf() }) : delete this.range, this.fill() },
            getClassNames: function(e) {
                var i = [],
                    n = this.viewDate.getUTCFullYear(),
                    r = this.viewDate.getUTCMonth(),
                    s = new Date;
                return e.getUTCFullYear() < n || e.getUTCFullYear() === n && e.getUTCMonth() < r ? i.push("old") : (e.getUTCFullYear() > n || e.getUTCFullYear() === n && e.getUTCMonth() > r) && i.push("new"), this.focusDate && e.valueOf() === this.focusDate.valueOf() && i.push("focused"), this.o.todayHighlight && e.getUTCFullYear() === s.getFullYear() && e.getUTCMonth() === s.getMonth() && e.getUTCDate() === s.getDate() && i.push("today"), this.dates.contains(e) !== -1 && i.push("active"), this.dateWithinRange(e) || i.push("disabled"), this.dateIsDisabled(e) && i.push("disabled", "disabled-date"), t.inArray(e.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1 && i.push("highlighted"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && i.push("range"), t.inArray(e.valueOf(), this.range) !== -1 && i.push("selected"), e.valueOf() === this.range[0] && i.push("range-start"), e.valueOf() === this.range[this.range.length - 1] && i.push("range-end")), i },
            _fill_yearsView: function(i, n, r, s, o, a, l, u) {
                var d, c, h, p, f, m, g, y, v, b, w;
                for (d = "", c = this.picker.find(i), h = parseInt(o / r, 10) * r, f = parseInt(a / s, 10) * s, m = parseInt(l / s, 10) * s, p = t.map(this.dates, function(t) {
                        return parseInt(t.getUTCFullYear() / s, 10) * s }), c.find(".datepicker-switch").text(h + "-" + (h + 9 * s)), g = h - s, y = -1; y < 11; y += 1) v = [n], b = null, y === -1 ? v.push("old") : 10 === y && v.push("new"), t.inArray(g, p) !== -1 && v.push("active"), (g < f || g > m) && v.push("disabled"), g === this.viewDate.getFullYear() && v.push("focused"), u !== t.noop && (w = u(new Date(g, 0, 1)), w === e ? w = {} : "boolean" == typeof w ? w = { enabled: w } : "string" == typeof w && (w = { classes: w }), w.enabled === !1 && v.push("disabled"), w.classes && (v = v.concat(w.classes.split(/\s+/))), w.tooltip && (b = w.tooltip)), d += '<span class="' + v.join(" ") + '"' + (b ? ' title="' + b + '"' : "") + ">" + g + "</span>", g += s;
                c.find("td").html(d) },
            fill: function() {
                var n, r, s = new Date(this.viewDate),
                    o = s.getUTCFullYear(),
                    a = s.getUTCMonth(),
                    l = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
                    u = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
                    d = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                    c = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                    h = g[this.o.language].today || g.en.today || "",
                    p = g[this.o.language].clear || g.en.clear || "",
                    f = g[this.o.language].titleFormat || g.en.titleFormat;
                if (!isNaN(o) && !isNaN(a)) { this.picker.find(".datepicker-days .datepicker-switch").text(y.formatDate(s, f, this.o.language)), this.picker.find("tfoot .today").text(h).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot .clear").text(p).toggle(this.o.clearBtn !== !1), this.picker.find("thead .datepicker-title").text(this.o.title).toggle("" !== this.o.title), this.updateNavArrows(), this.fillMonths();
                    var m = i(o, a - 1, 28),
                        v = y.getDaysInMonth(m.getUTCFullYear(), m.getUTCMonth());
                    m.setUTCDate(v), m.setUTCDate(v - (m.getUTCDay() - this.o.weekStart + 7) % 7);
                    var b = new Date(m);
                    m.getUTCFullYear() < 100 && b.setUTCFullYear(m.getUTCFullYear()), b.setUTCDate(b.getUTCDate() + 42), b = b.valueOf();
                    for (var w, k = []; m.valueOf() < b;) {
                        if (m.getUTCDay() === this.o.weekStart && (k.push("<tr>"), this.o.calendarWeeks)) {
                            var T = new Date(+m + (this.o.weekStart - m.getUTCDay() - 7) % 7 * 864e5),
                                S = new Date(Number(T) + (11 - T.getUTCDay()) % 7 * 864e5),
                                C = new Date(Number(C = i(S.getUTCFullYear(), 0, 1)) + (11 - C.getUTCDay()) % 7 * 864e5),
                                D = (S - C) / 864e5 / 7 + 1;
                            k.push('<td class="cw">' + D + "</td>") }
                        w = this.getClassNames(m), w.push("day"), this.o.beforeShowDay !== t.noop && (r = this.o.beforeShowDay(this._utc_to_local(m)), r === e ? r = {} : "boolean" == typeof r ? r = { enabled: r } : "string" == typeof r && (r = { classes: r }), r.enabled === !1 && w.push("disabled"), r.classes && (w = w.concat(r.classes.split(/\s+/))), r.tooltip && (n = r.tooltip)), w = t.isFunction(t.uniqueSort) ? t.uniqueSort(w) : t.unique(w), k.push('<td class="' + w.join(" ") + '"' + (n ? ' title="' + n + '"' : "") + ">" + m.getUTCDate() + "</td>"), n = null, m.getUTCDay() === this.o.weekEnd && k.push("</tr>"), m.setUTCDate(m.getUTCDate() + 1) }
                    this.picker.find(".datepicker-days tbody").empty().append(k.join(""));
                    var x = g[this.o.language].monthsTitle || g.en.monthsTitle || "Months",
                        E = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? x : o).end().find("span").removeClass("active");
                    if (t.each(this.dates, function(t, e) { e.getUTCFullYear() === o && E.eq(e.getUTCMonth()).addClass("active") }), (o < l || o > d) && E.addClass("disabled"), o === l && E.slice(0, u).addClass("disabled"), o === d && E.slice(c + 1).addClass("disabled"), this.o.beforeShowMonth !== t.noop) {
                        var M = this;
                        t.each(E, function(i, n) {
                            var r = new Date(o, i, 1),
                                s = M.o.beforeShowMonth(r);
                            s === e ? s = {} : "boolean" == typeof s ? s = { enabled: s } : "string" == typeof s && (s = { classes: s }), s.enabled !== !1 || t(n).hasClass("disabled") || t(n).addClass("disabled"), s.classes && t(n).addClass(s.classes), s.tooltip && t(n).prop("title", s.tooltip) }) }
                    this._fill_yearsView(".datepicker-years", "year", 10, 1, o, l, d, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, 10, o, l, d, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, 100, o, l, d, this.o.beforeShowCentury) } },
            updateNavArrows: function() {
                if (this._allow_update) {
                    var t = new Date(this.viewDate),
                        e = t.getUTCFullYear(),
                        i = t.getUTCMonth();
                    switch (this.viewMode) {
                        case 0:
                            this.o.startDate !== -(1 / 0) && e <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({ visibility: "hidden" }) : this.picker.find(".prev").css({ visibility: "visible" }), this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({ visibility: "hidden" }) : this.picker.find(".next").css({ visibility: "visible" });
                            break;
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            this.o.startDate !== -(1 / 0) && e <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".prev").css({ visibility: "hidden" }) : this.picker.find(".prev").css({ visibility: "visible" }), this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".next").css({ visibility: "hidden" }) : this.picker.find(".next").css({ visibility: "visible" }) } } },
            click: function(e) { e.preventDefault(), e.stopPropagation();
                var r, s, o, a, l, u, d;
                r = t(e.target), r.hasClass("datepicker-switch") && this.showMode(1);
                var c = r.closest(".prev, .next");
                c.length > 0 && (s = y.modes[this.viewMode].navStep * (c.hasClass("prev") ? -1 : 1), 0 === this.viewMode ? (this.viewDate = this.moveMonth(this.viewDate, s), this._trigger("changeMonth", this.viewDate)) : (this.viewDate = this.moveYear(this.viewDate, s), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)), this.fill()), r.hasClass("today") && !r.hasClass("day") && (this.showMode(-2), this._setDate(n(), "linked" === this.o.todayBtn ? null : "view")), r.hasClass("clear") && this.clearDates(), r.hasClass("disabled") || (r.hasClass("day") && (o = parseInt(r.text(), 10) || 1, a = this.viewDate.getUTCFullYear(), l = this.viewDate.getUTCMonth(), r.hasClass("old") && (0 === l ? (l = 11, a -= 1, u = !0, d = !0) : (l -= 1, u = !0)), r.hasClass("new") && (11 === l ? (l = 0, a += 1, u = !0, d = !0) : (l += 1, u = !0)), this._setDate(i(a, l, o)), d && this._trigger("changeYear", this.viewDate), u && this._trigger("changeMonth", this.viewDate)), r.hasClass("month") && (this.viewDate.setUTCDate(1), o = 1, l = r.parent().find("span").index(r), a = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(l), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode ? (this._setDate(i(a, l, o)), this.showMode()) : this.showMode(-1), this.fill()), (r.hasClass("year") || r.hasClass("decade") || r.hasClass("century")) && (this.viewDate.setUTCDate(1), o = 1, l = 0, a = parseInt(r.text(), 10) || 0, this.viewDate.setUTCFullYear(a), r.hasClass("year") && (this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(i(a, l, o))), r.hasClass("decade") && (this._trigger("changeDecade", this.viewDate), 3 === this.o.minViewMode && this._setDate(i(a, l, o))), r.hasClass("century") && (this._trigger("changeCentury", this.viewDate), 4 === this.o.minViewMode && this._setDate(i(a, l, o))), this.showMode(-1), this.fill())), this.picker.is(":visible") && this._focused_from && t(this._focused_from).focus(), delete this._focused_from },
            _toggle_multidate: function(t) {
                var e = this.dates.contains(t);
                if (t || this.dates.clear(), e !== -1 ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(e) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(t)) : this.dates.push(t), "number" == typeof this.o.multidate)
                    for (; this.dates.length > this.o.multidate;) this.dates.remove(0) },
            _setDate: function(t, e) { e && "date" !== e || this._toggle_multidate(t && new Date(t)), e && "view" !== e || (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), e && "view" === e || this._trigger("changeDate"), this.inputField && this.inputField.change(), !this.o.autoclose || e && "date" !== e || this.hide() },
            moveDay: function(t, e) {
                var i = new Date(t);
                return i.setUTCDate(t.getUTCDate() + e), i },
            moveWeek: function(t, e) {
                return this.moveDay(t, 7 * e) },
            moveMonth: function(t, e) {
                if (!o(t)) return this.o.defaultViewDate;
                if (!e) return t;
                var i, n, r = new Date(t.valueOf()),
                    s = r.getUTCDate(),
                    a = r.getUTCMonth(),
                    l = Math.abs(e);
                if (e = e > 0 ? 1 : -1, 1 === l) n = e === -1 ? function() {
                    return r.getUTCMonth() === a } : function() {
                    return r.getUTCMonth() !== i }, i = a + e, r.setUTCMonth(i), (i < 0 || i > 11) && (i = (i + 12) % 12);
                else {
                    for (var u = 0; u < l; u++) r = this.moveMonth(r, e);
                    i = r.getUTCMonth(), r.setUTCDate(s), n = function() {
                        return i !== r.getUTCMonth() } }
                for (; n();) r.setUTCDate(--s), r.setUTCMonth(i);
                return r },
            moveYear: function(t, e) {
                return this.moveMonth(t, 12 * e) },
            moveAvailableDate: function(t, e, i) { do {
                    if (t = this[i](t, e), !this.dateWithinRange(t)) return !1;
                    i = "moveDay" } while (this.dateIsDisabled(t));
                return t },
            weekOfDateIsDisabled: function(e) {
                return t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled) !== -1 },
            dateIsDisabled: function(e) {
                return this.weekOfDateIsDisabled(e) || t.grep(this.o.datesDisabled, function(t) {
                    return r(e, t) }).length > 0 },
            dateWithinRange: function(t) {
                return t >= this.o.startDate && t <= this.o.endDate },
            keydown: function(t) {
                if (!this.picker.is(":visible")) return void(40 !== t.keyCode && 27 !== t.keyCode || (this.show(), t.stopPropagation()));
                var e, i, n = !1,
                    r = this.focusDate || this.viewDate;
                switch (t.keyCode) {
                    case 27:
                        this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault(), t.stopPropagation();
                        break;
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                        if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                        e = 37 === t.keyCode || 38 === t.keyCode ? -1 : 1, 0 === this.viewMode ? t.ctrlKey ? (i = this.moveAvailableDate(r, e, "moveYear"), i && this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveAvailableDate(r, e, "moveMonth"), i && this._trigger("changeMonth", this.viewDate)) : 37 === t.keyCode || 39 === t.keyCode ? i = this.moveAvailableDate(r, e, "moveDay") : this.weekOfDateIsDisabled(r) || (i = this.moveAvailableDate(r, e, "moveWeek")) : 1 === this.viewMode ? (38 !== t.keyCode && 40 !== t.keyCode || (e *= 4), i = this.moveAvailableDate(r, e, "moveMonth")) : 2 === this.viewMode && (38 !== t.keyCode && 40 !== t.keyCode || (e *= 4), i = this.moveAvailableDate(r, e, "moveYear")), i && (this.focusDate = this.viewDate = i, this.setValue(), this.fill(), t.preventDefault());
                        break;
                    case 13:
                        if (!this.o.forceParse) break;
                        r = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(r), n = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), t.stopPropagation(), this.o.autoclose && this.hide());
                        break;
                    case 9:
                        this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide() }
                n && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField && this.inputField.change()) },
            showMode: function(t) { t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + t))), this.picker.children("div").hide().filter(".datepicker-" + y.modes[this.viewMode].clsName).show(), this.updateNavArrows() }
        };
        var c = function(e, i) { t(e).data("datepicker", this), this.element = t(e), this.inputs = t.map(i.inputs, function(t) {
                return t.jquery ? t[0] : t }), delete i.inputs, p.call(t(this.inputs), i).on("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function(e) {
                return t(e).data("datepicker") }), this.updateDates() };
        c.prototype = { updateDates: function() { this.dates = t.map(this.pickers, function(t) {
                    return t.getUTCDate() }), this.updateRanges() }, updateRanges: function() {
                var e = t.map(this.dates, function(t) {
                    return t.valueOf() });
                t.each(this.pickers, function(t, i) { i.setRange(e) }) }, dateUpdated: function(e) {
                if (!this.updating) { this.updating = !0;
                    var i = t(e.target).data("datepicker");
                    if ("undefined" != typeof i) {
                        var n = i.getUTCDate(),
                            r = t.inArray(e.target, this.inputs),
                            s = r - 1,
                            o = r + 1,
                            a = this.inputs.length;
                        if (r !== -1) {
                            if (t.each(this.pickers, function(t, e) { e.getUTCDate() || e.setUTCDate(n) }), n < this.dates[s])
                                for (; s >= 0 && n < this.dates[s];) this.pickers[s--].setUTCDate(n);
                            else if (n > this.dates[o])
                                for (; o < a && n > this.dates[o];) this.pickers[o++].setUTCDate(n);
                            this.updateDates(), delete this.updating } } } }, remove: function() { t.map(this.pickers, function(t) { t.remove() }), delete this.element.data().datepicker } };
        var h = t.fn.datepicker,
            p = function(i) {
                var n = Array.apply(null, arguments);
                n.shift();
                var r;
                if (this.each(function() {
                        var e = t(this),
                            s = e.data("datepicker"),
                            o = "object" == typeof i && i;
                        if (!s) {
                            var u = a(this, "date"),
                                h = t.extend({}, f, u, o),
                                p = l(h.language),
                                m = t.extend({}, f, p, u, o);
                            e.hasClass("input-daterange") || m.inputs ? (t.extend(m, { inputs: m.inputs || e.find("input").toArray() }), s = new c(this, m)) : s = new d(this, m), e.data("datepicker", s) } "string" == typeof i && "function" == typeof s[i] && (r = s[i].apply(s, n)) }), r === e || r instanceof d || r instanceof c) return this;
                if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + i + " function)");
                return r };
        t.fn.datepicker = p;
        var f = t.fn.datepicker.defaults = { assumeNearbyYear: !1, autoclose: !1, beforeShowDay: t.noop, beforeShowMonth: t.noop, beforeShowYear: t.noop, beforeShowDecade: t.noop, beforeShowCentury: t.noop, calendarWeeks: !1, clearBtn: !1, toggleActive: !1, daysOfWeekDisabled: [], daysOfWeekHighlighted: [], datesDisabled: [], endDate: 1 / 0, forceParse: !0, format: "mm/dd/yyyy", keyboardNavigation: !0, language: "en", minViewMode: 0, maxViewMode: 4, multidate: !1, multidateSeparator: ",", orientation: "auto", rtl: !1, startDate: -(1 / 0), startView: 0, todayBtn: !1, todayHighlight: !1, weekStart: 0, disableTouchKeyboard: !1, enableOnReadonly: !0, showOnFocus: !0, zIndexOffset: 10, container: "body", immediateUpdates: !1, title: "", templates: { leftArrow: "&laquo;", rightArrow: "&raquo;" } },
            m = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
        t.fn.datepicker.Constructor = d;
        var g = t.fn.datepicker.dates = { en: { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", clear: "Clear", titleFormat: "MM yyyy" } },
            y = { modes: [{ clsName: "days", navFnc: "Month", navStep: 1 }, { clsName: "months", navFnc: "FullYear", navStep: 1 }, { clsName: "years", navFnc: "FullYear", navStep: 10 }, { clsName: "decades", navFnc: "FullDecade", navStep: 100 }, { clsName: "centuries", navFnc: "FullCentury", navStep: 1e3 }], isLeapYear: function(t) {
                    return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0 }, getDaysInMonth: function(t, e) {
                    return [31, y.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e] }, validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g, nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g, parseFormat: function(t) {
                    if ("function" == typeof t.toValue && "function" == typeof t.toDisplay) return t;
                    var e = t.replace(this.validParts, "\0").split("\0"),
                        i = t.match(this.validParts);
                    if (!e || !e.length || !i || 0 === i.length) throw new Error("Invalid date format.");
                    return { separators: e, parts: i } }, parseDate: function(r, s, o, a) {
                    function l(t, e) {
                        return e === !0 && (e = 10), t < 100 && (t += 2e3, t > (new Date).getFullYear() + e && (t -= 100)), t }

                    function u() {
                        var t = this.slice(0, v[p].length),
                            e = v[p].slice(0, t.length);
                        return t.toLowerCase() === e.toLowerCase() }
                    if (!r) return e;
                    if (r instanceof Date) return r;
                    if ("string" == typeof s && (s = y.parseFormat(s)), s.toValue) return s.toValue(r, s, o);
                    var c, h, p, f, m = /([\-+]\d+)([dmwy])/,
                        v = r.match(/([\-+]\d+)([dmwy])/g),
                        b = { d: "moveDay", m: "moveMonth", w: "moveWeek", y: "moveYear" },
                        w = { yesterday: "-1d", today: "+0d", tomorrow: "+1d" };
                    if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(r)) {
                        for (r = new Date, p = 0; p < v.length; p++) c = m.exec(v[p]), h = parseInt(c[1]), f = b[c[2]], r = d.prototype[f](r, h);
                        return i(r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()) }
                    if ("undefined" != typeof w[r] && (r = w[r], v = r.match(/([\-+]\d+)([dmwy])/g), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(r))) {
                        for (r = new Date, p = 0; p < v.length; p++) c = m.exec(v[p]), h = parseInt(c[1]), f = b[c[2]], r = d.prototype[f](r, h);
                        return i(r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()) }
                    v = r && r.match(this.nonpunctuation) || [], r = new Date;
                    var k, T, S = {},
                        C = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                        D = { yyyy: function(t, e) {
                                return t.setUTCFullYear(a ? l(e, a) : e) }, yy: function(t, e) {
                                return t.setUTCFullYear(a ? l(e, a) : e) }, m: function(t, e) {
                                if (isNaN(t)) return t;
                                for (e -= 1; e < 0;) e += 12;
                                for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1);
                                return t }, d: function(t, e) {
                                return t.setUTCDate(e) } };
                    D.M = D.MM = D.mm = D.m, D.dd = D.d, r = n();
                    var x = s.parts.slice();
                    if (v.length !== x.length && (x = t(x).filter(function(e, i) {
                            return t.inArray(i, C) !== -1 }).toArray()), v.length === x.length) {
                        var E;
                        for (p = 0, E = x.length; p < E; p++) {
                            if (k = parseInt(v[p], 10), c = x[p], isNaN(k)) switch (c) {
                                case "MM":
                                    T = t(g[o].months).filter(u), k = t.inArray(T[0], g[o].months) + 1;
                                    break;
                                case "M":
                                    T = t(g[o].monthsShort).filter(u), k = t.inArray(T[0], g[o].monthsShort) + 1 }
                            S[c] = k }
                        var M, _;
                        for (p = 0; p < C.length; p++) _ = C[p], _ in S && !isNaN(S[_]) && (M = new Date(r), D[_](M, S[_]), isNaN(M) || (r = M)) }
                    return r }, formatDate: function(e, i, n) {
                    if (!e) return "";
                    if ("string" == typeof i && (i = y.parseFormat(i)), i.toDisplay) return i.toDisplay(e, i, n);
                    var r = { d: e.getUTCDate(), D: g[n].daysShort[e.getUTCDay()], DD: g[n].days[e.getUTCDay()], m: e.getUTCMonth() + 1, M: g[n].monthsShort[e.getUTCMonth()], MM: g[n].months[e.getUTCMonth()], yy: e.getUTCFullYear().toString().substring(2), yyyy: e.getUTCFullYear() };
                    r.dd = (r.d < 10 ? "0" : "") + r.d, r.mm = (r.m < 10 ? "0" : "") + r.m, e = [];
                    for (var s = t.extend([], i.separators), o = 0, a = i.parts.length; o <= a; o++) s.length && e.push(s.shift()), e.push(r[i.parts[o]]);
                    return e.join("") }, headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>', contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>', footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>' };
        y.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + y.headTemplate + "<tbody></tbody>" + y.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + y.headTemplate + y.contTemplate + y.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + y.headTemplate + y.contTemplate + y.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + y.headTemplate + y.contTemplate + y.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + y.headTemplate + y.contTemplate + y.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = y, t.fn.datepicker.noConflict = function() {
            return t.fn.datepicker = h, this }, t.fn.datepicker.version = "1.6.4", t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(e) {
            var i = t(this);
            i.data("datepicker") || (e.preventDefault(), p.call(i, "show")) }), t(function() { p.call(t('[data-provide="datepicker-inline"]')) })
    }),
    function(t) { t.fn.datepicker.dates.ar = { days: ["\u0627\u0644\u0623\u062d\u062f", "\u0627\u0644\u0627\u062b\u0646\u064a\u0646", "\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062e\u0645\u064a\u0633", "\u0627\u0644\u062c\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062a", "\u0627\u0644\u0623\u062d\u062f"], daysShort: ["\u0623\u062d\u062f", "\u0627\u062b\u0646\u064a\u0646", "\u062b\u0644\u0627\u062b\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062e\u0645\u064a\u0633", "\u062c\u0645\u0639\u0629", "\u0633\u0628\u062a", "\u0623\u062d\u062f"], daysMin: ["\u062d", "\u0646", "\u062b", "\u0639", "\u062e", "\u062c", "\u0633", "\u062d"], months: ["\u064a\u0646\u0627\u064a\u0631", "\u0641\u0628\u0631\u0627\u064a\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064a\u0644", "\u0645\u0627\u064a\u0648", "\u064a\u0648\u0646\u064a\u0648", "\u064a\u0648\u0644\u064a\u0648", "\u0623\u063a\u0633\u0637\u0633", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"], monthsShort: ["\u064a\u0646\u0627\u064a\u0631", "\u0641\u0628\u0631\u0627\u064a\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064a\u0644", "\u0645\u0627\u064a\u0648", "\u064a\u0648\u0646\u064a\u0648", "\u064a\u0648\u0644\u064a\u0648", "\u0623\u063a\u0633\u0637\u0633", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"], today: "\u0647\u0630\u0627 \u0627\u0644\u064a\u0648\u0645", rtl: !0 } }(jQuery),
    function(t) { t.fn.datepicker.dates.az = { days: ["Bazar", "Bazar ert\u0259si", "\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131", "\xc7\u0259r\u015f\u0259nb\u0259", "C\xfcm\u0259 ax\u015fam\u0131", "C\xfcm\u0259", "\u015e\u0259nb\u0259"], daysShort: ["B.", "B.e", "\xc7.a", "\xc7.", "C.a", "C.", "\u015e."], daysMin: ["B.", "B.e", "\xc7.a", "\xc7.", "C.a", "C.", "\u015e."], months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "\u0130yun", "\u0130yul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"], monthsShort: ["Yan", "Fev", "Mar", "Apr", "May", "\u0130yun", "\u0130yul", "Avq", "Sen", "Okt", "Noy", "Dek"], today: "Bu g\xfcn", weekStart: 1 } }(jQuery),
    function(t) { t.fn.datepicker.dates.bg = { days: ["\u041d\u0435\u0434\u0435\u043b\u044f", "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a", "\u0412\u0442\u043e\u0440\u043d\u0438\u043a", "\u0421\u0440\u044f\u0434\u0430", "\u0427\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a", "\u041f\u0435\u0442\u044a\u043a", "\u0421\u044a\u0431\u043e\u0442\u0430"], daysShort: ["\u041d\u0435\u0434", "\u041f\u043e\u043d", "\u0412\u0442\u043e", "\u0421\u0440\u044f", "\u0427\u0435\u0442", "\u041f\u0435\u0442", "\u0421\u044a\u0431"], daysMin: ["\u041d", "\u041f", "\u0412", "\u0421", "\u0427", "\u041f", "\u0421"], months: ["\u042f\u043d\u0443\u0430\u0440\u0438", "\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0438\u043b", "\u041c\u0430\u0439", "\u042e\u043d\u0438", "\u042e\u043b\u0438", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438", "\u041e\u043a\u0442\u043e\u043c\u0432\u0440\u0438", "\u041d\u043e\u0435\u043c\u0432\u0440\u0438", "\u0414\u0435\u043a\u0435\u043c\u0432\u0440\u0438"], monthsShort: ["\u042f\u043d", "\u0424\u0435\u0432", "\u041c\u0430\u0440", "\u0410\u043f\u0440", "\u041c\u0430\u0439", "\u042e\u043d\u0438", "\u042e\u043b\u0438", "\u0410\u0432\u0433", "\u0421\u0435\u043f", "\u041e\u043a\u0442", "\u041d\u043e\u0435", "\u0414\u0435\u043a"], today: "\u0434\u043d\u0435\u0441" } }(jQuery),
    function(t) { t.fn.datepicker.dates.bs = { days: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "\u010cetvrtak", "Petak", "Subota"], daysShort: ["Ned", "Pon", "Uto", "Sri", "\u010cet", "Pet", "Sub"], daysMin: ["N", "Po", "U", "Sr", "\u010c", "Pe", "Su"], months: ["Januar", "Februar", "Mart", "April", "Maj", "Juni", "Juli", "August", "Septembar", "Oktobar", "Novembar", "Decembar"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"], today: "Danas", weekStart: 1, format: "dd.mm.yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.ca = { days: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"], daysShort: ["Diu", "Dil", "Dmt", "Dmc", "Dij", "Div", "Dis"], daysMin: ["dg", "dl", "dt", "dc", "dj", "dv", "ds"], months: ["Gener", "Febrer", "Mar\xe7", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"], monthsShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"], today: "Avui", monthsTitle: "Mesos", clear: "Esborrar", weekStart: 1, format: "dd/mm/yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.cs = { days: ["Ned\u011ble", "Pond\u011bl\xed", "\xdater\xfd", "St\u0159eda", "\u010ctvrtek", "P\xe1tek", "Sobota"], daysShort: ["Ned", "Pon", "\xdate", "St\u0159", "\u010ctv", "P\xe1t", "Sob"], daysMin: ["Ne", "Po", "\xdat", "St", "\u010ct", "P\xe1", "So"], months: ["Leden", "\xdanor", "B\u0159ezen", "Duben", "Kv\u011bten", "\u010cerven", "\u010cervenec", "Srpen", "Z\xe1\u0159\xed", "\u0158\xedjen", "Listopad", "Prosinec"], monthsShort: ["Led", "\xdano", "B\u0159e", "Dub", "Kv\u011b", "\u010cer", "\u010cnc", "Srp", "Z\xe1\u0159", "\u0158\xedj", "Lis", "Pro"], today: "Dnes", clear: "Vymazat", weekStart: 1, format: "dd.m.yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.cy = { days: ["Sul", "Llun", "Mawrth", "Mercher", "Iau", "Gwener", "Sadwrn"], daysShort: ["Sul", "Llu", "Maw", "Mer", "Iau", "Gwe", "Sad"], daysMin: ["Su", "Ll", "Ma", "Me", "Ia", "Gwe", "Sa"], months: ["Ionawr", "Chewfror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorfennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"], monthsShort: ["Ion", "Chw", "Maw", "Ebr", "Mai", "Meh", "Gor", "Aws", "Med", "Hyd", "Tach", "Rha"], today: "Heddiw" } }(jQuery),
    function(t) { t.fn.datepicker.dates.da = { days: ["s\xf8ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l\xf8rdag"], daysShort: ["s\xf8n", "man", "tir", "ons", "tor", "fre", "l\xf8r"], daysMin: ["s\xf8", "ma", "ti", "on", "to", "fr", "l\xf8"], months: ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"], monthsShort: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], today: "I Dag", clear: "Nulstil" } }(jQuery),
    function(t) { t.fn.datepicker.dates.de = { days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], daysShort: ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"], daysMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], months: ["Januar", "Februar", "M\xe4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], monthsShort: ["Jan", "Feb", "M\xe4r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], today: "Heute", monthsTitle: "Monate", clear: "L\xf6schen", weekStart: 1, format: "dd.mm.yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.el = { days: ["\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae", "\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1", "\u03a4\u03c1\u03af\u03c4\u03b7", "\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7", "\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7", "\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae", "\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf"], daysShort: ["\u039a\u03c5\u03c1", "\u0394\u03b5\u03c5", "\u03a4\u03c1\u03b9", "\u03a4\u03b5\u03c4", "\u03a0\u03b5\u03bc", "\u03a0\u03b1\u03c1", "\u03a3\u03b1\u03b2"], daysMin: ["\u039a\u03c5", "\u0394\u03b5", "\u03a4\u03c1", "\u03a4\u03b5", "\u03a0\u03b5", "\u03a0\u03b1", "\u03a3\u03b1"], months: ["\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2", "\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2", "\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2", "\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2", "\u039c\u03ac\u03b9\u03bf\u03c2", "\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2", "\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2", "\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2", "\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2", "\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2", "\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2", "\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2"], monthsShort: ["\u0399\u03b1\u03bd", "\u03a6\u03b5\u03b2", "\u039c\u03b1\u03c1", "\u0391\u03c0\u03c1", "\u039c\u03ac\u03b9", "\u0399\u03bf\u03c5\u03bd", "\u0399\u03bf\u03c5\u03bb", "\u0391\u03c5\u03b3", "\u03a3\u03b5\u03c0", "\u039f\u03ba\u03c4", "\u039d\u03bf\u03b5", "\u0394\u03b5\u03ba"], today: "\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1", clear: "\u039a\u03b1\u03b8\u03b1\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2", weekStart: 1, format: "d/m/yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates["en-AU"] = { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", monthsTitle: "Months", clear: "Clear", weekStart: 1, format: "d/mm/yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates["en-GB"] = { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", monthsTitle: "Months", clear: "Clear", weekStart: 1, format: "dd/mm/yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates["en-IE"] = { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", monthsTitle: "Months", clear: "Clear", weekStart: 1, format: "dd/mm/yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates["en-NZ"] = { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", monthsTitle: "Months", clear: "Clear", weekStart: 1, format: "d/mm/yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates["en-ZA"] = { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", monthsTitle: "Months", clear: "Clear", weekStart: 1, format: "yyyy/mm/d" } }(jQuery),
    function(t) { t.fn.datepicker.dates.eo = { days: ["diman\u0109o", "lundo", "mardo", "merkredo", "\u0135a\u016ddo", "vendredo", "sabato"], daysShort: ["dim.", "lun.", "mar.", "mer.", "\u0135a\u016d.", "ven.", "sam."], daysMin: ["d", "l", "ma", "me", "\u0135", "v", "s"], months: ["januaro", "februaro", "marto", "aprilo", "majo", "junio", "julio", "a\u016dgusto", "septembro", "oktobro", "novembro", "decembro"], monthsShort: ["jan.", "feb.", "mar.", "apr.", "majo", "jun.", "jul.", "a\u016dg.", "sep.", "okt.", "nov.", "dec."], today: "Hodia\u016d", clear: "Nuligi", weekStart: 1, format: "yyyy-mm-dd" } }(jQuery),
    function(t) { t.fn.datepicker.dates.es = { days: ["Domingo", "Lunes", "Martes", "Mi\xe9rcoles", "Jueves", "Viernes", "S\xe1bado"], daysShort: ["Dom", "Lun", "Mar", "Mi\xe9", "Jue", "Vie", "S\xe1b"], daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"], today: "Hoy", monthsTitle: "Meses", clear: "Borrar", weekStart: 1, format: "dd/mm/yyyy" } }(jQuery),
    function(t) {
        t.fn.datepicker.dates.et = {
            days: ["P\xfchap\xe4ev", "Esmasp\xe4ev", "Teisip\xe4ev", "Kolmap\xe4ev", "Neljap\xe4ev", "Reede", "Laup\xe4ev"],
            daysShort: ["P\xfchap", "Esmasp", "Teisip", "Kolmap", "Neljap", "Reede", "Laup"],
            daysMin: ["P", "E", "T", "K", "N", "R", "L"],
            months: ["Jaanuar", "Veebruar", "M\xe4rts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
            monthsShort: ["Jaan", "Veebr", "M\xe4rts", "Apr", "Mai", "Juuni", "Juuli", "Aug", "Sept", "Okt", "Nov", "Dets"],
            today: "T\xe4na",
            clear: "T\xfchjenda",
            weekStart: 1,
            format: "dd.mm.yyyy"
        }
    }(jQuery),
    function(t) { t.fn.datepicker.dates.eu = { days: ["Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata"], daysShort: ["Ig", "Al", "Ar", "Az", "Og", "Ol", "Lr"], daysMin: ["Ig", "Al", "Ar", "Az", "Og", "Ol", "Lr"], months: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"], monthsShort: ["Urt", "Ots", "Mar", "Api", "Mai", "Eka", "Uzt", "Abu", "Ira", "Urr", "Aza", "Abe"], today: "Gaur" } }(jQuery),
    function(t) { t.fn.datepicker.dates.fa = { days: ["\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647", "\u062f\u0648\u0634\u0646\u0628\u0647", "\u0633\u0647\u200c\u0634\u0646\u0628\u0647", "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647", "\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647", "\u062c\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647", "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647"], daysShort: ["\u06cc\u06a9", "\u062f\u0648", "\u0633\u0647", "\u0686\u0647\u0627\u0631", "\u067e\u0646\u062c", "\u062c\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647", "\u06cc\u06a9"], daysMin: ["\u06cc", "\u062f", "\u0633", "\u0686", "\u067e", "\u062c", "\u0634", "\u06cc"], months: ["\u0698\u0627\u0646\u0648\u06cc\u0647", "\u0641\u0648\u0631\u06cc\u0647", "\u0645\u0627\u0631\u0633", "\u0622\u0648\u0631\u06cc\u0644", "\u0645\u0647", "\u0698\u0648\u0626\u0646", "\u0698\u0648\u0626\u06cc\u0647", "\u0627\u0648\u062a", "\u0633\u067e\u062a\u0627\u0645\u0628\u0631", "\u0627\u06a9\u062a\u0628\u0631", "\u0646\u0648\u0627\u0645\u0628\u0631", "\u062f\u0633\u0627\u0645\u0628\u0631"], monthsShort: ["\u0698\u0627\u0646", "\u0641\u0648\u0631", "\u0645\u0627\u0631", "\u0622\u0648\u0631", "\u0645\u0647", "\u0698\u0648\u0646", "\u0698\u0648\u06cc", "\u0627\u0648\u062a", "\u0633\u067e\u062a", "\u0627\u06a9\u062a", "\u0646\u0648\u0627", "\u062f\u0633\u0627"], today: "\u0627\u0645\u0631\u0648\u0632", clear: "\u067e\u0627\u06a9 \u06a9\u0646", weekStart: 1, format: "yyyy/mm/dd" } }(jQuery),
    function(t) { t.fn.datepicker.dates.fi = { days: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"], daysShort: ["sun", "maa", "tii", "kes", "tor", "per", "lau"], daysMin: ["su", "ma", "ti", "ke", "to", "pe", "la"], months: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kes\xe4kuu", "hein\xe4kuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"], monthsShort: ["tam", "hel", "maa", "huh", "tou", "kes", "hei", "elo", "syy", "lok", "mar", "jou"], today: "t\xe4n\xe4\xe4n", clear: "Tyhjenn\xe4", weekStart: 1, format: "d.m.yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.fo = { days: ["Sunnudagur", "M\xe1nadagur", "T\xfdsdagur", "Mikudagur", "H\xf3sdagur", "Fr\xedggjadagur", "Leygardagur"], daysShort: ["Sun", "M\xe1n", "T\xfds", "Mik", "H\xf3s", "Fr\xed", "Ley"], daysMin: ["Su", "M\xe1", "T\xfd", "Mi", "H\xf3", "Fr", "Le"], months: ["Januar", "Februar", "Marts", "Apr\xedl", "Mei", "Juni", "Juli", "August", "Septembur", "Oktobur", "Novembur", "Desembur"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"], today: "\xcd Dag", clear: "Reinsa" } }(jQuery),
    function(t) { t.fn.datepicker.dates.fr = { days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"], daysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"], daysMin: ["D", "L", "Ma", "Me", "J", "V", "S"], months: ["Janvier", "F\xe9vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao\xfbt", "Septembre", "Octobre", "Novembre", "D\xe9cembre"], monthsShort: ["Jan", "F\xe9v", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "D\xe9c"], today: "Aujourd'hui", monthsTitle: "Mois", clear: "Effacer", weekStart: 1, format: "dd.mm.yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.fr = { days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], daysShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], daysMin: ["d", "l", "ma", "me", "j", "v", "s"], months: ["janvier", "f\xe9vrier", "mars", "avril", "mai", "juin", "juillet", "ao\xfbt", "septembre", "octobre", "novembre", "d\xe9cembre"], monthsShort: ["janv.", "f\xe9vr.", "mars", "avril", "mai", "juin", "juil.", "ao\xfbt", "sept.", "oct.", "nov.", "d\xe9c."], today: "Aujourd'hui", monthsTitle: "Mois", clear: "Effacer", weekStart: 1, format: "dd/mm/yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.gl = { days: ["Domingo", "Luns", "Martes", "M\xe9rcores", "Xoves", "Venres", "S\xe1bado"], daysShort: ["Dom", "Lun", "Mar", "M\xe9r", "Xov", "Ven", "S\xe1b"], daysMin: ["Do", "Lu", "Ma", "Me", "Xo", "Ve", "Sa"], months: ["Xaneiro", "Febreiro", "Marzo", "Abril", "Maio", "Xu\xf1o", "Xullo", "Agosto", "Setembro", "Outubro", "Novembro", "Decembro"], monthsShort: ["Xan", "Feb", "Mar", "Abr", "Mai", "Xun", "Xul", "Ago", "Sep", "Out", "Nov", "Dec"], today: "Hoxe", clear: "Limpar", weekStart: 1, format: "dd/mm/yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.he = { days: ["\u05e8\u05d0\u05e9\u05d5\u05df", "\u05e9\u05e0\u05d9", "\u05e9\u05dc\u05d9\u05e9\u05d9", "\u05e8\u05d1\u05d9\u05e2\u05d9", "\u05d7\u05de\u05d9\u05e9\u05d9", "\u05e9\u05d9\u05e9\u05d9", "\u05e9\u05d1\u05ea", "\u05e8\u05d0\u05e9\u05d5\u05df"], daysShort: ["\u05d0", "\u05d1", "\u05d2", "\u05d3", "\u05d4", "\u05d5", "\u05e9", "\u05d0"], daysMin: ["\u05d0", "\u05d1", "\u05d2", "\u05d3", "\u05d4", "\u05d5", "\u05e9", "\u05d0"], months: ["\u05d9\u05e0\u05d5\u05d0\u05e8", "\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8", "\u05de\u05e8\u05e5", "\u05d0\u05e4\u05e8\u05d9\u05dc", "\u05de\u05d0\u05d9", "\u05d9\u05d5\u05e0\u05d9", "\u05d9\u05d5\u05dc\u05d9", "\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8", "\u05e1\u05e4\u05d8\u05de\u05d1\u05e8", "\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8", "\u05e0\u05d5\u05d1\u05de\u05d1\u05e8", "\u05d3\u05e6\u05de\u05d1\u05e8"], monthsShort: ["\u05d9\u05e0\u05d5", "\u05e4\u05d1\u05e8", "\u05de\u05e8\u05e5", "\u05d0\u05e4\u05e8", "\u05de\u05d0\u05d9", "\u05d9\u05d5\u05e0", "\u05d9\u05d5\u05dc", "\u05d0\u05d5\u05d2", "\u05e1\u05e4\u05d8", "\u05d0\u05d5\u05e7", "\u05e0\u05d5\u05d1", "\u05d3\u05e6\u05de"], today: "\u05d4\u05d9\u05d5\u05dd", rtl: !0 } }(jQuery),
    function(t) { t.fn.datepicker.dates.hr = { days: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "\u010cetvrtak", "Petak", "Subota"], daysShort: ["Ned", "Pon", "Uto", "Sri", "\u010cet", "Pet", "Sub"], daysMin: ["Ne", "Po", "Ut", "Sr", "\u010ce", "Pe", "Su"], months: ["Sije\u010danj", "Velja\u010da", "O\u017eujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"], monthsShort: ["Sij", "Velj", "O\u017eu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"], today: "Danas" } }(jQuery),
    function(t) { t.fn.datepicker.dates.hu = { days: ["vas\xe1rnap", "h\xe9tf\u0151", "kedd", "szerda", "cs\xfct\xf6rt\xf6k", "p\xe9ntek", "szombat"], daysShort: ["vas", "h\xe9t", "ked", "sze", "cs\xfc", "p\xe9n", "szo"], daysMin: ["V", "H", "K", "Sze", "Cs", "P", "Szo"], months: ["janu\xe1r", "febru\xe1r", "m\xe1rcius", "\xe1prilis", "m\xe1jus", "j\xfanius", "j\xfalius", "augusztus", "szeptember", "okt\xf3ber", "november", "december"], monthsShort: ["jan", "feb", "m\xe1r", "\xe1pr", "m\xe1j", "j\xfan", "j\xfal", "aug", "sze", "okt", "nov", "dec"], today: "ma", weekStart: 1, clear: "t\xf6r\xf6l", titleFormat: "yyyy. MM", format: "yyyy.mm.dd" } }(jQuery),
    function(t) { t.fn.datepicker.dates.hy = { days: ["\u053f\u056b\u0580\u0561\u056f\u056b", "\u0535\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b", "\u0535\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b", "\u0549\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b", "\u0540\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b", "\u0548\u0582\u0580\u0562\u0561\u0569", "\u0547\u0561\u0562\u0561\u0569"], daysShort: ["\u053f\u0580\u056f", "\u0535\u0580\u056f", "\u0535\u0580\u0584", "\u0549\u0580\u0584", "\u0540\u0576\u0563", "\u0548\u0582\u0580", "\u0547\u0562\u0569"], daysMin: ["\u053f\u0580\u056f", "\u0535\u0580\u056f", "\u0535\u0580\u0584", "\u0549\u0580\u0584", "\u0540\u0576\u0563", "\u0548\u0582\u0580", "\u0547\u0562\u0569"], months: ["\u0540\u0578\u0582\u0576\u057e\u0561\u0580", "\u0553\u0565\u057f\u0580\u057e\u0561\u0580", "\u0544\u0561\u0580\u057f", "\u0531\u057a\u0580\u056b\u056c", "\u0544\u0561\u0575\u056b\u057d", "\u0540\u0578\u0582\u0576\u056b\u057d", "\u0540\u0578\u0582\u056c\u056b\u057d", "\u0555\u0563\u0578\u057d\u057f\u0578\u057d", "\u054d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580", "\u0540\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580", "\u0546\u0578\u0575\u0565\u0574\u0562\u0565\u0580", "\u0534\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580"], monthsShort: ["\u0540\u0578\u0582\u0576", "\u0553\u0565\u057f", "\u0544\u0561\u0580", "\u0531\u057a\u0580", "\u0544\u0561\u0575", "\u0540\u0576\u057d", "\u0540\u056c\u057d", "\u0555\u0563\u057d", "\u054d\u0565\u057a", "\u0540\u0578\u056f", "\u0546\u0574\u0562", "\u0534\u0565\u056f"], today: "\u0531\u0575\u057d\u0585\u0580", clear: "\u054b\u0576\u057b\u0565\u056c", format: "dd.mm.yyyy", weekStart: 1 } }(jQuery),
    function(t) { t.fn.datepicker.dates.id = { days: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"], daysShort: ["Mgu", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"], daysMin: ["Mg", "Sn", "Sl", "Ra", "Ka", "Ju", "Sa"], months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"], today: "Hari Ini", clear: "Kosongkan" } }(jQuery),
    function(t) { t.fn.datepicker.dates.is = { days: ["Sunnudagur", "M\xe1nudagur", "\xderi\xf0judagur", "Mi\xf0vikudagur", "Fimmtudagur", "F\xf6studagur", "Laugardagur"], daysShort: ["Sun", "M\xe1n", "\xderi", "Mi\xf0", "Fim", "F\xf6s", "Lau"], daysMin: ["Su", "M\xe1", "\xder", "Mi", "Fi", "F\xf6", "La"], months: ["Jan\xfaar", "Febr\xfaar", "Mars", "Apr\xedl", "Ma\xed", "J\xfan\xed", "J\xfal\xed", "\xc1g\xfast", "September", "Okt\xf3ber", "N\xf3vember", "Desember"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Ma\xed", "J\xfan", "J\xfal", "\xc1g\xfa", "Sep", "Okt", "N\xf3v", "Des"], today: "\xcd Dag" } }(jQuery),
    function(t) { t.fn.datepicker.dates.it = { days: ["Domenica", "Luned\xec", "Marted\xec", "Mercoled\xec", "Gioved\xec", "Venerd\xec", "Sabato"], daysShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"], daysMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"], months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"], monthsShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"], today: "Oggi", clear: "Cancella", weekStart: 1, format: "dd.mm.yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.it = { days: ["Domenica", "Luned\xec", "Marted\xec", "Mercoled\xec", "Gioved\xec", "Venerd\xec", "Sabato"], daysShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"], daysMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"], months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"], monthsShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"], today: "Oggi", monthsTitle: "Mesi", clear: "Cancella", weekStart: 1, format: "dd/mm/yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.ja = { days: ["\u65e5\u66dc", "\u6708\u66dc", "\u706b\u66dc", "\u6c34\u66dc", "\u6728\u66dc", "\u91d1\u66dc", "\u571f\u66dc"], daysShort: ["\u65e5", "\u6708", "\u706b", "\u6c34", "\u6728", "\u91d1", "\u571f"], daysMin: ["\u65e5", "\u6708", "\u706b", "\u6c34", "\u6728", "\u91d1", "\u571f"], months: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], monthsShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], today: "\u4eca\u65e5", format: "yyyy/mm/dd", titleFormat: "yyyy\u5e74mm\u6708", clear: "\u30af\u30ea\u30a2" } }(jQuery),
    function(t) { t.fn.datepicker.dates.ka = { days: ["\u10d9\u10d5\u10d8\u10e0\u10d0", "\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8", "\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8", "\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8", "\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8", "\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8", "\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8"], daysShort: ["\u10d9\u10d5\u10d8", "\u10dd\u10e0\u10e8", "\u10e1\u10d0\u10db", "\u10dd\u10d7\u10ee", "\u10ee\u10e3\u10d7", "\u10de\u10d0\u10e0", "\u10e8\u10d0\u10d1"], daysMin: ["\u10d9\u10d5", "\u10dd\u10e0", "\u10e1\u10d0", "\u10dd\u10d7", "\u10ee\u10e3", "\u10de\u10d0", "\u10e8\u10d0"], months: ["\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8", "\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8", "\u10db\u10d0\u10e0\u10e2\u10d8", "\u10d0\u10de\u10e0\u10d8\u10da\u10d8", "\u10db\u10d0\u10d8\u10e1\u10d8", "\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8", "\u10d8\u10d5\u10da\u10d8\u10e1\u10d8", "\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd", "\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8", "\u10dd\u10e5\u10e2\u10dd\u10db\u10d4\u10d1\u10d8", "\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8", "\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8"], monthsShort: ["\u10d8\u10d0\u10dc", "\u10d7\u10d4\u10d1", "\u10db\u10d0\u10e0", "\u10d0\u10de\u10e0", "\u10db\u10d0\u10d8", "\u10d8\u10d5\u10dc", "\u10d8\u10d5\u10da", "\u10d0\u10d2\u10d5", "\u10e1\u10d4\u10e5", "\u10dd\u10e5\u10e2", "\u10dc\u10dd\u10d4", "\u10d3\u10d4\u10d9"], today: "\u10d3\u10e6\u10d4\u10e1", clear: "\u10d2\u10d0\u10e1\u10e3\u10e4\u10d7\u10d0\u10d5\u10d4\u10d1\u10d0", weekStart: 1, format: "dd.mm.yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.kh = { days: ["\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799", "\u1785\u1793\u17d2\u1791", "\u17a2\u1784\u17d2\u1782\u17b6\u179a", "\u1796\u17bb\u1792", "\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd", "\u179f\u17bb\u1780\u17d2\u179a", "\u179f\u17c5\u179a\u17cd", "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799"], daysShort: ["\u17a2\u17b6.\u1791\u17b7", "\u1785\u1793\u17d2\u1791", "\u17a2\u1784\u17d2\u1782\u17b6\u179a", "\u1796\u17bb\u1792", "\u1796\u17d2\u179a.\u17a0", "\u179f\u17bb\u1780\u17d2\u179a", "\u179f\u17c5\u179a\u17cd", "\u17a2\u17b6.\u1791\u17b7"], daysMin: ["\u17a2\u17b6.\u1791\u17b7", "\u1785\u1793\u17d2\u1791", "\u17a2\u1784\u17d2\u1782\u17b6\u179a", "\u1796\u17bb\u1792", "\u1796\u17d2\u179a.\u17a0", "\u179f\u17bb\u1780\u17d2\u179a", "\u179f\u17c5\u179a\u17cd", "\u17a2\u17b6.\u1791\u17b7"], months: ["\u1798\u1780\u179a\u17b6", "\u1780\u17bb\u1798\u17d2\u1797\u17c7", "\u1798\u17b7\u1793\u17b6", "\u1798\u17c1\u179f\u17b6", "\u17a7\u179f\u1797\u17b6", "\u1798\u17b7\u1790\u17bb\u1793\u17b6", "\u1780\u1780\u17d2\u1780\u178a\u17b6", "\u179f\u17b8\u17a0\u17b6", "\u1780\u1789\u17d2\u1789\u17b6", "\u178f\u17bb\u179b\u17b6", "\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6", "\u1792\u17d2\u1793\u17bc"], monthsShort: ["\u1798\u1780\u179a\u17b6", "\u1780\u17bb\u1798\u17d2\u1797\u17c7", "\u1798\u17b7\u1793\u17b6", "\u1798\u17c1\u179f\u17b6", "\u17a7\u179f\u1797\u17b6", "\u1798\u17b7\u1790\u17bb\u1793\u17b6", "\u1780\u1780\u17d2\u1780\u178a\u17b6", "\u179f\u17b8\u17a0\u17b6", "\u1780\u1789\u17d2\u1789\u17b6", "\u178f\u17bb\u179b\u17b6", "\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6", "\u1792\u17d2\u1793\u17bc"], today: "\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7", clear: "\u179f\u17c6\u17a2\u17b6\u178f" } }(jQuery),
    function(t) { t.fn.datepicker.dates.kk = { days: ["\u0416\u0435\u043a\u0441\u0435\u043d\u0431\u0456", "\u0414\u04af\u0439\u0441\u0435\u043d\u0431\u0456", "\u0421\u0435\u0439\u0441\u0435\u043d\u0431\u0456", "\u0421\u04d9\u0440\u0441\u0435\u043d\u0431\u0456", "\u0411\u0435\u0439\u0441\u0435\u043d\u0431\u0456", "\u0416\u04b1\u043c\u0430", "\u0421\u0435\u043d\u0431\u0456"], daysShort: ["\u0416\u0435\u043a", "\u0414\u04af\u0439", "\u0421\u0435\u0439", "\u0421\u04d9\u0440", "\u0411\u0435\u0439", "\u0416\u04b1\u043c", "\u0421\u0435\u043d"], daysMin: ["\u0416\u043a", "\u0414\u0441", "\u0421\u0441", "\u0421\u0440", "\u0411\u0441", "\u0416\u043c", "\u0421\u043d"], months: ["\u049a\u0430\u04a3\u0442\u0430\u0440", "\u0410\u049b\u043f\u0430\u043d", "\u041d\u0430\u0443\u0440\u044b\u0437", "\u0421\u04d9\u0443\u0456\u0440", "\u041c\u0430\u043c\u044b\u0440", "\u041c\u0430\u0443\u0441\u044b\u043c", "\u0428\u0456\u043b\u0434\u0435", "\u0422\u0430\u043c\u044b\u0437", "\u049a\u044b\u0440\u043a\u04af\u0439\u0435\u043a", "\u049a\u0430\u0437\u0430\u043d", "\u049a\u0430\u0440\u0430\u0448\u0430", "\u0416\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d"], monthsShort: ["\u049a\u0430\u04a3", "\u0410\u049b\u043f", "\u041d\u0430\u0443", "\u0421\u04d9\u0443", "\u041c\u0430\u043c", "\u041c\u0430\u0443", "\u0428\u0456\u043b", "\u0422\u0430\u043c", "\u049a\u044b\u0440", "\u049a\u0430\u0437", "\u049a\u0430\u0440", "\u0416\u0435\u043b"], today: "\u0411\u04af\u0433\u0456\u043d", weekStart: 1 } }(jQuery),
    function(t) { t.fn.datepicker.dates.ko = { days: ["\uc77c\uc694\uc77c", "\uc6d4\uc694\uc77c", "\ud654\uc694\uc77c", "\uc218\uc694\uc77c", "\ubaa9\uc694\uc77c", "\uae08\uc694\uc77c", "\ud1a0\uc694\uc77c"], daysShort: ["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"], daysMin: ["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"], months: ["1\uc6d4", "2\uc6d4", "3\uc6d4", "4\uc6d4", "5\uc6d4", "6\uc6d4", "7\uc6d4", "8\uc6d4", "9\uc6d4", "10\uc6d4", "11\uc6d4", "12\uc6d4"], monthsShort: ["1\uc6d4", "2\uc6d4", "3\uc6d4", "4\uc6d4", "5\uc6d4", "6\uc6d4", "7\uc6d4", "8\uc6d4", "9\uc6d4", "10\uc6d4", "11\uc6d4", "12\uc6d4"], today: "\uc624\ub298", clear: "\uc0ad\uc81c", format: "yyyy-mm-dd", titleFormat: "yyyy\ub144mm\uc6d4", weekStart: 0 } }(jQuery),
    function(t) { t.fn.datepicker.dates.kr = { days: ["\uc77c\uc694\uc77c", "\uc6d4\uc694\uc77c", "\ud654\uc694\uc77c", "\uc218\uc694\uc77c", "\ubaa9\uc694\uc77c", "\uae08\uc694\uc77c", "\ud1a0\uc694\uc77c"], daysShort: ["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"], daysMin: ["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"], months: ["1\uc6d4", "2\uc6d4", "3\uc6d4", "4\uc6d4", "5\uc6d4", "6\uc6d4", "7\uc6d4", "8\uc6d4", "9\uc6d4", "10\uc6d4", "11\uc6d4", "12\uc6d4"], monthsShort: ["1\uc6d4", "2\uc6d4", "3\uc6d4", "4\uc6d4", "5\uc6d4", "6\uc6d4", "7\uc6d4", "8\uc6d4", "9\uc6d4", "10\uc6d4", "11\uc6d4", "12\uc6d4"] } }(jQuery),
    function(t) { t.fn.datepicker.dates.lt = { days: ["Sekmadienis", "Pirmadienis", "Antradienis", "Tre\u010diadienis", "Ketvirtadienis", "Penktadienis", "\u0160e\u0161tadienis"], daysShort: ["S", "Pr", "A", "T", "K", "Pn", "\u0160"], daysMin: ["Sk", "Pr", "An", "Tr", "Ke", "Pn", "\u0160t"], months: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegu\u017e\u0117", "Bir\u017eelis", "Liepa", "Rugpj\u016btis", "Rugs\u0117jis", "Spalis", "Lapkritis", "Gruodis"], monthsShort: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gru"], today: "\u0160iandien", monthsTitle: "M\u0117nesiai", clear: "I\u0161valyti", weekStart: 1, format: "yyyy-mm-dd" } }(jQuery),
    function(t) { t.fn.datepicker.dates.lv = { days: ["Sv\u0113tdiena", "Pirmdiena", "Otrdiena", "Tre\u0161diena", "Ceturtdiena", "Piektdiena", "Sestdiena"], daysShort: ["Sv", "P", "O", "T", "C", "Pk", "S"], daysMin: ["Sv", "Pr", "Ot", "Tr", "Ce", "Pk", "Se"], months: ["Janv\u0101ris", "Febru\u0101ris", "Marts", "Apr\u012blis", "Maijs", "J\u016bnijs", "J\u016blijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "J\u016bn", "J\u016bl", "Aug", "Sep", "Okt", "Nov", "Dec"], today: "\u0160odien", weekStart: 1 } }(jQuery),
    function(t) { t.fn.datepicker.dates.me = { days: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "\u010cetvrtak", "Petak", "Subota"], daysShort: ["Ned", "Pon", "Uto", "Sri", "\u010cet", "Pet", "Sub"], daysMin: ["Ne", "Po", "Ut", "Sr", "\u010ce", "Pe", "Su"], months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"], today: "Danas", weekStart: 1, clear: "Izbri\u0161i", format: "dd.mm.yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.mk = { days: ["\u041d\u0435\u0434\u0435\u043b\u0430", "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a", "\u0412\u0442\u043e\u0440\u043d\u0438\u043a", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0440\u0442\u043e\u043a", "\u041f\u0435\u0442\u043e\u043a", "\u0421\u0430\u0431\u043e\u0442\u0430"], daysShort: ["\u041d\u0435\u0434", "\u041f\u043e\u043d", "\u0412\u0442\u043e", "\u0421\u0440\u0435", "\u0427\u0435\u0442", "\u041f\u0435\u0442", "\u0421\u0430\u0431"], daysMin: ["\u041d\u0435", "\u041f\u043e", "\u0412\u0442", "\u0421\u0440", "\u0427\u0435", "\u041f\u0435", "\u0421\u0430"], months: ["\u0408\u0430\u043d\u0443\u0430\u0440\u0438", "\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0438\u043b", "\u041c\u0430\u0458", "\u0408\u0443\u043d\u0438", "\u0408\u0443\u043b\u0438", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438", "\u041e\u043a\u0442\u043e\u043c\u0432\u0440\u0438", "\u041d\u043e\u0435\u043c\u0432\u0440\u0438", "\u0414\u0435\u043a\u0435\u043c\u0432\u0440\u0438"], monthsShort: ["\u0408\u0430\u043d", "\u0424\u0435\u0432", "\u041c\u0430\u0440", "\u0410\u043f\u0440", "\u041c\u0430\u0458", "\u0408\u0443\u043d", "\u0408\u0443\u043b", "\u0410\u0432\u0433", "\u0421\u0435\u043f", "\u041e\u043a\u0442", "\u041d\u043e\u0435", "\u0414\u0435\u043a"], today: "\u0414\u0435\u043d\u0435\u0441", format: "dd.mm.yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.mn = { days: ["\u041d\u044f\u043c", "\u0414\u0430\u0432\u0430\u0430", "\u041c\u044f\u0433\u043c\u0430\u0440", "\u041b\u0445\u0430\u0433\u0432\u0430", "\u041f\u04af\u0440\u044d\u0432", "\u0411\u0430\u0430\u0441\u0430\u043d", "\u0411\u044f\u043c\u0431\u0430"], daysShort: ["\u041d\u044f\u043c", "\u0414\u0430\u0432", "\u041c\u044f\u0433", "\u041b\u0445\u0430", "\u041f\u04af\u0440", "\u0411\u0430\u0430", "\u0411\u044f\u043c"], daysMin: ["\u041d\u044f", "\u0414\u0430", "\u041c\u044f", "\u041b\u0445", "\u041f\u04af", "\u0411\u0430", "\u0411\u044f"], months: ["\u0425\u0443\u043b\u0433\u0430\u043d\u0430", "\u04ae\u0445\u044d\u0440", "\u0411\u0430\u0440", "\u0422\u0443\u0443\u043b\u0430\u0439", "\u041b\u0443\u0443", "\u041c\u043e\u0433\u043e\u0439", "\u041c\u043e\u0440\u044c", "\u0425\u043e\u043d\u044c", "\u0411\u0438\u0447", "\u0422\u0430\u0445\u0438\u0430", "\u041d\u043e\u0445\u043e\u0439", "\u0413\u0430\u0445\u0430\u0439"], monthsShort: ["\u0425\u0443\u043b", "\u04ae\u0445\u044d", "\u0411\u0430\u0440", "\u0422\u0443\u0443", "\u041b\u0443\u0443", "\u041c\u043e\u0433", "\u041c\u043e\u0440", "\u0425\u043e\u043d", "\u0411\u0438\u0447", "\u0422\u0430\u0445", "\u041d\u043e\u0445", "\u0413\u0430\u0445"], today: "\u04e8\u043d\u04e9\u04e9\u0434\u04e9\u0440", clear: "\u0422\u043e\u0434\u043e\u0440\u0445\u043e\u0439", format: "yyyy.mm.dd", weekStart: 1 } }(jQuery),
    function(t) { t.fn.datepicker.dates.ms = { days: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"], daysShort: ["Aha", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"], daysMin: ["Ah", "Is", "Se", "Ra", "Kh", "Ju", "Sa"], months: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"], today: "Hari Ini", clear: "Bersihkan" } }(jQuery),
    function(t) { t.fn.datepicker.dates.nb = { days: ["S\xf8ndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "L\xf8rdag"], daysShort: ["S\xf8n", "Man", "Tir", "Ons", "Tor", "Fre", "L\xf8r"], daysMin: ["S\xf8", "Ma", "Ti", "On", "To", "Fr", "L\xf8"], months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"], today: "I Dag", format: "dd.mm.yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates["nl-BE"] = { days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"], daysShort: ["zo", "ma", "di", "wo", "do", "vr", "za"], daysMin: ["zo", "ma", "di", "wo", "do", "vr", "za"], months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"], monthsShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], today: "Vandaag", monthsTitle: "Maanden", clear: "Leegmaken", weekStart: 1, format: "dd/mm/yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.nl = { days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"], daysShort: ["zo", "ma", "di", "wo", "do", "vr", "za"], daysMin: ["zo", "ma", "di", "wo", "do", "vr", "za"], months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"], monthsShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], today: "Vandaag", monthsTitle: "Maanden", clear: "Wissen", weekStart: 1, format: "dd-mm-yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.no = { days: ["S\xf8ndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "L\xf8rdag"], daysShort: ["S\xf8n", "Man", "Tir", "Ons", "Tor", "Fre", "L\xf8r"], daysMin: ["S\xf8", "Ma", "Ti", "On", "To", "Fr", "L\xf8"], months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"], today: "I dag", clear: "Nullstill", weekStart: 1, format: "dd.mm.yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.pl = { days: ["niedziela", "poniedzia\u0142ek", "wtorek", "\u015broda", "czwartek", "pi\u0105tek", "sobota"], daysShort: ["niedz.", "pon.", "wt.", "\u015br.", "czw.", "pi\u0105t.", "sob."], daysMin: ["ndz.", "pn.", "wt.", "\u015br.", "czw.", "pt.", "sob."], months: ["stycze\u0144", "luty", "marzec", "kwiecie\u0144", "maj", "czerwiec", "lipiec", "sierpie\u0144", "wrzesie\u0144", "pa\u017adziernik", "listopad", "grudzie\u0144"], monthsShort: ["sty.", "lut.", "mar.", "kwi.", "maj", "cze.", "lip.", "sie.", "wrz.", "pa\u017a.", "lis.", "gru."], today: "dzisiaj", weekStart: 1, clear: "wyczy\u015b\u0107", format: "dd.mm.yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates["pt-BR"] = { days: ["Domingo", "Segunda", "Ter\xe7a", "Quarta", "Quinta", "Sexta", "S\xe1bado"], daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S\xe1b"], daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"], months: ["Janeiro", "Fevereiro", "Mar\xe7o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"], today: "Hoje", monthsTitle: "Meses", clear: "Limpar", format: "dd/mm/yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.pt = { days: ["Domingo", "Segunda", "Ter\xe7a", "Quarta", "Quinta", "Sexta", "S\xe1bado"], daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S\xe1b"], daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"], months: ["Janeiro", "Fevereiro", "Mar\xe7o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"], today: "Hoje", monthsTitle: "Meses", clear: "Limpar", format: "dd/mm/yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.ro = { days: ["Duminic\u0103", "Luni", "Mar\u0163i", "Miercuri", "Joi", "Vineri", "S\xe2mb\u0103t\u0103"], daysShort: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "S\xe2m"], daysMin: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "S\xe2"], months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"], monthsShort: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Ast\u0103zi", clear: "\u0218terge", weekStart: 1 } }(jQuery),
    function(t) { t.fn.datepicker.dates["rs-latin"] = { days: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "\u010cetvrtak", "Petak", "Subota"], daysShort: ["Ned", "Pon", "Uto", "Sre", "\u010cet", "Pet", "Sub"], daysMin: ["N", "Po", "U", "Sr", "\u010c", "Pe", "Su"], months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"], today: "Danas", weekStart: 1, format: "dd.mm.yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.rs = { days: ["\u041d\u0435\u0434\u0435\u0459\u0430", "\u041f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a", "\u0423\u0442\u043e\u0440\u0430\u043a", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0440\u0442\u0430\u043a", "\u041f\u0435\u0442\u0430\u043a", "\u0421\u0443\u0431\u043e\u0442\u0430"], daysShort: ["\u041d\u0435\u0434", "\u041f\u043e\u043d", "\u0423\u0442\u043e", "\u0421\u0440\u0435", "\u0427\u0435\u0442", "\u041f\u0435\u0442", "\u0421\u0443\u0431"], daysMin: ["\u041d", "\u041f\u043e", "\u0423", "\u0421\u0440", "\u0427", "\u041f\u0435", "\u0421\u0443"], months: ["\u0408\u0430\u043d\u0443\u0430\u0440", "\u0424\u0435\u0431\u0440\u0443\u0430\u0440", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0438\u043b", "\u041c\u0430\u0458", "\u0408\u0443\u043d", "\u0408\u0443\u043b", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440", "\u041e\u043a\u0442\u043e\u0431\u0430\u0440", "\u041d\u043e\u0432\u0435\u043c\u0431\u0430\u0440", "\u0414\u0435\u0446\u0435\u043c\u0431\u0430\u0440"], monthsShort: ["\u0408\u0430\u043d", "\u0424\u0435\u0431", "\u041c\u0430\u0440", "\u0410\u043f\u0440", "\u041c\u0430\u0458", "\u0408\u0443\u043d", "\u0408\u0443\u043b", "\u0410\u0432\u0433", "\u0421\u0435\u043f", "\u041e\u043a\u0442", "\u041d\u043e\u0432", "\u0414\u0435\u0446"], today: "\u0414\u0430\u043d\u0430\u0441", weekStart: 1, format: "dd.mm.yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.ru = { days: ["\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435", "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a", "\u0412\u0442\u043e\u0440\u043d\u0438\u043a", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0435\u0440\u0433", "\u041f\u044f\u0442\u043d\u0438\u0446\u0430", "\u0421\u0443\u0431\u0431\u043e\u0442\u0430"], daysShort: ["\u0412\u0441\u043a", "\u041f\u043d\u0434", "\u0412\u0442\u0440", "\u0421\u0440\u0434", "\u0427\u0442\u0432", "\u041f\u0442\u043d", "\u0421\u0443\u0431"], daysMin: ["\u0412\u0441", "\u041f\u043d", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041f\u0442", "\u0421\u0431"], months: ["\u042f\u043d\u0432\u0430\u0440\u044c", "\u0424\u0435\u0432\u0440\u0430\u043b\u044c", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0435\u043b\u044c", "\u041c\u0430\u0439", "\u0418\u044e\u043d\u044c", "\u0418\u044e\u043b\u044c", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c", "\u041e\u043a\u0442\u044f\u0431\u0440\u044c", "\u041d\u043e\u044f\u0431\u0440\u044c", "\u0414\u0435\u043a\u0430\u0431\u0440\u044c"], monthsShort: ["\u042f\u043d\u0432", "\u0424\u0435\u0432", "\u041c\u0430\u0440", "\u0410\u043f\u0440", "\u041c\u0430\u0439", "\u0418\u044e\u043d", "\u0418\u044e\u043b", "\u0410\u0432\u0433", "\u0421\u0435\u043d", "\u041e\u043a\u0442", "\u041d\u043e\u044f", "\u0414\u0435\u043a"], today: "\u0421\u0435\u0433\u043e\u0434\u043d\u044f", clear: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c", format: "dd.mm.yyyy", weekStart: 1 } }(jQuery),
    function(t) { t.fn.datepicker.dates.sk = { days: ["Nede\u013ea", "Pondelok", "Utorok", "Streda", "\u0160tvrtok", "Piatok", "Sobota"], daysShort: ["Ned", "Pon", "Uto", "Str", "\u0160tv", "Pia", "Sob"], daysMin: ["Ne", "Po", "Ut", "St", "\u0160t", "Pia", "So"], months: ["Janu\xe1r", "Febru\xe1r", "Marec", "Apr\xedl", "M\xe1j", "J\xfan", "J\xfal", "August", "September", "Okt\xf3ber", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "M\xe1j", "J\xfan", "J\xfal", "Aug", "Sep", "Okt", "Nov", "Dec"], today: "Dnes", clear: "Vymaza\u0165", weekStart: 1, format: "d.m.yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.sl = { days: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "\u010cetrtek", "Petek", "Sobota"], daysShort: ["Ned", "Pon", "Tor", "Sre", "\u010cet", "Pet", "Sob"], daysMin: ["Ne", "Po", "To", "Sr", "\u010ce", "Pe", "So"], months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"], today: "Danes" } }(jQuery),
    function(t) { t.fn.datepicker.dates.sq = { days: ["E Diel", "E H\xebn\xeb", "E Mart\u0113", "E M\xebrkur\xeb", "E Enjte", "E Premte", "E Shtun\xeb"], daysShort: ["Die", "H\xebn", "Mar", "M\xebr", "Enj", "Pre", "Shtu"], daysMin: ["Di", "H\xeb", "Ma", "M\xeb", "En", "Pr", "Sht"], months: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "N\xebntor", "Dhjetor"], monthsShort: ["Jan", "Shk", "Mar", "Pri", "Maj", "Qer", "Korr", "Gu", "Sht", "Tet", "N\xebn", "Dhjet"], today: "Sot" } }(jQuery),
    function(t) { t.fn.datepicker.dates["sr-latin"] = { days: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "\u010cetvrtak", "Petak", "Subota"], daysShort: ["Ned", "Pon", "Uto", "Sre", "\u010cet", "Pet", "Sub"], daysMin: ["N", "Po", "U", "Sr", "\u010c", "Pe", "Su"], months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"], today: "Danas", weekStart: 1, format: "dd.mm.yyyy" } }(jQuery),
    function(t) {
        t.fn.datepicker.dates.sr = {
            days: ["\u041d\u0435\u0434\u0435\u0459\u0430", "\u041f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a", "\u0423\u0442\u043e\u0440\u0430\u043a", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0440\u0442\u0430\u043a", "\u041f\u0435\u0442\u0430\u043a", "\u0421\u0443\u0431\u043e\u0442\u0430"],
            daysShort: ["\u041d\u0435\u0434", "\u041f\u043e\u043d", "\u0423\u0442\u043e", "\u0421\u0440\u0435", "\u0427\u0435\u0442", "\u041f\u0435\u0442", "\u0421\u0443\u0431"],
            daysMin: ["\u041d", "\u041f\u043e", "\u0423", "\u0421\u0440", "\u0427", "\u041f\u0435", "\u0421\u0443"],
            months: ["\u0408\u0430\u043d\u0443\u0430\u0440", "\u0424\u0435\u0431\u0440\u0443\u0430\u0440", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0438\u043b", "\u041c\u0430\u0458", "\u0408\u0443\u043d", "\u0408\u0443\u043b", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440", "\u041e\u043a\u0442\u043e\u0431\u0430\u0440", "\u041d\u043e\u0432\u0435\u043c\u0431\u0430\u0440", "\u0414\u0435\u0446\u0435\u043c\u0431\u0430\u0440"],
            monthsShort: ["\u0408\u0430\u043d", "\u0424\u0435\u0431", "\u041c\u0430\u0440", "\u0410\u043f\u0440", "\u041c\u0430\u0458", "\u0408\u0443\u043d", "\u0408\u0443\u043b", "\u0410\u0432\u0433", "\u0421\u0435\u043f", "\u041e\u043a\u0442", "\u041d\u043e\u0432", "\u0414\u0435\u0446"],
            today: "\u0414\u0430\u043d\u0430\u0441",
            weekStart: 1,
            format: "dd.mm.yyyy"
        }
    }(jQuery),
    function(t) { t.fn.datepicker.dates.sv = { days: ["S\xf6ndag", "M\xe5ndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "L\xf6rdag"], daysShort: ["S\xf6n", "M\xe5n", "Tis", "Ons", "Tor", "Fre", "L\xf6r"], daysMin: ["S\xf6", "M\xe5", "Ti", "On", "To", "Fr", "L\xf6"], months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"], today: "Idag", format: "yyyy-mm-dd", weekStart: 1, clear: "Rensa" } }(jQuery),
    function(t) { t.fn.datepicker.dates.sw = { days: ["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"], daysShort: ["J2", "J3", "J4", "J5", "Alh", "Ij", "J1"], daysMin: ["2", "3", "4", "5", "A", "I", "1"], months: ["Januari", "Februari", "Machi", "Aprili", "Mei", "Juni", "Julai", "Agosti", "Septemba", "Oktoba", "Novemba", "Desemba"], monthsShort: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ago", "Sep", "Okt", "Nov", "Des"], today: "Leo" } }(jQuery),
    function(t) { t.fn.datepicker.dates.th = { days: ["\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c", "\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c", "\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23", "\u0e1e\u0e38\u0e18", "\u0e1e\u0e24\u0e2b\u0e31\u0e2a", "\u0e28\u0e38\u0e01\u0e23\u0e4c", "\u0e40\u0e2a\u0e32\u0e23\u0e4c", "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c"], daysShort: ["\u0e2d\u0e32", "\u0e08", "\u0e2d", "\u0e1e", "\u0e1e\u0e24", "\u0e28", "\u0e2a", "\u0e2d\u0e32"], daysMin: ["\u0e2d\u0e32", "\u0e08", "\u0e2d", "\u0e1e", "\u0e1e\u0e24", "\u0e28", "\u0e2a", "\u0e2d\u0e32"], months: ["\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21", "\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c", "\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21", "\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19", "\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21", "\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19", "\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21", "\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21", "\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19", "\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21", "\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19", "\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21"], monthsShort: ["\u0e21.\u0e04.", "\u0e01.\u0e1e.", "\u0e21\u0e35.\u0e04.", "\u0e40\u0e21.\u0e22.", "\u0e1e.\u0e04.", "\u0e21\u0e34.\u0e22.", "\u0e01.\u0e04.", "\u0e2a.\u0e04.", "\u0e01.\u0e22.", "\u0e15.\u0e04.", "\u0e1e.\u0e22.", "\u0e18.\u0e04."], today: "\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49" } }(jQuery),
    function(t) { t.fn.datepicker.dates.tr = { days: ["Pazar", "Pazartesi", "Sal\u0131", "\xc7ar\u015famba", "Per\u015fembe", "Cuma", "Cumartesi"], daysShort: ["Pz", "Pzt", "Sal", "\xc7r\u015f", "Pr\u015f", "Cu", "Cts"], daysMin: ["Pz", "Pzt", "Sa", "\xc7r", "Pr", "Cu", "Ct"], months: ["Ocak", "\u015eubat", "Mart", "Nisan", "May\u0131s", "Haziran", "Temmuz", "A\u011fustos", "Eyl\xfcl", "Ekim", "Kas\u0131m", "Aral\u0131k"], monthsShort: ["Oca", "\u015eub", "Mar", "Nis", "May", "Haz", "Tem", "A\u011fu", "Eyl", "Eki", "Kas", "Ara"], today: "Bug\xfcn", clear: "Temizle", weekStart: 1, format: "dd.mm.yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates.ua = { days: ["\u041d\u0435\u0434\u0456\u043b\u044f", "\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a", "\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a", "\u0421\u0435\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0435\u0440", "\u041f'\u044f\u0442\u043d\u0438\u0446\u0430", "\u0421\u0443\u0431\u043e\u0442\u0430", "\u041d\u0435\u0434\u0456\u043b\u044f"], daysShort: ["\u041d\u0435\u0434", "\u041f\u043d\u0434", "\u0412\u0442\u0440", "\u0421\u0440\u0434", "\u0427\u0442\u0432", "\u041f\u0442\u043d", "\u0421\u0443\u0431", "\u041d\u0435\u0434"], daysMin: ["\u041d\u0434", "\u041f\u043d", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041f\u0442", "\u0421\u0431", "\u041d\u0434"], months: ["C\u0456\u0447\u0435\u043d\u044c", "\u041b\u044e\u0442\u0438\u0439", "\u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c", "\u041a\u0432\u0456\u0442\u0435\u043d\u044c", "\u0422\u0440\u0430\u0432\u0435\u043d\u044c", "\u0427\u0435\u0440\u0432\u0435\u043d\u044c", "\u041b\u0438\u043f\u0435\u043d\u044c", "\u0421\u0435\u0440\u043f\u0435\u043d\u044c", "\u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c", "\u0416\u043e\u0432\u0442\u0435\u043d\u044c", "\u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434", "\u0413\u0440\u0443\u0434\u0435\u043d\u044c"], monthsShort: ["\u0421\u0456\u0447", "\u041b\u044e\u0442", "\u0411\u0435\u0440", "\u041a\u0432\u0456", "\u0422\u0440\u0430", "\u0427\u0435\u0440", "\u041b\u0438\u043f", "\u0421\u0435\u0440", "\u0412\u0435\u0440", "\u0416\u043e\u0432", "\u041b\u0438\u0441", "\u0413\u0440\u0443"], today: "\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456", weekStart: 1 } }(jQuery),
    function(t) { t.fn.datepicker.dates.uk = { days: ["\u041d\u0435\u0434\u0456\u043b\u044f", "\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a", "\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a", "\u0421\u0435\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0435\u0440", "\u041f'\u044f\u0442\u043d\u0438\u0446\u044f", "\u0421\u0443\u0431\u043e\u0442\u0430"], daysShort: ["\u041d\u0435\u0434", "\u041f\u043d\u0434", "\u0412\u0442\u0440", "\u0421\u0440\u0434", "\u0427\u0442\u0432", "\u041f\u0442\u043d", "\u0421\u0443\u0431"], daysMin: ["\u041d\u0434", "\u041f\u043d", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041f\u0442", "\u0421\u0431"], months: ["C\u0456\u0447\u0435\u043d\u044c", "\u041b\u044e\u0442\u0438\u0439", "\u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c", "\u041a\u0432\u0456\u0442\u0435\u043d\u044c", "\u0422\u0440\u0430\u0432\u0435\u043d\u044c", "\u0427\u0435\u0440\u0432\u0435\u043d\u044c", "\u041b\u0438\u043f\u0435\u043d\u044c", "\u0421\u0435\u0440\u043f\u0435\u043d\u044c", "\u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c", "\u0416\u043e\u0432\u0442\u0435\u043d\u044c", "\u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434", "\u0413\u0440\u0443\u0434\u0435\u043d\u044c"], monthsShort: ["\u0421\u0456\u0447", "\u041b\u044e\u0442", "\u0411\u0435\u0440", "\u041a\u0432\u0456", "\u0422\u0440\u0430", "\u0427\u0435\u0440", "\u041b\u0438\u043f", "\u0421\u0435\u0440", "\u0412\u0435\u0440", "\u0416\u043e\u0432", "\u041b\u0438\u0441", "\u0413\u0440\u0443"], today: "\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456", clear: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438", format: "dd.mm.yyyy", weekStart: 1 } }(jQuery),
    function(t) { t.fn.datepicker.dates.vi = { days: ["Ch\u1ee7 nh\u1eadt", "Th\u1ee9 hai", "Th\u1ee9 ba", "Th\u1ee9 t\u01b0", "Th\u1ee9 n\u0103m", "Th\u1ee9 s\xe1u", "Th\u1ee9 b\u1ea3y"], daysShort: ["CN", "Th\u1ee9 2", "Th\u1ee9 3", "Th\u1ee9 4", "Th\u1ee9 5", "Th\u1ee9 6", "Th\u1ee9 7"], daysMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"], months: ["Th\xe1ng 1", "Th\xe1ng 2", "Th\xe1ng 3", "Th\xe1ng 4", "Th\xe1ng 5", "Th\xe1ng 6", "Th\xe1ng 7", "Th\xe1ng 8", "Th\xe1ng 9", "Th\xe1ng 10", "Th\xe1ng 11", "Th\xe1ng 12"], monthsShort: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"], today: "H\xf4m nay", clear: "X\xf3a", format: "dd/mm/yyyy" } }(jQuery),
    function(t) { t.fn.datepicker.dates["zh-CN"] = { days: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"], daysShort: ["\u5468\u65e5", "\u5468\u4e00", "\u5468\u4e8c", "\u5468\u4e09", "\u5468\u56db", "\u5468\u4e94", "\u5468\u516d"], daysMin: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"], months: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"], monthsShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], today: "\u4eca\u65e5", clear: "\u6e05\u9664", format: "yyyy\u5e74mm\u6708dd\u65e5", titleFormat: "yyyy\u5e74mm\u6708", weekStart: 1 } }(jQuery),
    function(t) { t.fn.datepicker.dates["zh-TW"] = { days: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"], daysShort: ["\u9031\u65e5", "\u9031\u4e00", "\u9031\u4e8c", "\u9031\u4e09", "\u9031\u56db", "\u9031\u4e94", "\u9031\u516d"], daysMin: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"], months: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"], monthsShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], today: "\u4eca\u5929", format: "yyyy\u5e74mm\u6708dd\u65e5", weekStart: 1, clear: "\u6e05\u9664" } }(jQuery);
var _ONE_DAY = 864e5,
    jq = window.Zepto || window.jQuery;
Datepair.prototype = { constructor: Datepair, option: function(t, e) {
            if ("object" == typeof t) this.settings = simpleExtend(this.settings, t);
            else if ("string" == typeof t && "undefined" != typeof e) this.settings[t] = e;
            else if ("string" == typeof t) return this.settings[t];
            this._updateEndMintime() }, getTimeDiff: function() {
            var t = this.dateDelta + this.timeDelta;
            return !(t < 0) || this.startDateInput && this.endDateInput || (t += _ONE_DAY), t }, refresh: function() {
            if (this.startDateInput && this.startDateInput.value && this.endDateInput && this.endDateInput.value) {
                var t = this.settings.parseDate(this.startDateInput),
                    e = this.settings.parseDate(this.endDateInput);
                t && e && (this.dateDelta = e.getTime() - t.getTime()) }
            if (this.startTimeInput && this.startTimeInput.value && this.endTimeInput && this.endTimeInput.value) {
                var i = this.settings.parseTime(this.startTimeInput),
                    n = this.settings.parseTime(this.endTimeInput);
                i && n && (this.timeDelta = n.getTime() - i.getTime(), this._updateEndMintime()) } }, remove: function() { this._unbindChangeHandler() }, _bindChangeHandler: function() { jq ? jq(this.container).on("change.datepair", jq.proxy(this.handleEvent, this)) : this.container.addEventListener("change", this, !1) }, _unbindChangeHandler: function() { jq ? jq(this.container).off("change.datepair") : this.container.removeEventListener("change", this, !1) }, handleEvent: function(t) { this._unbindChangeHandler(), hasClass(t.target, this.settings.dateClass) ? "" != t.target.value ? (this._dateChanged(t.target), this._timeChanged(t.target)) : this.dateDelta = null : hasClass(t.target, this.settings.timeClass) && ("" != t.target.value ? this._timeChanged(t.target) : this.timeDelta = null), this._validateRanges(), this._updateEndMintime(), this._bindChangeHandler() }, _dateChanged: function(t) {
            if (this.startDateInput && this.endDateInput) {
                var e = this.settings.parseDate(this.startDateInput),
                    i = this.settings.parseDate(this.endDateInput);
                if (e && i)
                    if ("start" == this.settings.anchor && hasClass(t, this.settings.startClass)) {
                        var n = new Date(e.getTime() + this.dateDelta);
                        this.settings.updateDate(this.endDateInput, n) } else if ("end" == this.settings.anchor && hasClass(t, this.settings.endClass)) {
                    var n = new Date(i.getTime() - this.dateDelta);
                    this.settings.updateDate(this.startDateInput, n) } else if (i < e) {
                    var r = hasClass(t, this.settings.startClass) ? this.endDateInput : this.startDateInput,
                        s = this.settings.parseDate(t);
                    this.dateDelta = 0, this.settings.updateDate(r, s) } else this.dateDelta = i.getTime() - e.getTime();
                else if (null !== this.settings.defaultDateDelta) {
                    if (e) {
                        var o = new Date(e.getTime() + this.settings.defaultDateDelta * _ONE_DAY);
                        this.settings.updateDate(this.endDateInput, o) } else if (i) {
                        var a = new Date(i.getTime() - this.settings.defaultDateDelta * _ONE_DAY);
                        this.settings.updateDate(this.startDateInput, a) }
                    this.dateDelta = this.settings.defaultDateDelta * _ONE_DAY } else this.dateDelta = null } }, _timeChanged: function(t) {
            if (this.startTimeInput && this.endTimeInput) {
                var e = this.settings.parseTime(this.startTimeInput),
                    i = this.settings.parseTime(this.endTimeInput);
                if (e && i)
                    if ("start" == this.settings.anchor && hasClass(t, this.settings.startClass)) {
                        var n = new Date(e.getTime() + this.timeDelta);
                        this.settings.updateTime(this.endTimeInput, n), i = this.settings.parseTime(this.endTimeInput), this._doMidnightRollover(e, i) } else if ("end" == this.settings.anchor && hasClass(t, this.settings.endClass)) {
                    var n = new Date(i.getTime() - this.timeDelta);
                    this.settings.updateTime(this.startTimeInput, n), e = this.settings.parseTime(this.startTimeInput), this._doMidnightRollover(e, i) } else { this._doMidnightRollover(e, i);
                    var r, s;
                    if (this.startDateInput && this.endDateInput && (r = this.settings.parseDate(this.startDateInput), s = this.settings.parseDate(this.endDateInput)), +r == +s && i < e) {
                        var o = hasClass(t, this.settings.endClass) ? this.endTimeInput : this.startTimeInput,
                            a = hasClass(t, this.settings.startClass) ? this.endTimeInput : this.startTimeInput,
                            l = this.settings.parseTime(o);
                        this.timeDelta = 0, this.settings.updateTime(a, l) } else this.timeDelta = i.getTime() - e.getTime() } else if (null !== this.settings.defaultTimeDelta) {
                    if (e) {
                        var u = new Date(e.getTime() + this.settings.defaultTimeDelta);
                        this.settings.updateTime(this.endTimeInput, u) } else if (i) {
                        var d = new Date(i.getTime() - this.settings.defaultTimeDelta);
                        this.settings.updateTime(this.startTimeInput, d) }
                    this.timeDelta = this.settings.defaultTimeDelta } else this.timeDelta = null } }, _doMidnightRollover: function(t, e) {
            if (this.startDateInput && this.endDateInput) {
                var i = this.settings.parseDate(this.endDateInput),
                    n = this.settings.parseDate(this.startDateInput),
                    r = e.getTime() - t.getTime(),
                    s = e < t ? _ONE_DAY : -1 * _ONE_DAY;
                null !== this.dateDelta && this.dateDelta + this.timeDelta <= _ONE_DAY && this.dateDelta + r != 0 && (s > 0 || 0 != this.dateDelta) && (r >= 0 && this.timeDelta < 0 || r < 0 && this.timeDelta >= 0) && ("start" == this.settings.anchor ? (this.settings.updateDate(this.endDateInput, new Date(i.getTime() + s)), this._dateChanged(this.endDateInput)) : "end" == this.settings.anchor && (this.settings.updateDate(this.startDateInput, new Date(n.getTime() - s)), this._dateChanged(this.startDateInput))), this.timeDelta = r } }, _updateEndMintime: function() {
            if ("function" == typeof this.settings.setMinTime) {
                var t = null; "start" == this.settings.anchor && (!this.dateDelta || this.dateDelta < _ONE_DAY || this.timeDelta && this.dateDelta + this.timeDelta < _ONE_DAY) && (t = this.settings.parseTime(this.startTimeInput)), this.settings.setMinTime(this.endTimeInput, t) } }, _validateRanges: function() {
            return this.startTimeInput && this.endTimeInput && null === this.timeDelta ? void triggerSimpleCustomEvent(this.container, "rangeIncomplete") : this.startDateInput && this.endDateInput && null === this.dateDelta ? void triggerSimpleCustomEvent(this.container, "rangeIncomplete") : void(!this.startDateInput || !this.endDateInput || this.dateDelta + this.timeDelta >= 0 ? triggerSimpleCustomEvent(this.container, "rangeSelected") : triggerSimpleCustomEvent(this.container, "rangeError")) } },
    function(t) { t && (t.fn.datepair = function(e) {
            var i;
            return this.each(function() {
                var n = t(this),
                    r = n.data("datepair"),
                    s = "object" == typeof e && e;
                r || (r = new Datepair(this, s), n.data("datepair", r)), "string" == typeof e && (i = r[e]()) }), i || this }, t("[data-datepair]").each(function() {
            var e = t(this);
            e.datepair(e.data()) })) }(window.Zepto || window.jQuery);
var _slice = Array.prototype.slice;
! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : t.parsley = e(t.jQuery) }(this, function(t) {
    "use strict";

    function e(t, e) {
        return t.parsleyAdaptedCallback || (t.parsleyAdaptedCallback = function() {
            var i = Array.prototype.slice.call(arguments, 0);
            i.unshift(this), t.apply(e || j, i) }), t.parsleyAdaptedCallback }

    function i(t) {
        return 0 === t.lastIndexOf(O, 0) ? t.substr(O.length) : t }

    function n() {
        var e = this,
            i = window || global;
        t.extend(this, { isNativeEvent: function(t) {
                return t.originalEvent && t.originalEvent.isTrusted !== !1 }, fakeInputEvent: function(i) { e.isNativeEvent(i) && t(i.target).trigger("input") }, misbehaves: function(i) { e.isNativeEvent(i) && (e.behavesOk(i), t(document).on("change.inputevent", i.data.selector, e.fakeInputEvent), e.fakeInputEvent(i)) }, behavesOk: function(i) { e.isNativeEvent(i) && t(document).off("input.inputevent", i.data.selector, e.behavesOk).off("change.inputevent", i.data.selector, e.misbehaves) }, install: function() {
                if (!i.inputEventPatched) { i.inputEventPatched = "0.0.3";
                    for (var n = ["select", 'input[type="checkbox"]', 'input[type="radio"]', 'input[type="file"]'], r = 0; r < n.length; r++) {
                        var s = n[r];
                        t(document).on("input.inputevent", s, { selector: s }, e.behavesOk).on("change.inputevent", s, { selector: s }, e.misbehaves) } } }, uninstall: function() { delete i.inputEventPatched, t(document).off(".inputevent") } }) }
    var r = 1,
        s = {},
        o = { attr: function(t, e, i) {
                var n, r, s, o = new RegExp("^" + e, "i");
                if ("undefined" == typeof i) i = {};
                else
                    for (n in i) i.hasOwnProperty(n) && delete i[n];
                if ("undefined" == typeof t || "undefined" == typeof t[0]) return i;
                for (s = t[0].attributes, n = s.length; n--;) r = s[n], r && r.specified && o.test(r.name) && (i[this.camelize(r.name.slice(e.length))] = this.deserializeValue(r.value));
                return i }, checkAttr: function(t, e, i) {
                return t.is("[" + e + i + "]") }, setAttr: function(t, e, i, n) { t[0].setAttribute(this.dasherize(e + i), String(n)) }, generateID: function() {
                return "" + r++ }, deserializeValue: function(e) {
                var i;
                try {
                    return e ? "true" == e || "false" != e && ("null" == e ? null : isNaN(i = Number(e)) ? /^[\[\{]/.test(e) ? t.parseJSON(e) : e : i) : e } catch (t) {
                    return e } }, camelize: function(t) {
                return t.replace(/-+(.)?/g, function(t, e) {
                    return e ? e.toUpperCase() : "" }) }, dasherize: function(t) {
                return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase() }, warn: function() {
                var t;
                window.console && "function" == typeof window.console.warn && (t = window.console).warn.apply(t, arguments) }, warnOnce: function(t) { s[t] || (s[t] = !0, this.warn.apply(this, arguments)) }, _resetWarnings: function() { s = {} }, trimString: function(t) {
                return t.replace(/^\s+|\s+$/g, "") }, namespaceEvents: function(e, i) {
                return e = this.trimString(e || "").split(/\s+/), e[0] ? t.map(e, function(t) {
                    return t + "." + i }).join(" ") : "" }, difference: function(e, i) {
                var n = [];
                return t.each(e, function(t, e) { i.indexOf(e) == -1 && n.push(e) }), n }, all: function(e) {
                return t.when.apply(t, _toConsumableArray(e).concat([42, 42])) }, objectCreate: Object.create || function() {
                var t = function() {};
                return function(e) {
                    if (arguments.length > 1) throw Error("Second argument not supported");
                    if ("object" != typeof e) throw TypeError("Argument must be an object");
                    t.prototype = e;
                    var i = new t;
                    return t.prototype = null, i } }(), _SubmitSelector: 'input[type="submit"], button:submit' },
        a = o,
        l = { namespace: "data-parsley-", inputs: "input, textarea, select", excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]", priorityEnabled: !0, multiple: null, group: null, uiEnabled: !0, validationThreshold: 3, focus: "first", trigger: !1, triggerAfterFailure: "input", errorClass: "parsley-error", successClass: "parsley-success", classHandler: function() {}, errorsContainer: function() {}, errorsWrapper: '<ul class="parsley-errors-list"></ul>', errorTemplate: "<li></li>" },
        u = function() { this.__id__ = a.generateID() };
    u.prototype = { asyncSupport: !0, _pipeAccordingToValidationResult: function() {
            var e = this,
                i = function() {
                    var i = t.Deferred();
                    return !0 !== e.validationResult && i.reject(), i.resolve().promise() };
            return [i, i] }, actualizeOptions: function() {
            return a.attr(this.$element, this.options.namespace, this.domOptions), this.parent && this.parent.actualizeOptions && this.parent.actualizeOptions(), this }, _resetOptions: function(t) { this.domOptions = a.objectCreate(this.parent.options), this.options = a.objectCreate(this.domOptions);
            for (var e in t) t.hasOwnProperty(e) && (this.options[e] = t[e]);
            this.actualizeOptions() }, _listeners: null, on: function(t, e) { this._listeners = this._listeners || {};
            var i = this._listeners[t] = this._listeners[t] || [];
            return i.push(e), this }, subscribe: function(e, i) { t.listenTo(this, e.toLowerCase(), i) }, off: function(t, e) {
            var i = this._listeners && this._listeners[t];
            if (i)
                if (e)
                    for (var n = i.length; n--;) i[n] === e && i.splice(n, 1);
                else delete this._listeners[t];
            return this }, unsubscribe: function(e) { t.unsubscribeTo(this, e.toLowerCase()) }, trigger: function(t, e, i) { e = e || this;
            var n, r = this._listeners && this._listeners[t];
            if (r)
                for (var s = r.length; s--;)
                    if (n = r[s].call(e, e, i), n === !1) return n;
            return !this.parent || this.parent.trigger(t, e, i) }, reset: function() {
            if ("ParsleyForm" !== this.__class__) return this._resetUI(), this._trigger("reset");
            for (var t = 0; t < this.fields.length; t++) this.fields[t].reset();
            this._trigger("reset") }, destroy: function() {
            if (this._destroyUI(), "ParsleyForm" !== this.__class__) return this.$element.removeData("Parsley"), this.$element.removeData("ParsleyFieldMultiple"), void this._trigger("destroy");
            for (var t = 0; t < this.fields.length; t++) this.fields[t].destroy();
            this.$element.removeData("Parsley"), this._trigger("destroy") }, asyncIsValid: function(t, e) {
            return a.warnOnce("asyncIsValid is deprecated; please use whenValid instead"), this.whenValid({ group: t, force: e }) }, _findRelated: function() {
            return this.options.multiple ? this.parent.$element.find("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]') : this.$element } };
    var d = { string: function(t) {
                return t }, integer: function(t) {
                if (isNaN(t)) throw 'Requirement is not an integer: "' + t + '"';
                return parseInt(t, 10) }, number: function(t) {
                if (isNaN(t)) throw 'Requirement is not a number: "' + t + '"';
                return parseFloat(t) }, reference: function(e) {
                var i = t(e);
                if (0 === i.length) throw 'No such reference: "' + e + '"';
                return i }, "boolean": function(t) {
                return "false" !== t }, object: function(t) {
                return a.deserializeValue(t) }, regexp: function(t) {
                var e = "";
                return /^\/.*\/(?:[gimy]*)$/.test(t) ? (e = t.replace(/.*\/([gimy]*)$/, "$1"), t = t.replace(new RegExp("^/(.*?)/" + e + "$"), "$1")) : t = "^" + t + "$", new RegExp(t, e) } },
        c = function(t, e) {
            var i = t.match(/^\s*\[(.*)\]\s*$/);
            if (!i) throw 'Requirement is not an array: "' + t + '"';
            var n = i[1].split(",").map(a.trimString);
            if (n.length !== e) throw "Requirement has " + n.length + " values when " + e + " are needed";
            return n },
        h = function(t, e) {
            var i = d[t || "string"];
            if (!i) throw 'Unknown requirement specification: "' + t + '"';
            return i(e) },
        p = function(t, e, i) {
            var n = null,
                r = {};
            for (var s in t)
                if (s) {
                    var o = i(s); "string" == typeof o && (o = h(t[s], o)), r[s] = o } else n = h(t[s], e);
            return [n, r] },
        f = function(e) { t.extend(!0, this, e) };
    f.prototype = { validate: function(e, i) {
            if (this.fn) return arguments.length > 3 && (i = [].slice.call(arguments, 1, -1)), this.fn.call(this, e, i);
            if (t.isArray(e)) {
                if (!this.validateMultiple) throw "Validator `" + this.name + "` does not handle multiple values";
                return this.validateMultiple.apply(this, arguments) }
            if (this.validateNumber) return !isNaN(e) && (arguments[0] = parseFloat(arguments[0]), this.validateNumber.apply(this, arguments));
            if (this.validateString) return this.validateString.apply(this, arguments);
            throw "Validator `" + this.name + "` only handles multiple values" }, parseRequirements: function(e, i) {
            if ("string" != typeof e) return t.isArray(e) ? e : [e];
            var n = this.requirementType;
            if (t.isArray(n)) {
                for (var r = c(e, n.length), s = 0; s < r.length; s++) r[s] = h(n[s], r[s]);
                return r }
            return t.isPlainObject(n) ? p(n, e, i) : [h(n, e)] }, requirementType: "string", priority: 2 };
    var m = function(t, e) { this.__class__ = "ParsleyValidatorRegistry", this.locale = "en", this.init(t || {}, e || {}) },
        g = { email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i, integer: /^-?\d+$/, digits: /^\d+$/, alphanum: /^\w+$/i, url: new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$", "i") };
    g.range = g.number;
    var y = function(t) {
        var e = ("" + t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        return e ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? +e[2] : 0)) : 0 };
    m.prototype = { init: function(e, i) { this.catalog = i, this.validators = t.extend({}, this.validators);
            for (var n in e) this.addValidator(n, e[n].fn, e[n].priority);
            window.Parsley.trigger("parsley:validator:init") }, setLocale: function(t) {
            if ("undefined" == typeof this.catalog[t]) throw new Error(t + " is not available in the catalog");
            return this.locale = t, this }, addCatalog: function(t, e, i) {
            return "object" == typeof e && (this.catalog[t] = e), !0 === i ? this.setLocale(t) : this }, addMessage: function(t, e, i) {
            return "undefined" == typeof this.catalog[t] && (this.catalog[t] = {}), this.catalog[t][e] = i, this }, addMessages: function(t, e) {
            for (var i in e) this.addMessage(t, i, e[i]);
            return this }, addValidator: function(t) {
            if (this.validators[t]) a.warn('Validator "' + t + '" is already defined.');
            else if (l.hasOwnProperty(t)) return void a.warn('"' + t + '" is a restricted keyword and is not a valid validator name.');
            return this._setValidator.apply(this, arguments) }, updateValidator: function(t) {
            return this.validators[t] ? this._setValidator.apply(this, arguments) : (a.warn('Validator "' + t + '" is not already defined.'), this.addValidator.apply(this, arguments)) }, removeValidator: function(t) {
            return this.validators[t] || a.warn('Validator "' + t + '" is not defined.'), delete this.validators[t], this }, _setValidator: function(t, e, i) { "object" != typeof e && (e = { fn: e, priority: i }), e.validate || (e = new f(e)), this.validators[t] = e;
            for (var n in e.messages || {}) this.addMessage(n, t, e.messages[n]);
            return this }, getErrorMessage: function(t) {
            var e;
            if ("type" === t.name) {
                var i = this.catalog[this.locale][t.name] || {};
                e = i[t.requirements] } else e = this.formatMessage(this.catalog[this.locale][t.name], t.requirements);
            return e || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage }, formatMessage: function(t, e) {
            if ("object" == typeof e) {
                for (var i in e) t = this.formatMessage(t, e[i]);
                return t }
            return "string" == typeof t ? t.replace(/%s/i, e) : "" }, validators: { notblank: { validateString: function(t) {
                    return /\S/.test(t) }, priority: 2 }, required: { validateMultiple: function(t) {
                    return t.length > 0 }, validateString: function(t) {
                    return /\S/.test(t) }, priority: 512 }, type: { validateString: function(t, e) {
                    var i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                        n = i.step,
                        r = void 0 === n ? "1" : n,
                        s = i.base,
                        o = void 0 === s ? 0 : s,
                        a = g[e];
                    if (!a) throw new Error("validator type `" + e + "` is not supported");
                    if (!a.test(t)) return !1;
                    if ("number" === e && !/^any$/i.test(r || "")) {
                        var l = Number(t),
                            u = Math.max(y(r), y(o));
                        if (y(l) > u) return !1;
                        var d = function(t) {
                            return Math.round(t * Math.pow(10, u)) };
                        if ((d(l) - d(o)) % d(r) != 0) return !1 }
                    return !0 }, requirementType: { "": "string", step: "string", base: "number" }, priority: 256 }, pattern: { validateString: function(t, e) {
                    return e.test(t) }, requirementType: "regexp", priority: 64 }, minlength: { validateString: function(t, e) {
                    return t.length >= e }, requirementType: "integer", priority: 30 }, maxlength: { validateString: function(t, e) {
                    return t.length <= e }, requirementType: "integer", priority: 30 }, length: { validateString: function(t, e, i) {
                    return t.length >= e && t.length <= i }, requirementType: ["integer", "integer"], priority: 30 }, mincheck: { validateMultiple: function(t, e) {
                    return t.length >= e }, requirementType: "integer", priority: 30 }, maxcheck: { validateMultiple: function(t, e) {
                    return t.length <= e }, requirementType: "integer", priority: 30 }, check: { validateMultiple: function(t, e, i) {
                    return t.length >= e && t.length <= i }, requirementType: ["integer", "integer"], priority: 30 }, min: { validateNumber: function(t, e) {
                    return t >= e }, requirementType: "number", priority: 30 }, max: { validateNumber: function(t, e) {
                    return t <= e }, requirementType: "number", priority: 30 }, range: { validateNumber: function(t, e, i) {
                    return t >= e && t <= i }, requirementType: ["number", "number"], priority: 30 }, equalto: { validateString: function(e, i) {
                    var n = t(i);
                    return n.length ? e === n.val() : e === i }, priority: 256 } } };
    var v = {},
        b = function t(e, i, n) {
            for (var r = [], s = [], o = 0; o < e.length; o++) {
                for (var a = !1, l = 0; l < i.length; l++)
                    if (e[o].assert.name === i[l].assert.name) { a = !0;
                        break }
                a ? s.push(e[o]) : r.push(e[o]) }
            return { kept: s, added: r, removed: n ? [] : t(i, e, !0).added } };
    v.Form = { _actualizeTriggers: function() {
            var t = this;
            this.$element.on("submit.Parsley", function(e) { t.onSubmitValidate(e) }), this.$element.on("click.Parsley", a._SubmitSelector, function(e) { t.onSubmitButton(e) }), !1 !== this.options.uiEnabled && this.$element.attr("novalidate", "") }, focus: function() {
            if (this._focusedField = null, !0 === this.validationResult || "none" === this.options.focus) return null;
            for (var t = 0; t < this.fields.length; t++) {
                var e = this.fields[t];
                if (!0 !== e.validationResult && e.validationResult.length > 0 && "undefined" == typeof e.options.noFocus && (this._focusedField = e.$element, "first" === this.options.focus)) break }
            return null === this._focusedField ? null : this._focusedField.focus() }, _destroyUI: function() { this.$element.off(".Parsley") } }, v.Field = {
        _reflowUI: function() {
            if (this._buildUI(), this._ui) {
                var t = b(this.validationResult, this._ui.lastValidationResult);
                this._ui.lastValidationResult = this.validationResult, this._manageStatusClass(), this._manageErrorsMessages(t), this._actualizeTriggers(), !t.kept.length && !t.added.length || this._failedOnce || (this._failedOnce = !0, this._actualizeTriggers()) } },
        getErrorsMessages: function() {
            if (!0 === this.validationResult) return [];
            for (var t = [], e = 0; e < this.validationResult.length; e++) t.push(this.validationResult[e].errorMessage || this._getErrorMessage(this.validationResult[e].assert));
            return t },
        addError: function(t) {
            var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = e.message,
                n = e.assert,
                r = e.updateClass,
                s = void 0 === r || r;
            this._buildUI(), this._addError(t, { message: i, assert: n }), s && this._errorClass() },
        updateError: function(t) {
            var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = e.message,
                n = e.assert,
                r = e.updateClass,
                s = void 0 === r || r;
            this._buildUI(), this._updateError(t, { message: i, assert: n }), s && this._errorClass() },
        removeError: function(t) {
            var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = e.updateClass,
                n = void 0 === i || i;
            this._buildUI(), this._removeError(t), n && this._manageStatusClass() },
        _manageStatusClass: function() { this.hasConstraints() && this.needsValidation() && !0 === this.validationResult ? this._successClass() : this.validationResult.length > 0 ? this._errorClass() : this._resetClass() },
        _manageErrorsMessages: function(e) {
            if ("undefined" == typeof this.options.errorsMessagesDisabled) {
                if ("undefined" != typeof this.options.errorMessage) return e.added.length || e.kept.length ? (this._insertErrorWrapper(), 0 === this._ui.$errorsWrapper.find(".parsley-custom-error-message").length && this._ui.$errorsWrapper.append(t(this.options.errorTemplate).addClass("parsley-custom-error-message")), this._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(this.options.errorMessage)) : this._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
                for (var i = 0; i < e.removed.length; i++) this._removeError(e.removed[i].assert.name);
                for (i = 0; i < e.added.length; i++) this._addError(e.added[i].assert.name, { message: e.added[i].errorMessage, assert: e.added[i].assert });
                for (i = 0; i < e.kept.length; i++) this._updateError(e.kept[i].assert.name, { message: e.kept[i].errorMessage, assert: e.kept[i].assert }) } },
        _addError: function(e, i) {
            var n = i.message,
                r = i.assert;
            this._insertErrorWrapper(), this._ui.$errorsWrapper.addClass("filled").append(t(this.options.errorTemplate).addClass("parsley-" + e).html(n || this._getErrorMessage(r))) },
        _updateError: function(t, e) {
            var i = e.message,
                n = e.assert;
            this._ui.$errorsWrapper.addClass("filled").find(".parsley-" + t).html(i || this._getErrorMessage(n)) },
        _removeError: function(t) { this._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + t).remove() },
        _getErrorMessage: function(t) {
            var e = t.name + "Message";
            return "undefined" != typeof this.options[e] ? window.Parsley.formatMessage(this.options[e], t.requirements) : window.Parsley.getErrorMessage(t) },
        _buildUI: function() {
            if (!this._ui && !1 !== this.options.uiEnabled) {
                var e = {};
                this.$element.attr(this.options.namespace + "id", this.__id__), e.$errorClassHandler = this._manageClassHandler(), e.errorsWrapperId = "parsley-id-" + (this.options.multiple ? "multiple-" + this.options.multiple : this.__id__), e.$errorsWrapper = t(this.options.errorsWrapper).attr("id", e.errorsWrapperId), e.lastValidationResult = [], e.validationInformationVisible = !1, this._ui = e } },
        _manageClassHandler: function() {
            if ("string" == typeof this.options.classHandler && t(this.options.classHandler).length) return t(this.options.classHandler);
            var e = this.options.classHandler.call(this, this);
            return "undefined" != typeof e && e.length ? e : this._inputHolder() },
        _inputHolder: function() {
            return !this.options.multiple || this.$element.is("select") ? this.$element : this.$element.parent() },
        _insertErrorWrapper: function() {
            var e;
            if (0 !== this._ui.$errorsWrapper.parent().length) return this._ui.$errorsWrapper.parent();
            if ("string" == typeof this.options.errorsContainer) {
                if (t(this.options.errorsContainer).length) return t(this.options.errorsContainer).append(this._ui.$errorsWrapper);
                a.warn("The errors container `" + this.options.errorsContainer + "` does not exist in DOM")
            } else "function" == typeof this.options.errorsContainer && (e = this.options.errorsContainer.call(this, this));
            return "undefined" != typeof e && e.length ? e.append(this._ui.$errorsWrapper) : this._inputHolder().after(this._ui.$errorsWrapper)
        },
        _actualizeTriggers: function() {
            var t, e = this,
                i = this._findRelated();
            i.off(".Parsley"), this._failedOnce ? i.on(a.namespaceEvents(this.options.triggerAfterFailure, "Parsley"), function() { e.validate() }) : (t = a.namespaceEvents(this.options.trigger, "Parsley")) && i.on(t, function(t) { e._eventValidate(t) }) },
        _eventValidate: function(t) {!(!/key|input/.test(t.type) || this._ui && this._ui.validationInformationVisible) && this.getValue().length <= this.options.validationThreshold || this.validate() },
        _resetUI: function() { this._failedOnce = !1, this._actualizeTriggers(), "undefined" != typeof this._ui && (this._ui.$errorsWrapper.removeClass("filled").children().remove(), this._resetClass(), this._ui.lastValidationResult = [], this._ui.validationInformationVisible = !1) },
        _destroyUI: function() { this._resetUI(), "undefined" != typeof this._ui && this._ui.$errorsWrapper.remove(), delete this._ui },
        _successClass: function() { this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass) },
        _errorClass: function() { this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass) },
        _resetClass: function() { this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass) }
    };
    var w = function(e, i, n) { this.__class__ = "ParsleyForm", this.$element = t(e), this.domOptions = i, this.options = n, this.parent = window.Parsley, this.fields = [], this.validationResult = null },
        k = { pending: null, resolved: !0, rejected: !1 };
    w.prototype = { onSubmitValidate: function(t) {
            var e = this;
            if (!0 !== t.parsley) {
                var i = this._$submitSource || this.$element.find(a._SubmitSelector).first();
                if (this._$submitSource = null, this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !0), !i.is("[formnovalidate]")) {
                    var n = this.whenValidate({ event: t }); "resolved" === n.state() && !1 !== this._trigger("submit") || (t.stopImmediatePropagation(), t.preventDefault(), "pending" === n.state() && n.done(function() { e._submit(i) })) } } }, onSubmitButton: function(e) { this._$submitSource = t(e.currentTarget) }, _submit: function(e) {
            if (!1 !== this._trigger("submit")) {
                if (e) {
                    var i = this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !1);
                    0 === i.length && (i = t('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element)), i.attr({ name: e.attr("name"), value: e.attr("value") }) }
                this.$element.trigger(t.extend(t.Event("submit"), { parsley: !0 })) } }, validate: function(e) {
            if (arguments.length >= 1 && !t.isPlainObject(e)) { a.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated.");
                var i = _slice.call(arguments),
                    n = i[0],
                    r = i[1],
                    s = i[2];
                e = { group: n, force: r, event: s } }
            return k[this.whenValidate(e).state()] }, whenValidate: function() {
            var e, i = this,
                n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                r = n.group,
                s = n.force,
                o = n.event;
            this.submitEvent = o, o && (this.submitEvent = t.extend({}, o, { preventDefault: function() { a.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"), i.validationResult = !1 } })), this.validationResult = !0, this._trigger("validate"), this._refreshFields();
            var l = this._withoutReactualizingFormOptions(function() {
                return t.map(i.fields, function(t) {
                    return t.whenValidate({ force: s, group: r }) }) });
            return (e = a.all(l).done(function() { i._trigger("success") }).fail(function() { i.validationResult = !1, i.focus(), i._trigger("error") }).always(function() { i._trigger("validated") })).pipe.apply(e, _toConsumableArray(this._pipeAccordingToValidationResult())) }, isValid: function(e) {
            if (arguments.length >= 1 && !t.isPlainObject(e)) { a.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated.");
                var i = _slice.call(arguments),
                    n = i[0],
                    r = i[1];
                e = { group: n, force: r } }
            return k[this.whenValid(e).state()] }, whenValid: function() {
            var e = this,
                i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                n = i.group,
                r = i.force;
            this._refreshFields();
            var s = this._withoutReactualizingFormOptions(function() {
                return t.map(e.fields, function(t) {
                    return t.whenValid({ group: n, force: r }) }) });
            return a.all(s) }, _refreshFields: function() {
            return this.actualizeOptions()._bindFields() }, _bindFields: function() {
            var e = this,
                i = this.fields;
            return this.fields = [], this.fieldsMappedById = {}, this._withoutReactualizingFormOptions(function() { e.$element.find(e.options.inputs).not(e.options.excluded).each(function(t, i) {
                    var n = new window.Parsley.Factory(i, {}, e); "ParsleyField" !== n.__class__ && "ParsleyFieldMultiple" !== n.__class__ || !0 === n.options.excluded || "undefined" == typeof e.fieldsMappedById[n.__class__ + "-" + n.__id__] && (e.fieldsMappedById[n.__class__ + "-" + n.__id__] = n, e.fields.push(n)) }), t.each(a.difference(i, e.fields), function(t, e) { e._trigger("reset") }) }), this }, _withoutReactualizingFormOptions: function(t) {
            var e = this.actualizeOptions;
            this.actualizeOptions = function() {
                return this };
            var i = t();
            return this.actualizeOptions = e, i }, _trigger: function(t) {
            return this.trigger("form:" + t) } };
    var T = function(e, i, n, r, s) {
            if (!/ParsleyField/.test(e.__class__)) throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");
            var o = window.Parsley._validatorRegistry.validators[i],
                a = new f(o);
            t.extend(this, { validator: a, name: i, requirements: n, priority: r || e.options[i + "Priority"] || a.priority, isDomConstraint: !0 === s }), this._parseRequirements(e.options) },
        S = function(t) {
            var e = t[0].toUpperCase();
            return e + t.slice(1) };
    T.prototype = { validate: function(t, e) {
            var i;
            return (i = this.validator).validate.apply(i, [t].concat(_toConsumableArray(this.requirementList), [e])) }, _parseRequirements: function(t) {
            var e = this;
            this.requirementList = this.validator.parseRequirements(this.requirements, function(i) {
                return t[e.name + S(i)] }) } };
    var C = function(e, i, n, r) { this.__class__ = "ParsleyField", this.$element = t(e), "undefined" != typeof r && (this.parent = r), this.options = n, this.domOptions = i, this.constraints = [], this.constraintsByName = {}, this.validationResult = !0, this._bindConstraints() },
        D = { pending: null, resolved: !0, rejected: !1 };
    C.prototype = { validate: function(e) { arguments.length >= 1 && !t.isPlainObject(e) && (a.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."), e = { options: e });
            var i = this.whenValidate(e);
            if (!i) return !0;
            switch (i.state()) {
                case "pending":
                    return null;
                case "resolved":
                    return !0;
                case "rejected":
                    return this.validationResult } }, whenValidate: function() {
            var t, e = this,
                i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                n = i.force,
                r = i.group;
            if (this.refreshConstraints(), !r || this._isInGroup(r)) return this.value = this.getValue(), this._trigger("validate"), (t = this.whenValid({ force: n, value: this.value, _refreshed: !0 }).always(function() { e._reflowUI() }).done(function() { e._trigger("success") }).fail(function() { e._trigger("error") }).always(function() { e._trigger("validated") })).pipe.apply(t, _toConsumableArray(this._pipeAccordingToValidationResult())) }, hasConstraints: function() {
            return 0 !== this.constraints.length }, needsValidation: function(t) {
            return "undefined" == typeof t && (t = this.getValue()), !(!t.length && !this._isRequired() && "undefined" == typeof this.options.validateIfEmpty) }, _isInGroup: function(e) {
            return t.isArray(this.options.group) ? -1 !== t.inArray(e, this.options.group) : this.options.group === e }, isValid: function(e) {
            if (arguments.length >= 1 && !t.isPlainObject(e)) { a.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated.");
                var i = _slice.call(arguments),
                    n = i[0],
                    r = i[1];
                e = { force: n, value: r } }
            var s = this.whenValid(e);
            return !s || D[s.state()] }, whenValid: function() {
            var e = this,
                i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                n = i.force,
                r = void 0 !== n && n,
                s = i.value,
                o = i.group,
                l = i._refreshed;
            if (l || this.refreshConstraints(), !o || this._isInGroup(o)) {
                if (this.validationResult = !0, !this.hasConstraints()) return t.when();
                if ("undefined" != typeof s && null !== s || (s = this.getValue()), !this.needsValidation(s) && !0 !== r) return t.when();
                var u = this._getGroupedConstraints(),
                    d = [];
                return t.each(u, function(i, n) {
                    var r = a.all(t.map(n, function(t) {
                        return e._validateConstraint(s, t) }));
                    if (d.push(r), "rejected" === r.state()) return !1 }), a.all(d) } }, _validateConstraint: function(e, i) {
            var n = this,
                r = i.validate(e, this);
            return !1 === r && (r = t.Deferred().reject()), a.all([r]).fail(function(t) { n.validationResult instanceof Array || (n.validationResult = []), n.validationResult.push({ assert: i, errorMessage: "string" == typeof t && t }) }) }, getValue: function() {
            var t;
            return t = "function" == typeof this.options.value ? this.options.value(this) : "undefined" != typeof this.options.value ? this.options.value : this.$element.val(), "undefined" == typeof t || null === t ? "" : this._handleWhitespace(t) }, refreshConstraints: function() {
            return this.actualizeOptions()._bindConstraints() }, addConstraint: function(t, e, i, n) {
            if (window.Parsley._validatorRegistry.validators[t]) {
                var r = new T(this, t, e, i, n); "undefined" !== this.constraintsByName[r.name] && this.removeConstraint(r.name), this.constraints.push(r), this.constraintsByName[r.name] = r }
            return this }, removeConstraint: function(t) {
            for (var e = 0; e < this.constraints.length; e++)
                if (t === this.constraints[e].name) { this.constraints.splice(e, 1);
                    break }
            return delete this.constraintsByName[t], this }, updateConstraint: function(t, e, i) {
            return this.removeConstraint(t).addConstraint(t, e, i) }, _bindConstraints: function() {
            for (var t = [], e = {}, i = 0; i < this.constraints.length; i++) !1 === this.constraints[i].isDomConstraint && (t.push(this.constraints[i]), e[this.constraints[i].name] = this.constraints[i]);
            this.constraints = t, this.constraintsByName = e;
            for (var n in this.options) this.addConstraint(n, this.options[n], void 0, !0);
            return this._bindHtml5Constraints() }, _bindHtml5Constraints: function() {
            (this.$element.hasClass("required") || this.$element.attr("required")) && this.addConstraint("required", !0, void 0, !0), "string" == typeof this.$element.attr("pattern") && this.addConstraint("pattern", this.$element.attr("pattern"), void 0, !0), "undefined" != typeof this.$element.attr("min") && "undefined" != typeof this.$element.attr("max") ? this.addConstraint("range", [this.$element.attr("min"), this.$element.attr("max")], void 0, !0) : "undefined" != typeof this.$element.attr("min") ? this.addConstraint("min", this.$element.attr("min"), void 0, !0) : "undefined" != typeof this.$element.attr("max") && this.addConstraint("max", this.$element.attr("max"), void 0, !0), "undefined" != typeof this.$element.attr("minlength") && "undefined" != typeof this.$element.attr("maxlength") ? this.addConstraint("length", [this.$element.attr("minlength"), this.$element.attr("maxlength")], void 0, !0) : "undefined" != typeof this.$element.attr("minlength") ? this.addConstraint("minlength", this.$element.attr("minlength"), void 0, !0) : "undefined" != typeof this.$element.attr("maxlength") && this.addConstraint("maxlength", this.$element.attr("maxlength"), void 0, !0);
            var t = this.$element.attr("type");
            return "undefined" == typeof t ? this : "number" === t ? this.addConstraint("type", ["number", { step: this.$element.attr("step"), base: this.$element.attr("min") || this.$element.attr("value") }], void 0, !0) : /^(email|url|range)$/i.test(t) ? this.addConstraint("type", t, void 0, !0) : this }, _isRequired: function() {
            return "undefined" != typeof this.constraintsByName.required && !1 !== this.constraintsByName.required.requirements }, _trigger: function(t) {
            return this.trigger("field:" + t) }, _handleWhitespace: function(t) {
            return !0 === this.options.trimValue && a.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'), "squish" === this.options.whitespace && (t = t.replace(/\s{2,}/g, " ")), "trim" !== this.options.whitespace && "squish" !== this.options.whitespace && !0 !== this.options.trimValue || (t = a.trimString(t)), t }, _getGroupedConstraints: function() {
            if (!1 === this.options.priorityEnabled) return [this.constraints];
            for (var t = [], e = {}, i = 0; i < this.constraints.length; i++) {
                var n = this.constraints[i].priority;
                e[n] || t.push(e[n] = []), e[n].push(this.constraints[i]) }
            return t.sort(function(t, e) {
                return e[0].priority - t[0].priority }), t } };
    var x = C,
        E = function() { this.__class__ = "ParsleyFieldMultiple" };
    E.prototype = { addElement: function(t) {
            return this.$elements.push(t), this }, refreshConstraints: function() {
            var e;
            if (this.constraints = [], this.$element.is("select")) return this.actualizeOptions()._bindConstraints(), this;
            for (var i = 0; i < this.$elements.length; i++)
                if (t("html").has(this.$elements[i]).length) { e = this.$elements[i].data("ParsleyFieldMultiple").refreshConstraints().constraints;
                    for (var n = 0; n < e.length; n++) this.addConstraint(e[n].name, e[n].requirements, e[n].priority, e[n].isDomConstraint) } else this.$elements.splice(i, 1);
            return this }, getValue: function() {
            if ("function" == typeof this.options.value) return this.options.value(this);
            if ("undefined" != typeof this.options.value) return this.options.value;
            if (this.$element.is("input[type=radio]")) return this._findRelated().filter(":checked").val() || "";
            if (this.$element.is("input[type=checkbox]")) {
                var e = [];
                return this._findRelated().filter(":checked").each(function() { e.push(t(this).val()) }), e }
            return this.$element.is("select") && null === this.$element.val() ? [] : this.$element.val() }, _init: function() {
            return this.$elements = [this.$element], this } };
    var M = function(e, i, n) { this.$element = t(e);
        var r = this.$element.data("Parsley");
        if (r) return "undefined" != typeof n && r.parent === window.Parsley && (r.parent = n, r._resetOptions(r.options)), "object" == typeof i && t.extend(r.options, i), r;
        if (!this.$element.length) throw new Error("You must bind Parsley on an existing element.");
        if ("undefined" != typeof n && "ParsleyForm" !== n.__class__) throw new Error("Parent instance must be a ParsleyForm instance");
        return this.parent = n || window.Parsley, this.init(i) };
    M.prototype = { init: function(t) {
            return this.__class__ = "Parsley", this.__version__ = "2.4.4", this.__id__ = a.generateID(), this._resetOptions(t), this.$element.is("form") || a.checkAttr(this.$element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.isMultiple() ? this.handleMultiple() : this.bind("parsleyField") }, isMultiple: function() {
            return this.$element.is("input[type=radio], input[type=checkbox]") || this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple") }, handleMultiple: function() {
            var e, i, n = this;
            if (this.options.multiple || ("undefined" != typeof this.$element.attr("name") && this.$element.attr("name").length ? this.options.multiple = e = this.$element.attr("name") : "undefined" != typeof this.$element.attr("id") && this.$element.attr("id").length && (this.options.multiple = this.$element.attr("id"))), this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")) return this.options.multiple = this.options.multiple || this.__id__, this.bind("parsleyFieldMultiple");
            if (!this.options.multiple) return a.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
            this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""), "undefined" != typeof e && t('input[name="' + e + '"]').each(function(e, i) { t(i).is("input[type=radio], input[type=checkbox]") && t(i).attr(n.options.namespace + "multiple", n.options.multiple) });
            for (var r = this._findRelated(), s = 0; s < r.length; s++)
                if (i = t(r.get(s)).data("Parsley"), "undefined" != typeof i) { this.$element.data("ParsleyFieldMultiple") || i.addElement(this.$element);
                    break }
            return this.bind("parsleyField", !0), i || this.bind("parsleyFieldMultiple") }, bind: function(e, i) {
            var n;
            switch (e) {
                case "parsleyForm":
                    n = t.extend(new w(this.$element, this.domOptions, this.options), new u, window.ParsleyExtend)._bindFields();
                    break;
                case "parsleyField":
                    n = t.extend(new x(this.$element, this.domOptions, this.options, this.parent), new u, window.ParsleyExtend);
                    break;
                case "parsleyFieldMultiple":
                    n = t.extend(new x(this.$element, this.domOptions, this.options, this.parent), new E, new u, window.ParsleyExtend)._init();
                    break;
                default:
                    throw new Error(e + "is not a supported Parsley type") }
            return this.options.multiple && a.setAttr(this.$element, this.options.namespace, "multiple", this.options.multiple), "undefined" != typeof i ? (this.$element.data("ParsleyFieldMultiple", n), n) : (this.$element.data("Parsley", n), n._actualizeTriggers(), n._trigger("init"), n) } };
    var _ = t.fn.jquery.split(".");
    if (parseInt(_[0]) <= 1 && parseInt(_[1]) < 8) throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
    _.forEach || a.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");
    var A = t.extend(new u, { $element: t(document), actualizeOptions: null, _resetOptions: null, Factory: M, version: "2.4.4" });
    t.extend(x.prototype, v.Field, u.prototype), t.extend(w.prototype, v.Form, u.prototype), t.extend(M.prototype, u.prototype), t.fn.parsley = t.fn.psly = function(e) {
        if (this.length > 1) {
            var i = [];
            return this.each(function() { i.push(t(this).parsley(e)) }), i }
        return t(this).length ? new M(this, e) : void a.warn("You must bind Parsley on an existing element.") }, "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}), A.options = t.extend(a.objectCreate(l), window.ParsleyConfig), window.ParsleyConfig = A.options, window.Parsley = window.psly = A, window.ParsleyUtils = a;
    var F = window.Parsley._validatorRegistry = new m(window.ParsleyConfig.validators, window.ParsleyConfig.i18n);
    window.ParsleyValidator = {}, t.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator".split(" "), function(e, i) { window.Parsley[i] = t.proxy(F, i), window.ParsleyValidator[i] = function() {
            var t;
            return a.warnOnce("Accessing the method '" + i + "' through ParsleyValidator is deprecated. Simply call 'window.Parsley." + i + "(...)'"), (t = window.Parsley)[i].apply(t, arguments) } }), window.Parsley.UI = v, window.ParsleyUI = { removeError: function(t, e, i) {
            var n = !0 !== i;
            return a.warnOnce("Accessing ParsleyUI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."), t.removeError(e, { updateClass: n }) }, getErrorsMessages: function(t) {
            return a.warnOnce("Accessing ParsleyUI is deprecated. Call 'getErrorsMessages' on the instance directly."), t.getErrorsMessages() } }, t.each("addError updateError".split(" "), function(t, e) { window.ParsleyUI[e] = function(t, i, n, r, s) {
            var o = !0 !== s;
            return a.warnOnce("Accessing ParsleyUI is deprecated. Call '" + e + "' on the instance directly. Please comment in issue 1073 as to your need to call this method."), t[e](i, { message: n, assert: r, updateClass: o }) } }), !1 !== window.ParsleyConfig.autoBind && t(function() { t("[data-parsley-validate]").length && t("[data-parsley-validate]").parsley() });
    var j = t({}),
        N = function() { a.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley") },
        O = "parsley:";
    t.listen = function(t, n) {
        var r;
        if (N(), "object" == typeof arguments[1] && "function" == typeof arguments[2] && (r = arguments[1], n = arguments[2]), "function" != typeof n) throw new Error("Wrong parameters");
        window.Parsley.on(i(t), e(n, r)) }, t.listenTo = function(t, n, r) {
        if (N(), !(t instanceof x || t instanceof w)) throw new Error("Must give Parsley instance");
        if ("string" != typeof n || "function" != typeof r) throw new Error("Wrong parameters");
        t.on(i(n), e(r)) }, t.unsubscribe = function(t, e) {
        if (N(), "string" != typeof t || "function" != typeof e) throw new Error("Wrong arguments");
        window.Parsley.off(i(t), e.parsleyAdaptedCallback) }, t.unsubscribeTo = function(t, e) {
        if (N(), !(t instanceof x || t instanceof w)) throw new Error("Must give Parsley instance");
        t.off(i(e)) }, t.unsubscribeAll = function(e) { N(), window.Parsley.off(i(e)), t("form,input,textarea,select").each(function() {
            var n = t(this).data("Parsley");
            n && n.off(i(e)) }) }, t.emit = function(t, e) {
        var n;
        N();
        var r = e instanceof x || e instanceof w,
            s = Array.prototype.slice.call(arguments, r ? 2 : 1);
        s.unshift(i(t)), r || (e = window.Parsley), (n = e).trigger.apply(n, _toConsumableArray(s)) };
    t.extend(!0, A, { asyncValidators: { "default": { fn: function(t) {
                    return t.status >= 200 && t.status < 300 }, url: !1 }, reverse: { fn: function(t) {
                    return t.status < 200 || t.status >= 300 }, url: !1 } }, addAsyncValidator: function(t, e, i, n) {
            return A.asyncValidators[t] = { fn: e, url: i || !1, options: n || {} }, this } }), A.addValidator("remote", { requirementType: { "": "string", validator: "string", reverse: "boolean", options: "object" }, validateString: function(e, i, n, r) {
            var s, o, a = {},
                l = n.validator || (!0 === n.reverse ? "reverse" : "default");
            if ("undefined" == typeof A.asyncValidators[l]) throw new Error("Calling an undefined async validator: `" + l + "`");
            i = A.asyncValidators[l].url || i, i.indexOf("{value}") > -1 ? i = i.replace("{value}", encodeURIComponent(e)) : a[r.$element.attr("name") || r.$element.attr("id")] = e;
            var u = t.extend(!0, n.options || {}, A.asyncValidators[l].options);
            s = t.extend(!0, {}, { url: i, data: a, type: "GET" }, u), r.trigger("field:ajaxoptions", r, s), o = t.param(s), "undefined" == typeof A._remoteCache && (A._remoteCache = {});
            var d = A._remoteCache[o] = A._remoteCache[o] || t.ajax(s),
                c = function() {
                    var e = A.asyncValidators[l].fn.call(r, d, i, n);
                    return e || (e = t.Deferred().reject()), t.when(e) };
            return d.then(c, c) }, priority: -1 }), A.on("form:submit", function() { A._remoteCache = {} }), window.ParsleyExtend.addAsyncValidator = function() {
        return ParsleyUtils.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"), A.addAsyncValidator.apply(A, arguments) }, A.addMessages("en", { defaultMessage: "This value seems to be invalid.", type: { email: "This value should be a valid email.", url: "This value should be a valid url.", number: "This value should be a valid number.", integer: "This value should be a valid integer.", digits: "This value should be digits.", alphanum: "This value should be alphanumeric." }, notblank: "This value should not be blank.", required: "This value is required.", pattern: "This value seems to be invalid.", min: "This value should be greater than or equal to %s.", max: "This value should be lower than or equal to %s.", range: "This value should be between %s and %s.", minlength: "This value is too short. It should have %s characters or more.", maxlength: "This value is too long. It should have %s characters or fewer.", length: "This value length is invalid. It should be between %s and %s characters long.", mincheck: "You must select at least %s choices.", maxcheck: "You must select %s choices or fewer.", check: "You must select between %s and %s choices.", equalto: "This value should be the same." }), A.setLocale("en");
    var I = new n;
    I.install();
    var $ = A;
    return $
});
var NavTabs = {};
NavTabs.createEvents = function(t) {
    if ("object" != typeof t || t.length < 2) throw "NavTabs.createEvent() -- input must be an array of Tab objects";
    for (var e, i, n, r = 0; r < t.length; r++) e = t[r], i = void 0, n = void 0, r > 0 && (i = t[r - 1]), r < t.length && (n = t[r + 1]), "string" == typeof e.backButtonId && void 0 !== i && this.CreateEventListener(e, i, e.backButtonId), "string" == typeof e.nextButtonId && void 0 !== n && this.CreateEventListener(e, n, e.nextButtonId) }, NavTabs.CreateEventListener = function(t, e, i) { $("#" + i).click(function() { $('.nav-tabs a[href="#' + e.tabId + '"]').tab("show") }) };
var NavTab = function(t, e, i) {
    if ("string" != typeof t || "string" != typeof e && "string" != typeof i) throw "new NavTab() -- DataType of input is incorrect";
    this.tabId = t, "string" == typeof e && (this.backButtonId = e), "string" == typeof i && (this.nextButtonId = i) };
NavTab.prototype.toString = function() {
        var t = { tab: this.tabId, backButton: this.backButtonId, nextButton: this.nextButtonId };
        return JSON.stringify(t) },
    function() {}.call(this),
    function() {}.call(this),
    function() {}.call(this),
    function() {}.call(this),
    function() {}.call(this),
    function() {}.call(this),
    function() {}.call(this),
    function() {}.call(this),
    function() {}.call(this),
    function() {}.call(this),
    function() {}.call(this),
    function() {}.call(this),
    function() {}.call(this),
    function() {}.call(this),
    function() {}.call(this),
    function() {}.call(this),
    function() {}.call(this);
