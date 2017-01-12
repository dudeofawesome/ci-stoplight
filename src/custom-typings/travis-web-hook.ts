export class StatusMessage {
  /** A build has been requested */
  static PASSED = 'Passed';
  /** The build completed successfully */
  static PENDING = 'Pending';
  /** The build completed successfully after a previously failed build */
  static FIXED = 'Fixed';
  /** The build completed in failure after a previously successful build */
  static BROKEN = 'Broken';
  /** The build is the first build for a new branch and has failed */
  static FAILED = 'Failed';
  /** The build completed in failure after a previously failed build */
  static STILL_FAILING = 'Still Failing';
}

export interface ITravisWebHook {
  id: number;
  number: string;
  status: any;
  started_at: string;
  finished_at: string;
  status_message: StatusMessage;
  commit: string;
  branch: string;
  message: string;
  compare_url: string;
  committed_at: string;
  committer_name: string;
  committer_email: string;
  author_name: string;
  author_email: string;
  type: 'push' | 'pull_request' | 'cron' | 'api';
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
