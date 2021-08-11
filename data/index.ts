export interface IExchangeRateItem {
    currency: String, 
    unit: String, 
    value: number, 
    last_day_value: number, 
}; 

export interface IDashboardDataItem {
    title: string, 
    value: number, 
    last_day_value?: number, 
    unit?: string, 
}

export interface IScholarDataItem {
    time: string, 
    value: number, 
    name: string, 
    unit: string, 
};

export interface IManagerDataItem {
    time: string, 
    value: number, 
    name: string, 
    unit: string, 
};

export interface IUserdata {
}; 


export interface IAdmin {
    profile?: number,
    dashboard_data_list: IDashboardDataItem[], 
    scholar_data: {
        total: number, 
        scholar_list: IScholarDataItem [], 
    }, 

    manager_data: {
        total: number, 
        manager_list: IManagerDataItem [], 
    }, 
    number_axies_by_level: {tag_name: string, value: number}[]
}

export const data: {
    admin_data: IAdmin, 
    user_data: IUserdata, 
    exchange_rate_list: IExchangeRateItem[], 
} = {
    admin_data: {
        dashboard_data_list: [
            {
                title: 'all time earnings', 
                value: 241.21, 
                last_day_value: 214.231, 
                unit: 'SLP', 
            }, 
            {
                title: 'total clamable', 
                value: 21.241, 
                last_day_value: 24.231, 
                unit: 'SLP', 
            }, 
            {
                title: 'total employees', 
                value: 70,  
            }, 
            {
                title: 'axie teams', 
                value: 100,  
            }, 
        ], 
        scholar_data: {
            total: 95, 
            scholar_list: [
                {
                    name: "scholar A", 
                    value: 2021, 
                    time: "Today", 
                    unit: "SLP"
                },
                {
                    name: "scholar B", 
                    value: 198, 
                    time: "Today", 
                    unit: "SLP"
                },
                {
                    name: "scholar C", 
                    value: 160, 
                    time: "Today", 
                    unit: "SLP"
                },
                {
                    name: "scholar D", 
                    value: 150, 
                    time: "Today", 
                    unit: "SLP"
                },
                {
                    name: "scholar E", 
                    value: 100, 
                    time: "Today", 
                    unit: "SLP"
                },
            ], 
        }, 
        manager_data: {
            total: 12, 
            manager_list: [
                {
                    name: "Hai map", 
                    time: "Daily", 
                    unit: "SLP per capital", 
                    value: 201, 
                },
                {
                    name: "Hoangml", 
                    time: "Daily", 
                    unit: "SLP per capital", 
                    value: 198, 
                },
                {
                    name: "haimap2", 
                    time: "Daily", 
                    unit: "SLP per capital", 
                    value: 160, 
                },
                {
                    name: "hoangml2", 
                    time: "Daily", 
                    unit: "SLP per capital", 
                    value: 150, 
                },
                {
                    name: "haicompa", 
                    time: "Daily", 
                    unit: "SLP per capital", 
                    value: 100, 
                },
            ]
        }, 

        number_axies_by_level: [
            {tag_name: 'LVL: 20+', value: 70}, 
            {tag_name: 'LVL: 16-20', value: 90}, 
            {tag_name: 'LVL: 11-15', value: 65}, 
            {tag_name: 'LVL: 6-10', value: 50}, 
            {tag_name: 'LVL: 1-5', value: 60}, 
        ]
    }, 
    user_data: {}, 
    exchange_rate_list: [
        {
            currency: "SLP", 
            unit: "USD", 
            value: 0.24, 
            last_day_value: 0.235
        },
        {
            currency: "AXS", 
            unit: "USD", 
            value: 42, 
            last_day_value: 38
        },
        {
            currency: "SLP", 
            unit: "USD", 
            value: 0.24, 
            last_day_value: 0.235
        },
        // {
        //     currency: "MARKETPLACE VOL", 
        //     unit: "USD", 
        //     value: 21232231, 
        //     last_day_value: 21232241
        // },
        {
            currency: "BTC", 
            unit: "USD", 
            value: 42000, 
            last_day_value: 42500
        },
    ], 
}