export interface ITravisWebHook {
  id: number;
  number: string;
  status: any;
  started_at: string;
  finished_at: string;
  status_message: 'Passed' | 'Started' | 'Failed' | 'Canceled';
  commit: string;
  branch: string;
  message: string;
  compare_url: string;
  committed_at: string;
  committer_name: string;
  committer_email: string;
  author_name: string;
  author_email: string;
  type: 'push' | 'pull request';
  build_url: string;
  repository: {
    id: number;
    name: string;
    owner_name: string;
    url: string;
  };
  config: {
    notifications?: {
      webhooks?: string[];
    };
  };
  matrix: {
    id: number;
    repository_id: number;
    number: string;
    state: string;
    started_at: string;
    finished_at: string;
    config: {
      notifications?: {
        webhooks?: string[];
      };
    };
    status: string;
    log: string;
    result: string;
    parent_id: number;
    commit: string;
    branch: string;
    message: string;
    committed_at: string;
    committer_name: string;
    committer_email: string;
    author_name: string;
    author_email: string;
    compare_url: string;
  }[];
}
