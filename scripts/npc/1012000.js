var status;
var name;
var mapId;
var cost;
var map1;
var map2;
var map3;
var map4;
var map5;
var scost;

function start() {
	status = -1;
	action(1,0,0);
}

function action(mode,type,selection) {
	if (mode == -1) {
		cm.dispose();
	} else if (status == -1) {
		status = 0;
		cm.sendNext("����~���������ִ��а͡����벻���ֿ���ְ�ȫ�ĵ��������ط�ȥ����ô��ʹ�����ǵĳ��⳵�ɡ��������Ͻ����͵�����ȥ�ĵط����۸�ܱ���Ŷ��");
	} else if (status == 0) {
		status = 1;
		map1 = "�����"; //104000000
		map2 = "��ʿ����"; //102000000
		map3 = "ħ������"; //101000000
		map4 = "��������"; //103000000
		map5 = "ŵ����˹����ͷ"; //120000000
		if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
			cm.sendSimple("���ֵĻ��۸����#b9��#k�Żݡ���ѡ�����Ŀ�ĵذɡ�\r\n#b#L0#" + map1 + " (120 ���)#l\r\n#L1#" + map2 + " (100 ���)#l\r\n#L2#" + map3 + " (100 ���)#l\r\n#L3#" + map4 + " (80 ���)#l\r\n#L4#" + map5 + " (100 ���)#l#k");
		} else {
			cm.sendSimple("��ѡ�����Ŀ�ĵذɡ�����Ŀ�ĵز�ͬ������Ҳ������ͬ��\r\n#b#L0#" + map1 + " (1200 ���)#l\r\n#L1#" + map2 + " (1000 ���)#l\r\n#L2#" + map3 + " (1000 ���)#l\r\n#L3#" + map4 + " (800 ���)#l\r\n#L4#" + map5 + " (1000 ���)#l#k");
		}
	} else if (status == 1) {
		if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
			if (selection == 0) {
				scost = "120";
				mapId = 104000000;
				cost = 120;
				status = 2;
				cm.sendYesNo("����������������Ѿ����������ȷ��Ҫȥ #b#m" + mapId + "##k��Ʊ���� #b" + scost + " ���#k��");
			} else if (selection == 1) {
				scost = "100";
				mapId = 102000000;
				cost = 100;
				status = 2;
				cm.sendYesNo("����������������Ѿ����������ȷ��Ҫȥ #b#m" + mapId + "##k��Ʊ���� #b" + scost + " ���#k��");
			} else if (selection == 2) {
				scost = "100";
				mapId = 101000000;
				cost = 100;
				status = 2;
				cm.sendYesNo("����������������Ѿ����������ȷ��Ҫȥ #b#m" + mapId + "##k��Ʊ���� #b" + scost + " ���#k��");
			} else if (selection == 3) {
				scost = "80";
				mapId = 103000000;
				cost = 80;
				status = 2;
				cm.sendYesNo("����������������Ѿ����������ȷ��Ҫȥ #b#m" + mapId + "##k��Ʊ���� #b" + scost + " ���#k��");
			} else if (selection == 4) {
				scost = "100";
				mapId = 120000000;
				cost = 100;
				status = 2;
				cm.sendYesNo("����������������Ѿ����������ȷ��Ҫȥ #b#m" + mapId + "##k��Ʊ���� #b" + scost + " ���#k��");
			} else {
				cm.dispose();
			}
		} else {
			if (selection == 0) {
				scost = "1200";
				mapId = 104000000;
				cost = 1200;
				status = 2;
				cm.sendYesNo("����������������Ѿ����������ȷ��Ҫȥ #b#m" + mapId + "##k��Ʊ���� #b" + scost + " ���#k��");
			} else if (selection == 1) {
				scost = "1000";
				mapId = 102000000;
				cost = 1000;
				status = 2;
				cm.sendYesNo("����������������Ѿ����������ȷ��Ҫȥ #b#m" + mapId + "##k��Ʊ���� #b" + scost + " ���#k��");
			} else if (selection == 2) {
				scost = "1000";
				mapId = 101000000;
				cost = 1000;
				status = 2;
				cm.sendYesNo("����������������Ѿ����������ȷ��Ҫȥ #b#m" + mapId + "##k��Ʊ���� #b" + scost + " ���#k��");
			} else if (selection == 3) {
				scost = "800";
				mapId = 103000000;
				cost = 800;
				status = 2;
				cm.sendYesNo("����������������Ѿ����������ȷ��Ҫȥ #b#m" + mapId + "##k��Ʊ���� #b" + scost + " ���#k��");
			} else if (selection == 4) {
				scost = "1000";
				mapId = 120000000;
				cost = 1000;
				status = 2;
				cm.sendYesNo("����������������Ѿ����������ȷ��Ҫȥ #b#m" + mapId + "##k��Ʊ���� #b" + scost + " ���#k��");
			} else {
				cm.dispose();
			}
		}			
	} else if (status == 2) {
		if (mode == 1) {
			if (cm.getMeso() >= cost) {
				cm.gainMeso(-cost);
				cm.warp(mapId,0);
				cm.dispose();
			} else {
				cm.sendNext("�����û���㹻�Ľ�ң������Ļ����Ҳ���Ϊ�����");
				cm.dispose();
			}
		} else {
			cm.sendNext("����������ﻹ������Ư���ľ��㣬�������ȥ�����ط�����ӭ��ʱʹ�����ǵĳ��⳵����");
			cm.dispose();
		}
	}
}