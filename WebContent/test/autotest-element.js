window.miniTests.push.apply(window.miniTests, [
	{
		name:'MINI.element()',
		exec: function() {
			var s = MINI.element('span');
			check(s.nodeType, 1);
			check(/^span$/i.test(s.tagName));
			check(s.childNodes.length, 0);
			check(s.parentElement, null);
			
			var s2 = MINI.elementAdd(document.getElementById('container2'), 'span', {title: 'mytitle'}, null);
			check(s2.nodeType, 1);
			check(/^span$/i.test(s2.tagName));
			check(s2.getAttribute('title'), 'mytitle');
			check(s2.childNodes.length, 0);
			check(s2.parentElement, document.getElementById('container2'), true);
	
			var s3 = MINI.elementAdd('#container2', 'div', {title: '5', 'class': 'a b'}, 'hello');
			check(s3.nodeType, 1);
			check(/^div$/i.test(s3.tagName));
			check(s3.getAttribute('title'), '5');
			check(s3.getAttribute('class'), 'a b');
			check(s3.parentElement, document.getElementById('container2'), true);
			check(s3.childNodes.length, 1);
			var t = s3.childNodes[0];
			check(t.nodeType, 3);
			check(t.data, 'hello');
			check(t.parentElement, s3, true);
	
			var s4 = MINI.elementAdd('#container2', 'div', {}, ['hello' , MINI.element('b', null, 'user'), '!']);
			check(s4.nodeType, 1);
			check(/^div$/i.test(s3.tagName));
			check(s4.parentElement, document.getElementById('container2'), true);
			check(s4.childNodes.length, 3);
			var t2 = s4.childNodes[0];
			check(t2.nodeType, 3);
			check(t2.data, 'hello');
			check(t2.parentElement, s4, true);
			var s5 = s4.childNodes[1];
			check(s5.nodeType, 1);
			check(/^b$/i.test(s5.tagName));
			check(s5.parentElement, s4, true);
			check(s5.childNodes.length, 1);
			var t3 = s4.childNodes[2];
			check(t3.nodeType, 3);
			check(t3.data, '!');
			check(t3.parentElement, s4, true);
			var t4 = s5.childNodes[0];
			check(t4.nodeType, 3);
			check(t4.data, 'user');
			check(t4.parentElement, s5, true);
		}
	},
	{
		name:'MINI.element() / existing',
		exec: function() {
			var u0 = MINI.element('div', {title: 'foo'}, 'text');
			var u = MINI.element(u0, {title:'bar'}, 'othertext');
			check(u.childNodes.length, 1);
			check(u.childNodes[0].nodeType, 3);
			check(u.childNodes[0].data, 'othertext');
			check(u.getAttribute('title'), 'bar');
		}
	},
	{
		name:'MINI.element / adding',
		exec: function() {
			var s = MINI.elementAdd('#container2', 'span');
			check(s.parentNode, EL('#container2'), true);
			check(EL('#container2').childNodes.length, 1);
			
			var s2 = MINI.elementAdd('#container2', 'span');
			check(s2.parentNode, EL('#container2', true));
			check(EL('#container2').childNodes.length, 2);
			check(EL('#container2').childNodes[0], s, true);
			check(EL('#container2').childNodes[1], s2, true);
			
			var s3 = MINI.elementAfter(s, 'span');
			check(s3.parentNode, EL('#container2', true));
			check(EL('#container2').childNodes.length, 3);
			check(EL('#container2').childNodes[0], s, true);
			check(EL('#container2').childNodes[1], s3, true);
			check(EL('#container2').childNodes[2], s2, true);
			
			var s4 = MINI.elementAfter(s2, 'span');
			check(s4.parentNode, EL('#container2', true));
			check(EL('#container2').childNodes.length, 4);
			check(EL('#container2').childNodes[0], s, true);
			check(EL('#container2').childNodes[1], s3, true);
			check(EL('#container2').childNodes[2], s2, true);
			check(EL('#container2').childNodes[3], s4, true);
			
			var s1 = MINI.elementReplace(s3, 'span');
			check(s1.parentNode, EL('#container2', true));
			check(EL('#container2').childNodes.length, 4);
			check(EL('#container2').childNodes[0], s, true);
			check(EL('#container2').childNodes[1], s1, true);
			check(EL('#container2').childNodes[2], s2, true);
			check(EL('#container2').childNodes[3], s4, true);
			
			var s0 = MINI.elementBefore(s, 'span');
			check(s0.parentNode, EL('#container2', true));
			check(EL('#container2').childNodes.length, 5);
			check(EL('#container2').childNodes[0], s0, true);
			check(EL('#container2').childNodes[1], s, true);
			check(EL('#container2').childNodes[2], s1, true);
			check(EL('#container2').childNodes[3], s2, true);
			check(EL('#container2').childNodes[4], s4, true);
		}
	}
]);