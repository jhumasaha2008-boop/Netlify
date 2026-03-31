export interface Product {
    id: string;
    name: string;
    subName: string;
    price: string;
    description: string;
    folderPath: string;
    themeColor: string;
    gradient: string;
    features: string[];
    stats: { label: string; val: string }[];
    section1: { title: string; subtitle: string };
    section2: { title: string; subtitle: string };
    section3: { title: string; subtitle: string };
    section4: { title: string; subtitle: string };
    detailsSection: { title: string; description: string; imageAlt: string };
    freshnessSection: { title: string; description: string };
    buyNowSection: {
        price: string;
        unit: string;
        processingParams: string[];
        deliveryPromise: string;
        returnPolicy: string;
    };
}

export const products: Product[] = [
    {
        id: "coconut",
        name: "Tender Coconut",
        subName: "Pure hydration.",
        price: "₹110",
        description: "Electrolyte Rich - No Sugar Added - 100% Natural",
        folderPath: "/images/coconut",
        themeColor: "#A5D6A7",
        gradient: "linear-gradient(135deg, #A5D6A7 0%, #66BB6A 100%)",
        features: ["Electrolyte Rich", "No Sugar Added", "100% Natural"],
        stats: [
          { label: "Sugar", val: "0g Added" },
          { label: "Electrolytes", val: "High" },
          { label: "Purity", val: "100%" }
        ],

        section1: { title: "Tender Coconut.", subtitle: "Pure hydration." },
        section2: { title: "Straight from nature.", subtitle: "Freshly extracted from young green coconuts, untouched and unprocessed." },
        section3: { title: "Hydrate smarter.", subtitle: "Packed with natural electrolytes to refresh and energize instantly." },
        section4: { title: "Nothing added. Nothing removed.", subtitle: "" },

        detailsSection: {
            title: "Nature’s Isotonic Drink",
            description: "Our Tender Coconut milkshake is crafted from fresh, hand-picked green coconuts sourced from coastal farms. Naturally rich in potassium and essential minerals, it offers a clean, crisp taste that feels light yet deeply refreshing. No artificial flavors, just pure coconut goodness in every sip.",
            imageAlt: "Coconut Details"
        },

        freshnessSection: {
            title: "Freshness Locked In",
            description: "We extract coconut water and blend it with soft malai instantly to preserve its natural sweetness and nutrients. Using cold-processing techniques, we ensure every bottle delivers the same freshness as drinking straight from a coconut."
        },

        buyNowSection: {
            price: "₹110",
            unit: "per 300ml bottle",
            processingParams: ["Cold Extracted", "No Preservatives", "Fresh Malai Blend"],
            deliveryPromise: "Delivered chilled within 24 hours in metro cities. Freshness guaranteed.",
            returnPolicy: "Not satisfied? Get a full refund—no questions asked."
        }
    },

    {
        id: "coconut-cream",
        name: "Coconut Cream",
        subName: "Silky indulgence.",
        price: "₹130",
        description: "Creamy Texture - Natural Fat - Dairy Free",
        folderPath: "/images/coconut-cream",
        themeColor: "#FFF3E0",
        gradient: "linear-gradient(135deg, #FFF3E0 0%, #FFCC80 100%)",
        features: ["Dairy Free", "Creamy Texture", "Natural Fat"],
        stats: [
          { label: "Dairy", val: "0%" },
          { label: "Creaminess", val: "100%" },
          { label: "Fat", val: "Natural" }
        ],

        section1: { title: "Coconut Cream.", subtitle: "Silky indulgence." },
        section2: { title: "Rich & smooth.", subtitle: "Blended coconut cream with a velvety mouthfeel." },
        section3: { title: "Guilt-free indulgence.", subtitle: "Enjoy the richness without dairy or artificial additives." },
        section4: { title: "Plant-based perfection.", subtitle: "" },

        detailsSection: {
            title: "Cream Without Compromise",
            description: "We use thick coconut cream derived from mature coconuts to create a naturally rich and smooth milkshake. It delivers a luxurious texture while remaining completely plant-based, making it perfect for a healthy indulgence.",
            imageAlt: "Coconut Cream Details"
        },

        freshnessSection: {
            title: "Cold-Blended Freshness",
            description: "Our coconut cream is blended fresh in small batches and never heated, ensuring the natural fats and nutrients remain intact. The result is a clean, creamy drink that feels indulgent yet light."
        },

        buyNowSection: {
            price: "₹130",
            unit: "per 300ml bottle",
            processingParams: ["Cold Blended", "Plant Based", "No Dairy"],
            deliveryPromise: "Delivered in insulated packaging to maintain perfect creaminess.",
            returnPolicy: "Love it or get your money back."
        }
    },

    {
        id: "coconut-coffee",
        name: "Coco Coffee",
        subName: "Tropical energy.",
        price: "₹150",
        description: "Coffee Infused - Coconut Base - Natural Energy",
        folderPath: "/images/coconut-coffee",
        themeColor: "#BCAAA4",
        gradient: "linear-gradient(135deg, #BCAAA4 0%, #6D4C41 100%)",
        features: ["Coffee Infused", "Natural Energy", "Dairy Free"],
        stats: [
          { label: "Caffeine", val: "Moderate" },
          { label: "Dairy", val: "0%" },
          { label: "Energy", val: "High" }
        ],

        section1: { title: "Coco Coffee.", subtitle: "Tropical energy." },
        section2: { title: "Wake up differently.", subtitle: "Smooth coconut blended with bold coffee notes." },
        section3: { title: "Sustained energy.", subtitle: "A natural boost without the crash." },
        section4: { title: "Fusion done right.", subtitle: "" },

        detailsSection: {
            title: "Island Meets Espresso",
            description: "We combine premium cold brew coffee with fresh coconut milk to create a perfectly balanced drink. The richness of coconut softens the boldness of coffee, resulting in a refreshing yet energizing experience.",
            imageAlt: "Coconut Coffee Details"
        },

        freshnessSection: {
            title: "Cold Brew Craft",
            description: "Our coffee is slow-brewed for 18 hours and blended with fresh coconut milk to preserve its natural aroma and smoothness. No bitterness, just clean, tropical energy."
        },

        buyNowSection: {
            price: "₹150",
            unit: "per 300ml bottle",
            processingParams: ["Cold Brew", "Dairy Free", "Fresh Blend"],
            deliveryPromise: "Delivered fresh with temperature-controlled packaging.",
            returnPolicy: "If it doesn’t energize you, we refund you."
        }
    }
];
