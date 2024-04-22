import {
	Banknote,
	BarChart3,
	BookUser,
	Bot,
	BrainCircuit,
	CalendarCheck,
	CalendarClock,
	CalendarDays,
	CalendarRange,
	Component,
	Database,
	Feather,
	Gauge,
	Home,
	Library,
	MessagesSquare,
	Palette,
	Tag,
	Tags,
	WalletCards
} from 'lucide-svelte';

type NavigationDetails = {
	label: string;
	href: string;
	icon: typeof Component;
	activeCondition: string;
};

type Links = NavigationDetails & {
	conditionForSubNav: null | string;
	subRoutes: NavigationDetails[];
};

export const subNavs: Record<string, Array<NavigationDetails>> = {
	dashboard: [
		{
			label: `Today's Analytics`,
			href: '/dashboard/daily-analytics',
			activeCondition: 'daily-analytics',
			icon: CalendarCheck
		},
		{
			label: `Weekly Analytics`,
			href: '/dashboard/this-week-analytics',
			activeCondition: 'this-week-analytics',
			icon: CalendarDays
		},
		{
			label: `Month Analytics`,
			href: '/dashboard/this-month-analytics',
			activeCondition: 'this-month-analytics',
			icon: CalendarRange
		},
		{
			label: `Overall Analytics`,
			href: '/dashboard/overall-analytics',
			activeCondition: 'overall-analytics',
			icon: CalendarClock
		}
	],
	chatbots: [
		{
			label: 'Analytics',
			href: 'analytics',
			activeCondition: 'analytics',
			icon: BarChart3
		},
		{
			label: 'Chat History',
			href: 'chat-history',
			activeCondition: 'chat-history',
			icon: MessagesSquare
		},
		{
			label: 'Leads',
			href: 'leads',
			activeCondition: 'leads',
			icon: BookUser
		},
		{
			label: 'Knowledge Base',
			href: 'content',
			activeCondition: 'content',
			icon: Database
		},
		{
			label: 'Integrations',
			href: 'integrations',
			activeCondition: 'integrations',
			icon: BrainCircuit
		},
		{
			label: 'Quick Prompts',
			href: 'quick-prompts',
			activeCondition: 'quick-prompts',
			icon: Tag
		},
		{
			label: 'Follow Up Prompts',
			href: 'follow-up-prompts',
			activeCondition: 'quick-prompts',
			icon: Tags
		},
		{
			label: 'Appearance',
			href: 'appearance',
			activeCondition: 'appearance',
			icon: Palette
		}
	],
	billings: [
		{
			label: 'Invoice & Documents',
			href: `/billing/invoices`,
			activeCondition: 'invoices',
			icon: Library
		},
		{
			label: 'Billable Usages',
			href: `/billing/usages`,
			activeCondition: 'usages',
			icon: Gauge
		},
		{
			label: 'Payment Info',
			href: `/billing/payment-info`,
			activeCondition: 'payment-info',
			icon: WalletCards
		},
		{
			label: 'Subscriptions',
			href: `/billing/subscriptions`,
			activeCondition: 'subscriptions',
			icon: Feather
		}
	]
};

export const navItems: Links[] = [
	{
		label: 'Dashboard',
		href: '/dashboard/daily-analytics',
		conditionForSubNav: 'dashboard', // includes in path
		icon: Home,
		activeCondition: 'null',
		subRoutes: subNavs.dashboard
	},
	{
		label: 'Chatbots',
		href: '/chatbots',
		conditionForSubNav: 'chatbotId', // includes in params
		icon: Bot,
		activeCondition: 'chatbots',
		subRoutes: subNavs.chatbots
	},
	{
		label: 'Billing',
		href: '/billing/invoices',
		conditionForSubNav: 'billing', // includes in path
		icon: Banknote,
		activeCondition: 'billing',
		subRoutes: subNavs.billings
	}
];
