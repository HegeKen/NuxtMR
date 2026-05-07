export const API_CONFIG = {
	BASE_URL: "https://data.miuier.com/data",
	EXTERNAL_URLS: {
		DATA_MIUIER: "https://data.miuier.com",
		ROMS_MIUIER: "https://roms.miuier.com",
		HYPEROS_FANS: "https://hyperos.fans",
		OSS_BUCKET:
			"https://bkt-sgp-miui-ota-update-alisgp.oss-ap-southeast-1.aliyuncs.com",
	},
	ANALYTICS: {
		BAIDU: {
			ID: "f107e28fc41495046dc606c8b53ee24e",
		},
		CLARITY: {
			ID: "ecb8j7x9aw",
		},
		GOOGLE_ANALYTICS: {
			ID: "UA-153213840-1",
		},
	},
	TIMEOUT: 10000,
} as const;

export const VALIDATION_PATTERNS = {
	CODENAME: /^[a-z0-9_]+$/,
	WEEK_NUMBER: /^[0-9]+$/,
} as const;
