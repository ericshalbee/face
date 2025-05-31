export interface FAQ {
  question: string;
  answer: string;
  link?: {
    text: string;
    url: string;
  };
}

export const faqData: FAQ[] = [
  {
    question: "How do I recover my hacked Facebook account?",
    answer: "If you believe your account has been hacked, you should immediately visit the Facebook Help Center to report a compromised account. You'll be guided through the recovery process, which may include identity verification.",
    link: {
      text: "Go to account hacked recovery page",
      url: "https://www.facebook.com/hacked"
    }
  },
  {
    question: "How do I contact Facebook customer service?",
    answer: "Facebook does not offer traditional customer service via phone or email for general users. The best way to get help is through the Help Center or in-app reporting tools. Meta Verified subscribers receive priority support.",
    link: {
      text: "Visit Facebook Help Center",
      url: "https://www.facebook.com/help"
    }
  },
  {
    question: "Is there a Facebook customer service phone number?",
    answer: "No, Facebook does not provide phone support for general users. Any website or service claiming to offer a Facebook customer service phone number is likely a scam. Be cautious of phishing attempts seeking your personal information.",
    link: {
      text: "Learn how to report scams",
      url: "https://www.facebook.com/help/1380418588640631"
    }
  },
  {
    question: "How do I appeal a disabled Facebook account?",
    answer: "If your account has been disabled, you can submit an appeal through the Help Center. You'll need to complete an appeal form and possibly provide ID verification. Review time varies based on complexity.",
    link: {
      text: "Submit an appeal",
      url: "https://www.facebook.com/help/contact/317389574998690"
    }
  },
  {
    question: "How do I report a problem on Facebook?",
    answer: "To report a problem on Facebook, use the 'Report a Problem' tool found in the Help & Support menu (click on your profile picture > Help & Support > Report a Problem). Follow the prompts to describe the issue you're experiencing.",
    link: {
      text: "Learn how to report problems",
      url: "https://www.facebook.com/help/1126628984024935"
    }
  },
  {
    question: "How do I get support for my Facebook business page or ads?",
    answer: "Business users can access dedicated support through the Facebook Business Help Center. Advertisers who meet certain spending thresholds may qualify for additional support options including chat and email.",
    link: {
      text: "Visit Business Help Center",
      url: "https://www.facebook.com/business/help"
    }
  },
  {
    question: "Why was my post removed from Facebook?",
    answer: "Posts may be removed if they violate Facebook's Community Standards. Common reasons include hate speech, harassment, spam, misinformation, or intellectual property violations. You can usually find information about why your content was removed in your Support Inbox.",
    link: {
      text: "Review Community Standards",
      url: "https://www.facebook.com/communitystandards"
    }
  }
];