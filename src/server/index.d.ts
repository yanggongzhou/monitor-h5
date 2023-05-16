declare namespace Message {
  interface Text {
    msgtype: 'text';
    text: {
      content: string;
    };
    at?: {
      atMobiles: string[];
      isAtAll: boolean;
    } | undefined;
  }

  interface Link {
    msgtype: 'link';
    link: {
      text: string;
      title: string;
      picUrl: string;
      messageUrl: string;
    };
  }

  interface Markdown {
    msgtype: 'markdown';
    markdown: {
      title: string;
      text: string;
      atMobiles: string[];
      isAtAll: boolean;
    };
  }

  interface ActionCard {
    msgtype: 'actionCard';
    actionCard: {
      title: string;
      text: string;
      singleTitle?: string | undefined;
      singleURL?: string | undefined;
      hideAvatar: '0' | '1';
      btnOrientation: '0' | '1';
      btns?: Array<{
        title: string;
        actionURL: string;
      }> | undefined;
    };
  }

  interface FeedCardItem {
    msgtype: 'feedCard';
    feedCard: {
      title: string;
      messageURL: string;
      picURL: string;
    };
  }
}

export type MessageType = Message.Text | Message.Link | Message.Markdown | Message.ActionCard | Message.FeedCardItem;
