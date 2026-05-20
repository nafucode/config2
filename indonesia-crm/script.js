const STORAGE_KEY = "xinfuji_indonesia_crm_records";
const SETTINGS_KEY = "xinfuji_indonesia_crm_settings";
const LANGUAGE_KEY = "xinfuji_indonesia_crm_language";
const TABLE_NAME = "crm_deals";

const statuses = [
    "Inquiry",
    "Negotiation",
    "Communication",
    "Quoted",
    "Service Pending",
    "Not Awarded"
];

const activeStatuses = new Set([
    "Inquiry",
    "Negotiation",
    "Communication",
    "Quoted",
    "Service Pending"
]);

const statusMap = {
    "Deposit Paid": "Negotiation",
    Production: "Service Pending",
    Shipped: "Service Pending",
    Installed: "Service Pending",
    Won: "Quoted",
    Lost: "Not Awarded",
    Failed: "Not Awarded",
    "Customer Decided": "Not Awarded"
};

const translations = {
    en: {
        navPipeline: "Pipeline",
        navCustomers: "Customers",
        navElevators: "Elevators",
        navSharing: "Sharing",
        workspace: "Joint customer workspace",
        search: "Search",
        searchPlaceholder: "Company, project, contact, city",
        exportJson: "Export JSON",
        newDeal: "New Deal",
        editDeal: "Edit Deal",
        openValue: "Open Value",
        commissionIncluded: "Commission Included",
        activeCustomers: "Active Customers",
        elevatorUnits: "Elevator Units",
        all: "All",
        allSources: "All sources",
        crmRecord: "CRM record",
        company: "Company",
        contactPerson: "Contact Person",
        email: "Email",
        phone: "WhatsApp / Phone",
        citySite: "City / Site",
        projectNo: "Project No.",
        projectName: "Project Name",
        elevatorType: "Elevator Type",
        units: "Units",
        capacity: "Capacity",
        stops: "Stops",
        speed: "Speed",
        termsDestination: "Terms / Destination",
        quotationDate: "Quotation Date",
        orderStatus: "Order Status",
        customerSource: "Customer Source",
        contractValueUsd: "Contract Value (USD)",
        commissionIncludedUsd: "Commission Included (USD)",
        important: "Important",
        importantMarked: "Important",
        nextFollowUp: "Next Follow-up",
        notes: "Notes",
        delete: "Delete",
        cancel: "Cancel",
        saveRecord: "Save Record",
        dataImport: "Data import",
        importJson: "Import JSON",
        import: "Import",
        project: "Project",
        elevator: "Elevator",
        specification: "Specification",
        contractValueCommission: "Contract Value / Commission",
        notSet: "Not set",
        noContact: "No contact",
        noCity: "No city",
        noNotes: "No notes",
        noRecords: "No records",
        noCustomersFound: "No customers found",
        noElevatorRecordsFound: "No elevator records found",
        toBeConfirmed: "To be confirmed",
        unit: "unit",
        unitsText: "units",
        customer: "Customer",
        city: "City",
        deals: "Deals",
        totalValue: "Total Value",
        type: "Type",
        status: "Status",
        value: "Value",
        sharedCloudDatabase: "Shared Cloud Database",
        sharedCloudCopy: "Use one Supabase project so both teams can open this CRM from the same hosted URL and see the same records.",
        supabaseUrl: "Supabase URL",
        supabaseAnonKey: "Supabase anon key",
        saveConnect: "Save & Connect",
        dataTools: "Data Tools",
        dataToolsCopy: "Use JSON export as a quick backup, or import a file sent by your Indonesia partner when cloud sharing is not enabled.",
        downloadCsv: "Download CSV",
        databaseTableName: "Database table name",
        localMode: "Local mode",
        localModeCopy: "Connect Supabase for shared access.",
        cloudSyncActive: "Cloud sync active",
        cloudSyncCopy: "Both teams can share this database.",
        syncAttention: "Sync needs attention",
        syncAttentionCopy: "Check Supabase settings."
    },
    id: {
        navPipeline: "Daftar",
        navCustomers: "Pelanggan",
        navElevators: "Lift",
        navSharing: "Berbagi",
        workspace: "Ruang kerja pelanggan bersama",
        search: "Cari",
        searchPlaceholder: "Perusahaan, proyek, kontak, kota",
        exportJson: "Ekspor JSON",
        newDeal: "Data Baru",
        editDeal: "Edit Data",
        openValue: "Nilai Kontrak Aktif",
        commissionIncluded: "Komisi Termasuk",
        activeCustomers: "Pelanggan Aktif",
        elevatorUnits: "Unit Lift",
        all: "Semua",
        allSources: "Semua sumber",
        crmRecord: "Data CRM",
        company: "Perusahaan",
        contactPerson: "Nama Kontak",
        email: "Email",
        phone: "WhatsApp / Telepon",
        citySite: "Kota / Lokasi",
        projectNo: "No. Proyek",
        projectName: "Nama Proyek",
        elevatorType: "Jenis Lift",
        units: "Unit",
        capacity: "Kapasitas",
        stops: "Lantai/Stop",
        speed: "Kecepatan",
        termsDestination: "Terms / Tujuan",
        quotationDate: "Tanggal Penawaran",
        orderStatus: "Status Order",
        customerSource: "Sumber Pelanggan",
        contractValueUsd: "Nilai Kontrak (USD)",
        commissionIncludedUsd: "Komisi Termasuk (USD)",
        important: "Penting",
        importantMarked: "Penting",
        nextFollowUp: "Follow-up Berikutnya",
        notes: "Catatan",
        delete: "Hapus",
        cancel: "Batal",
        saveRecord: "Simpan Data",
        dataImport: "Impor data",
        importJson: "Impor JSON",
        import: "Impor",
        project: "Proyek",
        elevator: "Lift",
        specification: "Spesifikasi",
        contractValueCommission: "Nilai Kontrak / Komisi",
        notSet: "Belum diatur",
        noContact: "Belum ada kontak",
        noCity: "Belum ada kota",
        noNotes: "Belum ada catatan",
        noRecords: "Tidak ada data",
        noCustomersFound: "Pelanggan tidak ditemukan",
        noElevatorRecordsFound: "Data lift tidak ditemukan",
        toBeConfirmed: "Perlu dikonfirmasi",
        unit: "unit",
        unitsText: "unit",
        customer: "Pelanggan",
        city: "Kota",
        deals: "Data",
        totalValue: "Total Nilai",
        type: "Tipe",
        status: "Status",
        value: "Nilai",
        sharedCloudDatabase: "Database Cloud Bersama",
        sharedCloudCopy: "Gunakan satu proyek Supabase agar kedua tim dapat membuka CRM dari URL yang sama dan melihat data yang sama.",
        supabaseUrl: "URL Supabase",
        supabaseAnonKey: "Anon key Supabase",
        saveConnect: "Simpan & Hubungkan",
        dataTools: "Alat Data",
        dataToolsCopy: "Gunakan ekspor JSON sebagai backup cepat, atau impor file dari partner Indonesia saat cloud belum aktif.",
        downloadCsv: "Unduh CSV",
        databaseTableName: "Nama tabel database",
        localMode: "Mode lokal",
        localModeCopy: "Hubungkan Supabase untuk akses bersama.",
        cloudSyncActive: "Sinkronisasi cloud aktif",
        cloudSyncCopy: "Kedua tim dapat berbagi database ini.",
        syncAttention: "Sinkronisasi perlu dicek",
        syncAttentionCopy: "Periksa pengaturan Supabase."
    },
    zh: {
        navPipeline: "客户列表",
        navCustomers: "客户",
        navElevators: "电梯",
        navSharing: "共享",
        workspace: "联合客户工作台",
        search: "搜索",
        searchPlaceholder: "公司、项目、联系人、城市",
        exportJson: "导出 JSON",
        newDeal: "新增记录",
        editDeal: "编辑记录",
        openValue: "进行中合同额",
        commissionIncluded: "包含佣金",
        activeCustomers: "活跃客户",
        elevatorUnits: "电梯台数",
        all: "全部",
        allSources: "全部来源",
        crmRecord: "CRM 记录",
        company: "公司",
        contactPerson: "联系人",
        email: "邮箱",
        phone: "WhatsApp / 电话",
        citySite: "城市 / 项目地",
        projectNo: "项目编号",
        projectName: "项目名称",
        elevatorType: "电梯类型",
        units: "台数",
        capacity: "载重",
        stops: "层/站/门",
        speed: "速度",
        termsDestination: "贸易条款 / 目的地",
        quotationDate: "报价日期",
        orderStatus: "订单状态",
        customerSource: "客户来源",
        contractValueUsd: "合同金额 (USD)",
        commissionIncludedUsd: "包含佣金 (USD)",
        important: "重要",
        importantMarked: "重要",
        nextFollowUp: "下次跟进",
        notes: "备注",
        delete: "删除",
        cancel: "取消",
        saveRecord: "保存记录",
        dataImport: "数据导入",
        importJson: "导入 JSON",
        import: "导入",
        project: "项目",
        elevator: "电梯",
        specification: "规格",
        contractValueCommission: "合同金额 / 佣金",
        notSet: "未设置",
        noContact: "无联系人",
        noCity: "无城市",
        noNotes: "无备注",
        noRecords: "暂无记录",
        noCustomersFound: "未找到客户",
        noElevatorRecordsFound: "未找到电梯记录",
        toBeConfirmed: "待确认",
        unit: "台",
        unitsText: "台",
        customer: "客户",
        city: "城市",
        deals: "记录",
        totalValue: "总金额",
        type: "类型",
        status: "状态",
        value: "金额",
        sharedCloudDatabase: "共享云数据库",
        sharedCloudCopy: "使用同一个 Supabase 项目，你和印尼客户可以打开同一个 CRM 地址并看到同一份数据。",
        supabaseUrl: "Supabase URL",
        supabaseAnonKey: "Supabase anon key",
        saveConnect: "保存并连接",
        dataTools: "数据工具",
        dataToolsCopy: "JSON 导出可作为快速备份；未开启云同步时，也可以导入印尼伙伴发来的文件。",
        downloadCsv: "下载 CSV",
        databaseTableName: "数据库表名",
        localMode: "本地模式",
        localModeCopy: "连接 Supabase 后可共享访问。",
        cloudSyncActive: "云同步已启用",
        cloudSyncCopy: "双方可以共享这个数据库。",
        syncAttention: "同步需要检查",
        syncAttentionCopy: "请检查 Supabase 设置。"
    }
};

const statusTranslations = {
    en: {
        Inquiry: "Inquiry",
        Negotiation: "Negotiation",
        Communication: "Communication",
        Quoted: "Quoted",
        "Service Pending": "Service Pending",
        "Not Awarded": "Not Awarded"
    },
    id: {
        Inquiry: "Inquiry",
        Negotiation: "Negosiasi",
        Communication: "Komunikasi",
        Quoted: "Sudah Ditawarkan",
        "Service Pending": "Menunggu Service",
        "Not Awarded": "Tidak Menang"
    },
    zh: {
        Inquiry: "询盘",
        Negotiation: "洽谈中",
        Communication: "沟通中",
        Quoted: "已报价",
        "Service Pending": "等待服务",
        "Not Awarded": "未中标"
    }
};

const sourceTranslations = {
    en: {
        "China Team": "China Team",
        "Indonesia Partner": "Indonesia Partner",
        Joint: "Joint"
    },
    id: {
        "China Team": "Tim China",
        "Indonesia Partner": "Partner Indonesia",
        Joint: "Bersama"
    },
    zh: {
        "China Team": "中国团队",
        "Indonesia Partner": "印尼伙伴",
        Joint: "双方共同"
    }
};

const requestedRecords = [
    {
        id: "crm-jonathan-surabaya-price-offer",
        company: "Mr. Jonathan",
        contact: "Mr. Jonathan",
        email: "",
        phone: "",
        city: "Surabaya",
        projectNo: "004",
        project: "Surabaya Elevator Inquiry",
        elevatorType: "Passenger Elevator",
        units: 1,
        capacity: "",
        stops: "",
        speed: "",
        terms: "",
        quotationDate: "",
        status: "Inquiry",
        owner: "Joint",
        value: 0,
        commission: 0,
        nextFollowUp: "",
        notes: "Late in making a price offer because the team/partner was hesitant to do business with him. Review concerns and decide whether to continue quotation.",
        updatedAt: new Date().toISOString()
    },
    {
        id: "crm-dimas-arista-byd-pik2",
        company: "ARISTA / PT. ASHINDO MULTI PERDANA",
        contact: "Mr. Dimas",
        email: "",
        phone: "",
        city: "PIK 2",
        projectNo: "003",
        project: "BYD-Arista PIK-2",
        elevatorType: "Passenger Lift",
        units: 3,
        capacity: "1000KG",
        stops: "6/6/6",
        speed: "1.0 M/S",
        terms: "CIF - Port of Jakarta",
        quotationDate: "2026-05-16",
        status: "Quoted",
        owner: "Joint",
        value: 35000,
        commission: 0,
        nextFollowUp: "",
        notes: "Quotation No: XFJH26051601. Quotation model: TKJW1000/1.0-VVVF. Floors/stops/doors: 6/6/6. Machine room: MRL. Freight from factory to Port of Jakarta.",
        updatedAt: new Date().toISOString()
    },
    {
        id: "crm-steven-medan-church",
        company: "Mr. Steven",
        contact: "Mr. Steven",
        email: "",
        phone: "",
        city: "Medan",
        projectNo: "002",
        project: "CHURCH in Medan",
        elevatorType: "Passenger Lift",
        units: 1,
        capacity: "800KG",
        stops: "2/2/2",
        speed: "1.0 M/S",
        terms: "CIF - Belawan Port",
        quotationDate: "2026-05-19",
        status: "Quoted",
        owner: "Joint",
        value: 11700,
        commission: 0,
        nextFollowUp: "",
        notes: "Quotation No: XFJH26051902. Quotation model: TKJW800/1.0-VVVF. Floors/stops/doors: 2/2/2. Machine room: MRL. Freight from factory to Belawan Port.",
        updatedAt: new Date().toISOString()
    },
    {
        id: "crm-ingrid-jakarta-mod",
        company: "Ms. Ingrid",
        contact: "Ms. Ingrid",
        email: "",
        phone: "",
        city: "Jakarta",
        projectNo: "005",
        project: "MOD",
        elevatorType: "Passenger Elevator",
        units: 1,
        capacity: "",
        stops: "",
        speed: "",
        terms: "",
        quotationDate: "",
        status: "Communication",
        owner: "Joint",
        value: 0,
        commission: 0,
        nextFollowUp: "",
        notes: "Communication stage.",
        updatedAt: new Date().toISOString()
    },
    {
        id: "crm-widodo-assalam-hospital",
        company: "Assalam Hospital",
        contact: "Pak Widodo",
        email: "",
        phone: "",
        city: "",
        projectNo: "001",
        project: "Assalam Hospital",
        elevatorType: "Bed Lift",
        units: 1,
        capacity: "1600KG",
        stops: "3/3/3",
        speed: "1.0 M/S",
        terms: "CIF - Port of Jakarta",
        quotationDate: "2026-05-20",
        status: "Quoted",
        owner: "Joint",
        value: 13700,
        commission: 0,
        nextFollowUp: "",
        notes: "Quotation No: XFJQ2605201. Quotation model: TKJ1600/1.0-VVVF. Floors/stops/doors: 3/3/3. Machine room: MR. Freight from factory to Port of Jakarta.",
        updatedAt: new Date().toISOString()
    },
    {
        id: "crm-waiting-for-service",
        company: "Service Customer",
        contact: "",
        email: "",
        phone: "",
        city: "",
        projectNo: "006",
        project: "Waiting for Service",
        elevatorType: "Passenger Elevator",
        units: 1,
        capacity: "",
        stops: "",
        speed: "",
        terms: "",
        quotationDate: "",
        status: "Service Pending",
        owner: "Joint",
        value: 0,
        commission: 0,
        nextFollowUp: "",
        notes: "Waiting for service. Assign service follow-up.",
        updatedAt: new Date().toISOString()
    }
];

let records = loadRecords();
let settings = loadSettings();
let currentLang = localStorage.getItem(LANGUAGE_KEY) || "en";
let activeView = "pipeline";
let activeStatus = "all";
let supabase = null;
let syncing = false;

const elements = {
    content: document.getElementById("content"),
    viewTitle: document.getElementById("view-title"),
    statusTabs: document.getElementById("status-tabs"),
    ownerFilter: document.getElementById("owner-filter"),
    searchInput: document.getElementById("search-input"),
    syncDot: document.getElementById("sync-dot"),
    syncTitle: document.getElementById("sync-title"),
    syncCopy: document.getElementById("sync-copy"),
    dialog: document.getElementById("deal-dialog"),
    form: document.getElementById("deal-form"),
    dialogTitle: document.getElementById("dialog-title"),
    deleteRecord: document.getElementById("delete-record"),
    importDialog: document.getElementById("import-dialog"),
    importJson: document.getElementById("import-json")
};

function t(key) {
    return translations[currentLang]?.[key] || translations.en[key] || key;
}

function statusLabel(status) {
    return statusTranslations[currentLang]?.[status] || status;
}

function sourceLabel(source) {
    return sourceTranslations[currentLang]?.[source] || source;
}

function updateOptionLabels(select, labels) {
    if (!select) return;
    [...select.options].forEach((option) => {
        if (labels[option.value]) option.textContent = labels[option.value];
    });
}

function applyLanguage() {
    document.documentElement.lang = currentLang === "zh" ? "zh-CN" : currentLang;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll("[data-lang]").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.lang === currentLang);
    });

    elements.searchInput.placeholder = t("searchPlaceholder");
    elements.importJson.placeholder = currentLang === "zh"
        ? "在这里粘贴导出的 CRM JSON"
        : currentLang === "id"
            ? "Tempel JSON CRM yang diekspor di sini"
            : "Paste exported CRM JSON here";

    updateOptionLabels(elements.ownerFilter, {
        all: t("allSources"),
        "China Team": sourceLabel("China Team"),
        "Indonesia Partner": sourceLabel("Indonesia Partner"),
        Joint: sourceLabel("Joint")
    });
    updateOptionLabels(document.getElementById("owner"), {
        "China Team": sourceLabel("China Team"),
        "Indonesia Partner": sourceLabel("Indonesia Partner"),
        Joint: sourceLabel("Joint")
    });
    updateSyncStatus();
}

function loadRecords() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
        const seeded = requestedRecords.map(normalizeRecord);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
        return seeded;
    }

    try {
        const parsed = JSON.parse(stored).map(normalizeRecord);
        const merged = keepRequestedRecords(parsed);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
        return merged;
    } catch {
        return requestedRecords.map(normalizeRecord);
    }
}

function normalizeRecord(record) {
    return {
        ...record,
        projectNo: record.projectNo || generateProjectNo(record),
        important: Boolean(record.important),
        status: statuses.includes(record.status) ? record.status : statusMap[record.status] || "Inquiry"
    };
}

function generateProjectNo(record) {
    const seed = record.id || [record.company, record.project, record.contact].join("|");
    let hash = 0;
    for (const char of seed) {
        hash = (hash * 31 + char.charCodeAt(0)) % 997;
    }
    return String(hash + 1).padStart(3, "0");
}

function keepRequestedRecords(baseRecords) {
    const requestedIds = new Set(requestedRecords.map((record) => record.id));
    const requestedKeys = new Set(requestedRecords.map(recordKey));
    const existingRequested = baseRecords.filter((record) => {
        return requestedIds.has(record.id) || requestedKeys.has(recordKey(record));
    });
    const existingIds = new Set(existingRequested.map((record) => record.id));
    const existingKeys = new Set(existingRequested.map(recordKey));
    const missingRequested = requestedRecords.filter((record) => {
        return !existingIds.has(record.id) && !existingKeys.has(recordKey(record));
    });
    return [...missingRequested, ...existingRequested.map(fillRequestedDefaults)];
}

function fillRequestedDefaults(record) {
    const requested = requestedRecords.find((item) => item.id === record.id || recordKey(item) === recordKey(record));
    if (!requested) return record;

    const filled = { ...record };
    const extractedQuotationIds = new Set([
        "crm-dimas-arista-byd-pik2",
        "crm-steven-medan-church",
        "crm-widodo-assalam-hospital"
    ]);

    if (extractedQuotationIds.has(requested.id)) {
        return {
            ...filled,
            company: requested.company,
            contact: requested.contact,
            city: requested.city,
            projectNo: requested.projectNo,
            project: requested.project,
            elevatorType: requested.elevatorType,
            units: requested.units,
            capacity: requested.capacity,
            stops: requested.stops,
            speed: requested.speed,
            terms: requested.terms,
            quotationDate: requested.quotationDate,
            status: requested.status,
            value: requested.value,
            notes: requested.notes
        };
    }

    if (requested.projectNo) {
        filled.projectNo = requested.projectNo;
    }

    for (const [key, value] of Object.entries(requested)) {
        if ((filled[key] === "" || filled[key] === 0 || filled[key] == null) && value !== "" && value !== 0 && value != null) {
            filled[key] = value;
        }
    }
    return filled;
}

function recordKey(record) {
    return [record.company, record.contact, record.project]
        .map((value) => String(value || "").trim().toLowerCase())
        .join("|");
}

function loadSettings() {
    try {
        return JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {};
    } catch {
        return {};
    }
}

function saveLocal() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function saveSettings() {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function money(value) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    }).format(Number(value || 0));
}

function escapeHtml(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function filteredRecords() {
    const query = elements.searchInput.value.trim().toLowerCase();
    const owner = elements.ownerFilter.value;

    return records.filter((record) => {
        const statusMatch = activeStatus === "all" || record.status === activeStatus;
        const ownerMatch = owner === "all" || record.owner === owner;
        const haystack = [
            record.company,
            record.contact,
            record.email,
            record.phone,
            record.city,
            record.projectNo,
            record.project,
            record.elevatorType,
            record.terms,
            record.quotationDate,
            record.status,
            record.notes
        ].join(" ").toLowerCase();
        return statusMatch && ownerMatch && (!query || haystack.includes(query));
    });
}

function renderStatusTabs() {
    const tabs = ["all", ...statuses];
    elements.statusTabs.innerHTML = tabs.map((status) => {
        const label = status === "all" ? t("all") : statusLabel(status);
        const active = activeStatus === status ? "is-active" : "";
        return `<button class="${active}" data-status="${escapeHtml(status)}">${escapeHtml(label)}</button>`;
    }).join("");
}

function renderMetrics() {
    const openRecords = records.filter((record) => activeStatuses.has(record.status));
    const openValue = openRecords.reduce((sum, record) => sum + Number(record.value || 0), 0);
    const customers = new Set(records.map((record) => record.company.trim()).filter(Boolean));
    const units = records.reduce((sum, record) => sum + Number(record.units || 0), 0);

    document.getElementById("metric-open-value").textContent = money(openValue);
    document.getElementById("metric-customers").textContent = customers.size;
    document.getElementById("metric-units").textContent = units;
}

function statusClass(status) {
    if (status === "Quoted") return "status-quoted";
    if (status === "Service Pending") return "status-service";
    if (status === "Not Awarded") return "status-not-awarded";
    if (status === "Communication") return "status-communication";
    if (status === "Negotiation") return "status-negotiation";
    return "";
}

function detailRow(record) {
    return `
        <article class="detail-row ${record.status === "Not Awarded" ? "is-not-awarded" : ""} ${record.important ? "is-important" : ""}" data-edit="${escapeHtml(record.id)}" tabindex="0">
            <div class="detail-row-head">
                <div>
                    <h3>${escapeHtml(record.company)}</h3>
                    <p class="record-meta">${escapeHtml(record.contact || t("noContact"))} · ${escapeHtml(record.city || t("noCity"))}</p>
                </div>
                <div class="record-actions">
                    <button class="important-toggle ${record.important ? "is-active" : ""}" type="button" data-important="${escapeHtml(record.id)}">${escapeHtml(record.important ? t("importantMarked") : t("important"))}</button>
                    <span class="pill ${statusClass(record.status)}">${escapeHtml(statusLabel(record.status))}</span>
                </div>
            </div>
            <div class="detail-grid">
                <div>
                    <span>${escapeHtml(t("projectNo"))}</span>
                    <strong>${escapeHtml(record.projectNo || generateProjectNo(record))}</strong>
                </div>
                <div>
                    <span>${escapeHtml(t("project"))}</span>
                    <strong>${escapeHtml(record.project)}</strong>
                </div>
                <div>
                    <span>${escapeHtml(t("elevator"))}</span>
                    <strong>${escapeHtml(record.elevatorType)} · ${Number(record.units || 0)} ${Number(record.units || 0) === 1 ? t("unit") : t("unitsText")}</strong>
                </div>
                <div>
                    <span>${escapeHtml(t("specification"))}</span>
                    <strong>${escapeHtml([record.capacity, record.stops, record.speed].filter(Boolean).join(" · ") || t("toBeConfirmed"))}</strong>
                </div>
                <div>
                    <span>${escapeHtml(t("termsDestination"))}</span>
                    <strong>${escapeHtml(record.terms || t("toBeConfirmed"))}</strong>
                </div>
                <div>
                    <span>${escapeHtml(t("quotationDate"))}</span>
                    <strong>${escapeHtml(record.quotationDate || t("notSet"))}</strong>
                </div>
                <div>
                    <span>${escapeHtml(t("contractValueCommission"))}</span>
                    <strong>${money(record.value)} / ${money(record.commission)}</strong>
                </div>
                <div>
                    <span>${escapeHtml(t("customerSource"))}</span>
                    <strong>${escapeHtml(sourceLabel(record.owner))}</strong>
                </div>
                <div>
                    <span>${escapeHtml(t("nextFollowUp"))}</span>
                    <strong>${escapeHtml(record.nextFollowUp || t("notSet"))}</strong>
                </div>
            </div>
            <p class="detail-notes">${escapeHtml(record.notes || t("noNotes"))}</p>
        </article>
    `;
}

function renderPipeline(list) {
    const sorted = [...list].sort((a, b) => {
        if (a.important !== b.important) return a.important ? -1 : 1;
        const aDate = a.quotationDate || "";
        const bDate = b.quotationDate || "";
        if (aDate && bDate && aDate !== bDate) return bDate.localeCompare(aDate);
        if (aDate && !bDate) return -1;
        if (!aDate && bDate) return 1;
        return statuses.indexOf(a.status) - statuses.indexOf(b.status) || a.company.localeCompare(b.company);
    });
    elements.content.innerHTML = `
        <div class="detail-list">
            ${sorted.length ? sorted.map(detailRow).join("") : `<div class='empty'>${escapeHtml(t("noRecords"))}</div>`}
        </div>
    `;
}

function renderCustomers(list) {
    const grouped = new Map();
    list.forEach((record) => {
        if (!grouped.has(record.company)) grouped.set(record.company, []);
        grouped.get(record.company).push(record);
    });

    const rows = [...grouped.entries()].map(([company, items]) => {
        const first = items[0];
        const value = items.reduce((sum, item) => sum + Number(item.value || 0), 0);
        const commission = items.reduce((sum, item) => sum + Number(item.commission || 0), 0);
        return `
            <tr>
                <td><button data-edit="${escapeHtml(first.id)}">${escapeHtml(company)}</button><div class="record-meta">${escapeHtml(first.contact || "")}</div></td>
                <td>${escapeHtml(first.city || "")}</td>
                <td>${items.length}</td>
                <td>${money(value)}</td>
                <td>${money(commission)}</td>
                <td>${escapeHtml(first.phone || "")}</td>
            </tr>
        `;
    }).join("");

    elements.content.innerHTML = rows ? `
        <div class="table-wrap">
            <table class="table">
                <thead><tr><th>${escapeHtml(t("customer"))}</th><th>${escapeHtml(t("city"))}</th><th>${escapeHtml(t("deals"))}</th><th>${escapeHtml(t("totalValue"))}</th><th>${escapeHtml(t("commissionIncluded"))}</th><th>${escapeHtml(t("phone"))}</th></tr></thead>
                <tbody>${rows}</tbody>
            </table>
        </div>
    ` : `<div class='empty'>${escapeHtml(t("noCustomersFound"))}</div>`;
}

function renderElevators(list) {
    const rows = list.map((record) => `
        <tr>
            <td><button data-edit="${escapeHtml(record.id)}">${escapeHtml(record.project)}</button><div class="record-meta">${escapeHtml(record.company)}</div></td>
            <td>${escapeHtml(record.elevatorType)}</td>
            <td>${Number(record.units || 0)}</td>
            <td>${escapeHtml(record.capacity || "")}</td>
            <td>${escapeHtml(record.stops || "")}</td>
            <td>${escapeHtml(record.speed || "")}</td>
            <td><span class="pill ${statusClass(record.status)}">${escapeHtml(statusLabel(record.status))}</span></td>
            <td>${money(record.value)}</td>
        </tr>
    `).join("");

    elements.content.innerHTML = rows ? `
        <div class="table-wrap">
            <table class="table">
                <thead><tr><th>${escapeHtml(t("project"))}</th><th>${escapeHtml(t("type"))}</th><th>${escapeHtml(t("units"))}</th><th>${escapeHtml(t("capacity"))}</th><th>${escapeHtml(t("stops"))}</th><th>${escapeHtml(t("speed"))}</th><th>${escapeHtml(t("status"))}</th><th>${escapeHtml(t("value"))}</th></tr></thead>
                <tbody>${rows}</tbody>
            </table>
        </div>
    ` : `<div class='empty'>${escapeHtml(t("noElevatorRecordsFound"))}</div>`;
}

function renderSettings() {
    elements.content.innerHTML = `
        <div class="settings-grid">
            <section class="setting-card">
                <h3>${escapeHtml(t("sharedCloudDatabase"))}</h3>
                <p>${escapeHtml(t("sharedCloudCopy"))}</p>
                <label>
                    ${escapeHtml(t("supabaseUrl"))}
                    <input id="setting-url" value="${escapeHtml(settings.supabaseUrl || "")}" placeholder="https://xxxx.supabase.co">
                </label>
                <label>
                    ${escapeHtml(t("supabaseAnonKey"))}
                    <input id="setting-key" value="${escapeHtml(settings.supabaseKey || "")}" placeholder="eyJ...">
                </label>
                <button class="primary" id="save-settings">${escapeHtml(t("saveConnect"))}</button>
            </section>
            <section class="setting-card">
                <h3>${escapeHtml(t("dataTools"))}</h3>
                <p>${escapeHtml(t("dataToolsCopy"))}</p>
                <button class="secondary" id="export-json">${escapeHtml(t("exportJson"))}</button>
                <button class="secondary" id="import-open">${escapeHtml(t("importJson"))}</button>
                <button class="secondary" id="download-csv">${escapeHtml(t("downloadCsv"))}</button>
                <p>${escapeHtml(t("databaseTableName"))}: <strong>${TABLE_NAME}</strong></p>
            </section>
        </div>
    `;
}

function render() {
    renderMetrics();
    renderStatusTabs();
    elements.viewTitle.textContent = {
        pipeline: t("navPipeline"),
        customers: t("navCustomers"),
        elevators: t("navElevators"),
        settings: t("navSharing")
    }[activeView];

    document.querySelectorAll(".nav-item").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.view === activeView);
    });

    if (activeView === "settings") {
        renderSettings();
        return;
    }

    const list = filteredRecords();
    if (activeView === "pipeline") renderPipeline(list);
    if (activeView === "customers") renderCustomers(list);
    if (activeView === "elevators") renderElevators(list);
}

function fillStatusSelect() {
    const statusSelect = document.getElementById("status");
    statusSelect.innerHTML = statuses.map((status) => `<option value="${escapeHtml(status)}">${escapeHtml(statusLabel(status))}</option>`).join("");
}

function field(id) {
    return document.getElementById(id);
}

function openDeal(record = null) {
    elements.form.reset();
    fillStatusSelect();
    field("record-id").value = record?.id || "";
    elements.dialogTitle.textContent = record ? t("editDeal") : t("newDeal");
    elements.deleteRecord.style.visibility = record ? "visible" : "hidden";

    const values = record || {
        elevatorType: "Passenger Elevator",
        units: 1,
        status: "Inquiry",
        owner: "Joint",
    };

    for (const [key, value] of Object.entries({
        company: values.company,
        contact: values.contact,
        email: values.email,
        phone: values.phone,
        city: values.city,
        "project-no": values.projectNo,
        project: values.project,
        "elevator-type": values.elevatorType,
        units: values.units,
        capacity: values.capacity,
        stops: values.stops,
        speed: values.speed,
        terms: values.terms,
        "quotation-date": values.quotationDate,
        status: values.status,
        owner: values.owner,
        value: values.value,
        commission: values.commission,
        "next-follow-up": values.nextFollowUp,
        notes: values.notes
    })) {
        field(key).value = value ?? "";
    }

    elements.dialog.showModal();
}

function readFormRecord() {
    const id = field("record-id").value || crypto.randomUUID();
    return {
        id,
        company: field("company").value.trim(),
        contact: field("contact").value.trim(),
        email: field("email").value.trim(),
        phone: field("phone").value.trim(),
        city: field("city").value.trim(),
        projectNo: field("project-no").value.trim(),
        project: field("project").value.trim(),
        elevatorType: field("elevator-type").value,
        units: Number(field("units").value || 1),
        capacity: field("capacity").value.trim(),
        stops: field("stops").value.trim(),
        speed: field("speed").value.trim(),
        terms: field("terms").value.trim(),
        quotationDate: field("quotation-date").value,
        status: field("status").value,
        owner: field("owner").value,
        value: Number(field("value").value || 0),
        commission: Number(field("commission").value || 0),
        nextFollowUp: field("next-follow-up").value,
        notes: field("notes").value.trim(),
        updatedAt: new Date().toISOString()
    };
}

async function upsertRecord(record) {
    record = normalizeRecord(record);
    const index = records.findIndex((item) => item.id === record.id);
    if (index >= 0) records[index] = record;
    else records.unshift(record);
    saveLocal();
    render();

    if (supabase) {
        const { error } = await supabase.from(TABLE_NAME).upsert(toDbRecord(record));
        if (error) showSyncError(error.message);
    }
}

async function deleteRecord(id) {
    records = records.filter((record) => record.id !== id);
    saveLocal();
    render();

    if (supabase) {
        const { error } = await supabase.from(TABLE_NAME).delete().eq("id", id);
        if (error) showSyncError(error.message);
    }
}

async function toggleImportant(id) {
    const record = records.find((item) => item.id === id);
    if (!record) return;
    record.important = !record.important;
    record.updatedAt = new Date().toISOString();
    saveLocal();
    render();

    if (supabase) {
        const { error } = await supabase.from(TABLE_NAME).upsert(toDbRecord(record));
        if (error) showSyncError(error.message);
    }
}

function toDbRecord(record) {
    return {
        id: record.id,
        company: record.company,
        contact: record.contact,
        email: record.email,
        phone: record.phone,
        city: record.city,
        project_no: record.projectNo,
        project: record.project,
        elevator_type: record.elevatorType,
        units: record.units,
        capacity: record.capacity,
        stops: record.stops,
        speed: record.speed,
        terms: record.terms,
        quotation_date: record.quotationDate || null,
        status: record.status,
        owner: record.owner,
        important: Boolean(record.important),
        value: record.value,
        commission: record.commission,
        next_follow_up: record.nextFollowUp || null,
        notes: record.notes,
        updated_at: record.updatedAt
    };
}

function fromDbRecord(row) {
    return normalizeRecord({
        id: row.id,
        company: row.company,
        contact: row.contact,
        email: row.email,
        phone: row.phone,
        city: row.city,
        projectNo: row.project_no,
        project: row.project,
        elevatorType: row.elevator_type,
        units: Number(row.units || 0),
        capacity: row.capacity,
        stops: row.stops,
        speed: row.speed,
        terms: row.terms,
        quotationDate: row.quotation_date,
        status: row.status,
        owner: row.owner,
        important: Boolean(row.important),
        value: Number(row.value || 0),
        commission: Number(row.commission || 0),
        nextFollowUp: row.next_follow_up,
        notes: row.notes,
        updatedAt: row.updated_at
    });
}

async function connectSupabase() {
    if (!settings.supabaseUrl || !settings.supabaseKey || syncing) {
        updateSyncStatus();
        return;
    }

    syncing = true;
    try {
        const { createClient } = await import("https://esm.sh/@supabase/supabase-js@2");
        supabase = createClient(settings.supabaseUrl, settings.supabaseKey);
        const { data, error } = await supabase.from(TABLE_NAME).select("*").order("updated_at", { ascending: false });
        if (error) throw error;

        if (data.length === 0 && records.length > 0) {
            await supabase.from(TABLE_NAME).upsert(records.map(toDbRecord));
        } else {
            records = data.map(fromDbRecord);
            saveLocal();
        }

        supabase
            .channel("crm-deals")
            .on("postgres_changes", { event: "*", schema: "public", table: TABLE_NAME }, async () => {
                const { data: fresh } = await supabase.from(TABLE_NAME).select("*").order("updated_at", { ascending: false });
                if (fresh) {
                    records = fresh.map(fromDbRecord);
                    saveLocal();
                    render();
                }
            })
            .subscribe();

        updateSyncStatus(true);
        render();
    } catch (error) {
        supabase = null;
        showSyncError(error.message);
    } finally {
        syncing = false;
    }
}

function updateSyncStatus(online = Boolean(supabase)) {
    elements.syncDot.classList.toggle("is-online", online);
    elements.syncTitle.textContent = online ? t("cloudSyncActive") : t("localMode");
    elements.syncCopy.textContent = online ? t("cloudSyncCopy") : t("localModeCopy");
}

function showSyncError(message) {
    elements.syncDot.classList.remove("is-online");
    elements.syncTitle.textContent = t("syncAttention");
    elements.syncCopy.textContent = message || t("syncAttentionCopy");
}

function exportJson() {
    const blob = new Blob([JSON.stringify(records, null, 2)], { type: "application/json" });
    downloadBlob(blob, `indonesia-crm-${new Date().toISOString().slice(0, 10)}.json`);
}

function exportCsv() {
    const headers = [
        "company",
        "contact",
        "email",
        "phone",
        "city",
        "projectNo",
        "project",
        "elevatorType",
        "units",
        "capacity",
        "stops",
        "speed",
        "terms",
        "quotationDate",
        "status",
        "owner",
        "important",
        "value",
        "commission",
        "nextFollowUp",
        "notes"
    ];
    const rows = records.map((record) => headers.map((key) => {
        const value = String(record[key] ?? "").replaceAll('"', '""');
        return `"${value}"`;
    }).join(","));
    downloadBlob(new Blob([[headers.join(","), ...rows].join("\n")], { type: "text/csv" }), "indonesia-crm.csv");
}

function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
}

function attachEvents() {
    document.querySelector(".nav-list").addEventListener("click", (event) => {
        const button = event.target.closest("[data-view]");
        if (!button) return;
        activeView = button.dataset.view;
        render();
    });

    elements.statusTabs.addEventListener("click", (event) => {
        const button = event.target.closest("[data-status]");
        if (!button) return;
        activeStatus = button.dataset.status;
        render();
    });

    elements.ownerFilter.addEventListener("change", render);
    elements.searchInput.addEventListener("input", render);
    document.querySelector(".language-switch").addEventListener("click", (event) => {
        const button = event.target.closest("[data-lang]");
        if (!button) return;
        currentLang = button.dataset.lang;
        localStorage.setItem(LANGUAGE_KEY, currentLang);
        applyLanguage();
        render();
    });
    document.getElementById("new-deal").addEventListener("click", () => openDeal());

    elements.content.addEventListener("click", (event) => {
        const importantButton = event.target.closest("[data-important]");
        if (importantButton) {
            event.stopPropagation();
            toggleImportant(importantButton.dataset.important);
            return;
        }

        const button = event.target.closest("[data-edit]");
        if (!button) return;
        const record = records.find((item) => item.id === button.dataset.edit);
        if (record) openDeal(record);
    });

    elements.content.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        const row = event.target.closest("[data-edit]");
        if (!row || event.target.closest("[data-important]")) return;
        event.preventDefault();
        const record = records.find((item) => item.id === row.dataset.edit);
        if (record) openDeal(record);
    });

    elements.form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (!elements.form.reportValidity()) return;
        await upsertRecord(readFormRecord());
        elements.dialog.close();
    });

    elements.deleteRecord.addEventListener("click", async () => {
        const id = field("record-id").value;
        if (!id) return;
        await deleteRecord(id);
        elements.dialog.close();
    });

    document.body.addEventListener("click", async (event) => {
        if (event.target.matches("[data-close-dialog]")) {
            event.target.closest("dialog")?.close();
        }

        if (event.target.id === "save-settings") {
            settings.supabaseUrl = document.getElementById("setting-url").value.trim();
            settings.supabaseKey = document.getElementById("setting-key").value.trim();
            saveSettings();
            await connectSupabase();
        }

        if (event.target.id === "import-open") {
            elements.importJson.value = "";
            elements.importDialog.showModal();
        }

        if (event.target.id === "export-json") {
            exportJson();
        }

        if (event.target.id === "download-csv") {
            exportCsv();
        }
    });

    document.getElementById("import-form").addEventListener("submit", async (event) => {
        event.preventDefault();
        const imported = JSON.parse(elements.importJson.value);
        if (!Array.isArray(imported)) throw new Error("Imported JSON must be an array.");
        records = imported.map((record) => ({ ...record, id: record.id || crypto.randomUUID(), updatedAt: record.updatedAt || new Date().toISOString() }));
        saveLocal();
        if (supabase) await supabase.from(TABLE_NAME).upsert(records.map(toDbRecord));
        elements.importDialog.close();
        render();
    });
}

const USERS = { abdul: "123abd", naf: "123" };
const AUTH_KEY = "xinfuji_crm_auth";

function showApp() {
    document.getElementById("login-screen").classList.remove("visible");
    document.querySelector(".app-shell").classList.add("visible");
    applyLanguage();
    render();
    connectSupabase();
}

function showLogin() {
    document.getElementById("login-screen").classList.add("visible");
    document.querySelector(".app-shell").classList.remove("visible");
}

document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("login-user").value.trim().toLowerCase();
    const pass = document.getElementById("login-pass").value;
    if (USERS[user] !== undefined && USERS[user] === pass) {
        sessionStorage.setItem(AUTH_KEY, user);
        showApp();
    } else {
        document.getElementById("login-error").textContent = "Incorrect username or password.";
    }
});

attachEvents();

if (sessionStorage.getItem(AUTH_KEY)) {
    showApp();
} else {
    showLogin();
}
