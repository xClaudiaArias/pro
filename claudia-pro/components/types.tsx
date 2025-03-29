export type ProjectType = {
    project: {
        id: string,
        title: string;
        year: string;
        description: string;
        additional_imgs?: string[];
        about: string;
        tools?: string[];
        sitemap?: string[];
        wireframes?: string[];
        high_fidelity_imgs?: string[];
        demo?: string;
    }
};
