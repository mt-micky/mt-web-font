/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'moneytree\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-more-button': '&#xea00;',
		'icon-advertising_expense': '&#xe92a;',
		'icon-air_fare': '&#xe92b;',
		'icon-air_travel': '&#xe92c;',
		'icon-allowance': '&#xe92d;',
		'icon-alphabet': '&#xe92e;',
		'icon-amusement_park': '&#xe92f;',
		'icon-anchor': '&#xe930;',
		'icon-arcade': '&#xe931;',
		'icon-atm_deposit': '&#xe932;',
		'icon-atm_fee': '&#xe933;',
		'icon-attorney_fee': '&#xe934;',
		'icon-auto_insurance': '&#xe935;',
		'icon-auto': '&#xe936;',
		'icon-bank_fee': '&#xe937;',
		'icon-beauty': '&#xe938;',
		'icon-benefits_welfare_expenses': '&#xe939;',
		'icon-bin': '&#xe93a;',
		'icon-bonus': '&#xe93b;',
		'icon-book_cost': '&#xe93c;',
		'icon-books_magazines': '&#xe93d;',
		'icon-books_supplies': '&#xe93e;',
		'icon-bucket': '&#xe93f;',
		'icon-bug': '&#xe940;',
		'icon-bulb': '&#xe941;',
		'icon-bus_fare': '&#xe942;',
		'icon-bus': '&#xe943;',
		'icon-business_trip_fee': '&#xe944;',
		'icon-buy': '&#xe945;',
		'icon-cafe_coffee_shop': '&#xe946;',
		'icon-calender': '&#xe947;',
		'icon-card_payment': '&#xe948;',
		'icon-cash_atm': '&#xe949;',
		'icon-cash_gift': '&#xe94a;',
		'icon-charity': '&#xe94b;',
		'icon-children': '&#xe94c;',
		'icon-clothing': '&#xe94d;',
		'icon-communication_cost': '&#xe94e;',
		'icon-communications': '&#xe94f;',
		'icon-compass': '&#xe950;',
		'icon-connection': '&#xe951;',
		'icon-consumable_supplies_expenses': '&#xe952;',
		'icon-convenience_store': '&#xe953;',
		'icon-cosmetics': '&#xe954;',
		'icon-daycare': '&#xe955;',
		'icon-debt_repayment': '&#xe956;',
		'icon-delivery_cost': '&#xe957;',
		'icon-dentist': '&#xe958;',
		'icon-dice': '&#xe959;',
		'icon-dividend_cap_gains': '&#xe95a;',
		'icon-doctor': '&#xe95b;',
		'icon-drops': '&#xe95c;',
		'icon-eating_out': '&#xe95d;',
		'icon-education': '&#xe95e;',
		'icon-electricity_bill': '&#xe95f;',
		'icon-electricity': '&#xe960;',
		'icon-electronics': '&#xe961;',
		'icon-elephant': '&#xe962;',
		'icon-employeetravelfee': '&#xe963;',
		'icon-employment_insurance_premium': '&#xe964;',
		'icon-entertainment_expenses': '&#xe965;',
		'icon-entertainment': '&#xe966;',
		'icon-exclude': '&#xe967;',
		'icon-expense': '&#xe968;',
		'icon-eyecare': '&#xe969;',
		'icon-fastfood': '&#xe96a;',
		'icon-fees': '&#xe96b;',
		'icon-financial_services': '&#xe96c;',
		'icon-fire': '&#xe96d;',
		'icon-flashlight': '&#xe96e;',
		'icon-flower': '&#xe96f;',
		'icon-folder': '&#xe970;',
		'icon-fuel': '&#xe971;',
		'icon-games': '&#xe972;',
		'icon-gas': '&#xe973;',
		'icon-gender_female': '&#xe974;',
		'icon-gender_male': '&#xe975;',
		'icon-gift_item_fee': '&#xe976;',
		'icon-gifts_donations': '&#xe977;',
		'icon-glasses': '&#xe978;',
		'icon-groceries': '&#xe979;',
		'icon-gym_fitness': '&#xe97a;',
		'icon-health_insurance_premium': '&#xe97b;',
		'icon-health_medical': '&#xe97c;',
		'icon-heart': '&#xe97d;',
		'icon-holiday_leisure': '&#xe97e;',
		'icon-home_improvement': '&#xe97f;',
		'icon-home_insurance': '&#xe980;',
		'icon-home_phone': '&#xe981;',
		'icon-home_rent': '&#xe982;',
		'icon-home_supplies': '&#xe983;',
		'icon-home': '&#xe984;',
		'icon-hotel': '&#xe985;',
		'icon-housekeeping_consumption': '&#xe986;',
		'icon-income_amount': '&#xe987;',
		'icon-interest_charge': '&#xe988;',
		'icon-interest_discount_fee': '&#xe989;',
		'icon-interest_income': '&#xe98a;',
		'icon-internet_fee': '&#xe98b;',
		'icon-internet': '&#xe98c;',
		'icon-investments': '&#xe98d;',
		'icon-ipad': '&#xe98e;',
		'icon-ipod': '&#xe98f;',
		'icon-izakaya_bars': '&#xe990;',
		'icon-judicial_scrivener_fee': '&#xe991;',
		'icon-karaoke': '&#xe992;',
		'icon-key': '&#xe993;',
		'icon-leaf': '&#xe994;',
		'icon-legal': '&#xe995;',
		'icon-life_insurance': '&#xe996;',
		'icon-life': '&#xe997;',
		'icon-like': '&#xe998;',
		'icon-lock': '&#xe999;',
		'icon-love': '&#xe99a;',
		'icon-lunch': '&#xe99b;',
		'icon-media': '&#xe99c;',
		'icon-megaphone': '&#xe99d;',
		'icon-message': '&#xe99e;',
		'icon-miscellaneous_expenses': '&#xe99f;',
		'icon-mobile_phone': '&#xe9a0;',
		'icon-movies': '&#xe9a1;',
		'icon-museum_theatre': '&#xe9a2;',
		'icon-music': '&#xe9a3;',
		'icon-newspaper_fee': '&#xe9a4;',
		'icon-nexus': '&#xe9a5;',
		'icon-office_equipment': '&#xe9a6;',
		'icon-office_supplies': '&#xe9a7;',
		'icon-omiyage': '&#xe9a8;',
		'icon-online_service': '&#xe9a9;',
		'icon-onsen': '&#xe9aa;',
		'icon-other_income': '&#xe9ab;',
		'icon-other_insurance': '&#xe9ac;',
		'icon-outsourced_labor': '&#xe9ad;',
		'icon-packing_freight': '&#xe9ae;',
		'icon-paper': '&#xe9af;',
		'icon-parking_fee': '&#xe9b0;',
		'icon-parking': '&#xe9b1;',
		'icon-pediatrician': '&#xe9b2;',
		'icon-personal_care': '&#xe9b3;',
		'icon-pets': '&#xe9b4;',
		'icon-pharmacy': '&#xe9b5;',
		'icon-photo': '&#xe9b6;',
		'icon-pie': '&#xe9b7;',
		'icon-pin': '&#xe9b8;',
		'icon-points': '&#xe9b9;',
		'icon-portfolio': '&#xe9ba;',
		'icon-postage_expense': '&#xe9bb;',
		'icon-printing': '&#xe9bc;',
		'icon-property_insurance_premium': '&#xe9bd;',
		'icon-r_d_expenses': '&#xe9be;',
		'icon-recruitment_fee': '&#xe9bf;',
		'icon-rent': '&#xe9c0;',
		'icon-rental_car': '&#xe9c1;',
		'icon-rental_income': '&#xe9c2;',
		'icon-repair_costs': '&#xe9c3;',
		'icon-residency_tax': '&#xe9c4;',
		'icon-restaurant': '&#xe9c5;',
		'icon-salary_wage': '&#xe9c6;',
		'icon-salary': '&#xe9c7;',
		'icon-sales_amount': '&#xe9c8;',
		'icon-school_fees': '&#xe9c9;',
		'icon-sell': '&#xe9ca;',
		'icon-sent': '&#xe9cb;',
		'icon-service': '&#xe9cc;',
		'icon-shipping': '&#xe9cd;',
		'icon-shoes': '&#xe9ce;',
		'icon-shopping': '&#xe9cf;',
		'icon-shrimp': '&#xe9d0;',
		'icon-smoking': '&#xe9d1;',
		'icon-software': '&#xe9d2;',
		'icon-sparrow': '&#xe9d3;',
		'icon-splat': '&#xe9d4;',
		'icon-sporting_goods': '&#xe9d5;',
		'icon-spruce': '&#xe9d6;',
		'icon-square': '&#xe9d7;',
		'icon-stamp_fee': '&#xe9d8;',
		'icon-star': '&#xe9d9;',
		'icon-strawberry': '&#xe9da;',
		'icon-student_loan': '&#xe9db;',
		'icon-tax_accountant_fee': '&#xe9dc;',
		'icon-tax_and_public_duty': '&#xe9dd;',
		'icon-tax_fee': '&#xe9de;',
		'icon-tax_registration': '&#xe9df;',
		'icon-taxes': '&#xe9e0;',
		'icon-taxi_fare': '&#xe9e1;',
		'icon-taxi': '&#xe9e2;',
		'icon-telephone_bill': '&#xe9e3;',
		'icon-television': '&#xe9e4;',
		'icon-theater': '&#xe9e5;',
		'icon-timer': '&#xe9e6;',
		'icon-toll_road_fee': '&#xe9e7;',
		'icon-tollway': '&#xe9e8;',
		'icon-tone': '&#xe9e9;',
		'icon-train_fare': '&#xe9ea;',
		'icon-train': '&#xe9eb;',
		'icon-transfer_fee': '&#xe9ec;',
		'icon-transfer': '&#xe9ed;',
		'icon-transport': '&#xe9ee;',
		'icon-travel_expenses': '&#xe9ef;',
		'icon-tuition': '&#xe9f0;',
		'icon-uinlocked': '&#xe9f1;',
		'icon-uncategorized': '&#xe9f2;',
		'icon-utilities': '&#xe9f3;',
		'icon-video': '&#xe9f4;',
		'icon-warehouse_cost': '&#xe9f5;',
		'icon-water_bill': '&#xe9f6;',
		'icon-water_utility_expenses': '&#xe9f7;',
		'icon-water': '&#xe9f8;',
		'icon-welfare_pension_insurance_premium': '&#xe9f9;',
		'icon-window': '&#xe9fa;',
		'icon-workers_compensation_insurance_premium': '&#xe9fb;',
		'icon-yenphant': '&#xe9fc;',
		'icon-description': '&#xe9fd;',
		'icon-ocr-matched-o': '&#xe9ff;',
		'icon-selection-validation-tick': '&#xe925;',
		'icon-delete-cross': '&#xe926;',
		'icon-checkmark-unselected': '&#xe927;',
		'icon-checkmark-selected': '&#xe928;',
		'icon-search-magnifying-glass': '&#xe929;',
		'icon-settings-thin-o': '&#xe924;',
		'icon-account-balances-o': '&#xe922;',
		'icon-spending-o': '&#xe9fe;',
		'icon-points-small-o': '&#xe923;',
		'icon-settings-o': '&#xe921;',
		'icon-home-o': '&#xe91f;',
		'icon-vault-o': '&#xe920;',
		'icon-spinner-new': '&#xe91e;',
		'icon-vacuum': '&#xe91c;',
		'icon-clear-all-o': '&#xe91c;',
		'icon-heart2': '&#xe91d;',
		'icon-welcome-o': '&#xe91d;',
		'icon-cog': '&#xe91b;',
		'icon-cross-circle': '&#xe91a;',
		'icon-chibi-icon-square': '&#xe919;',
		'icon-chibi-circle': '&#xe917;',
		'icon-stocks-o': '&#xe918;',
		'icon-connect-to-o': '&#xe916;',
		'icon-beta': '&#xe902;',
		'icon-paperclip': '&#xe915;',
		'icon-cloud-safe-o': '&#xe914;',
		'icon-edit-pencil': '&#xe913;',
		'icon-locked': '&#xe912;',
		'icon-ring-o': '&#xe90e;',
		'icon-trash-can-o': '&#xe90f;',
		'icon-rotate': '&#xe910;',
		'icon-check': '&#xe911;',
		'icon-password-lock-o': '&#xe906;',
		'icon-email-o': '&#xe907;',
		'icon-moneytree-pro': '&#xe908;',
		'icon-moneytree-plus': '&#xe90c;',
		'icon-moneytree-free': '&#xe90d;',
		'icon-pro-plan-o': '&#xe909;',
		'icon-plus-plan-o': '&#xe90a;',
		'icon-free-plan-o': '&#xe90b;',
		'icon-empty-transactions-o': '&#xe900;',
		'icon-empty-notifications-o': '&#xe901;',
		'icon-find-expenses-o': '&#xe903;',
		'icon-plus-thinner': '&#xe905;',
		'icon-search-o': '&#xe904;',
		'icon-corporate-o': '&#xe6d9;',
		'icon-digital-money-o': '&#xe6da;',
		'icon-stored_value-o': '&#xe6da;',
		'icon-point-o': '&#xe6db;',
		'icon-bank-o': '&#xe6dc;',
		'icon-manual-o': '&#xe6dd;',
		'icon-credit-card-o': '&#xe6de;',
		'icon-credit_card-o': '&#xe6de;',
		'icon-maintenance-circle-o': '&#xe6df;',
		'icon-low-balance-o': '&#xe6e0;',
		'icon-credit-card-payment-due-o': '&#xe6e1;',
		'icon-cc-payment-due-o': '&#xe6e1;',
		'icon-large-deposit-o': '&#xe6e2;',
		'icon-large-expense-o': '&#xe6e3;',
		'icon-notification-o': '&#xe6e4;',
		'icon-point-expiration-o': '&#xe6e5;',
		'icon-expiring-points-o': '&#xe6e5;',
		'icon-salary-received-o': '&#xe6e6;',
		'icon-salary-o': '&#xe6e6;',
		'icon-thin-cog': '&#xe6d8;',
		'icon-check-mark-circle': '&#xe6d6;',
		'icon-plus': '&#xe6d7;',
		'icon-account-icon': '&#xe6d3;',
		'icon-arrow-right': '&#xe6cf;',
		'icon-link-out-square-o': '&#xe6ce;',
		'icon-minus-circle': '&#xe6c2;',
		'icon-plus-circle': '&#xe6c3;',
		'icon-plus-circle-o': '&#xe6c4;',
		'icon-minus-circle-o': '&#xe6c5;',
		'icon-arrow': '&#xe6c0;',
		'icon-error-triangle-o': '&#xe6c1;',
		'icon-cross': '&#xe6bc;',
		'icon-mt-logo': '&#xe600;',
		'icon-mt-logo-no-leaf': '&#xe601;',
		'icon-up-arrow': '&#xe602;',
		'icon-left-arrow': '&#xe603;',
		'icon-down-arrow': '&#xe604;',
		'icon-right-arrow': '&#xe605;',
		'icon-moneytree': '&#xe60b;',
		'icon-moneytree-tm': '&#xe6bd;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
