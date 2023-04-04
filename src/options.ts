import { type Option, type Options, OptionType, SupportedOption } from './types';
import {
  notImplementedInCompose,
  notYetImplemented,
  processBoolean,
  processLoggingOption,
  processNetworkOption,
  processOptionWithArgs,
  processStorageOption,
  processUlimitOption,
} from './callbacks';

/* eslint-disable */
const OPTIONS: Array<Option> = [
  { name: 'add-host', path: 'extra_hosts', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'attach', short: 'a', path: '', type: OptionType.withArgs, multiValue: false, action: notImplementedInCompose },
  { name: 'blkio-weight', path: 'blkio_config.weight', type: OptionType.withArgs, multiValue: false, composeType: 'int', action: processOptionWithArgs },
  { name: 'blkio-weight-device', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'cap-add', path: 'cap_add', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'cap-drop', path: 'cap_drop', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'cgroupns', path: 'cgroup', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'cgroup-parent', path: 'cgroup_parent', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'cidfile', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'cpu-count', path: 'cpu_count', type: OptionType.withArgs, multiValue: false, composeType: 'int', action: processOptionWithArgs },
  { name: 'cpu-percent', path: 'cpu_percent', type: OptionType.withArgs, multiValue: false, composeType: 'float', action: processOptionWithArgs },
  { name: 'cpu-period', path: 'cpu_period', type: OptionType.withArgs, multiValue: false, composeType: 'int', action: processOptionWithArgs },
  { name: 'cpu-quota', path: 'cpu_quota', type: OptionType.withArgs, multiValue: false, composeType: 'int', action: processOptionWithArgs },
  { name: 'cpu-rt-period', path: 'cpu_rt_period', type: OptionType.withArgs, multiValue: false, composeType: 'int', action: processOptionWithArgs },
  { name: 'cpu-rt-runtime', path: 'cpu_rt_runtime', type: OptionType.withArgs, multiValue: false, composeType: 'int', action: processOptionWithArgs },
  { name: 'cpu-shares', short: 'c', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'cpus', path: 'cpus', type: OptionType.withArgs, multiValue: false, composeType: 'float', action: processOptionWithArgs },
  { name: 'cpuset-cpus', path: 'cpuset', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'cpuset-mems', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'detach', short: 'd', path: '', type: OptionType.flag, multiValue: false, action: notImplementedInCompose },
  { name: 'detach-keys', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'device', path: 'devices', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'device-cgroup-rule', path: 'device_cgroup_rules', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'device-read-bps', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'device-read-iops', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'device-write-bps', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'device-write-iops', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'disable-content-trust', path: '', type: OptionType.flag, multiValue: false, action: notYetImplemented },
  { name: 'dns', path: 'dns', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'dns-option', path: 'dns_opt', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'dns-search', path: 'dns_search', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'domainname', path: 'domainname', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'entrypoint', path: 'entrypoint', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'env', short: 'e', path: 'environment', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'env-file', path: 'env_file', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'expose', path: 'expose', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'gpus', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'group-add', path: 'group_add', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'health-cmd', path: 'healthcheck.test', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'health-interval', path: 'healthcheck.interval', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'health-retries', path: 'healthcheck.retries', type: OptionType.withArgs, multiValue: false, composeType: 'int', action: processOptionWithArgs },
  { name: 'health-start-period', path: 'healthcheck.start_period', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'health-timeout', path: 'healthcheck.timeout', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'hostname', short: 'h', path: 'hostname', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'init', path: 'init', type: OptionType.flag, multiValue: false, action: processBoolean },
  { name: 'interactive', short: 'i', path: 'stdin_open', type: OptionType.flag, multiValue: false, action: processBoolean },
  { name: 'io-maxbandwidth', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'io-maxiops', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'ip', path: 'networks.default.ipv4_address', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'ip6', path: 'networks.default.ipv6_address', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'ipc', path: 'ipc', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'isolation', path: 'isolation', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'kernel-memory', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'label-file', path: '', type: OptionType.withArgs, multiValue: false, action: notImplementedInCompose },
  { name: 'label', short: 'l', path: 'labels', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'link', path: 'links', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'link-local-ip', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'log-driver', path: 'logging.driver', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'log-opt', path: 'logging.options', type: OptionType.withArgs, multiValue: false, action: processLoggingOption },
  { name: 'mac-address', path: 'mac_address', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'memory', short: 'm', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'memory-swap', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'memory-swappiness', path: 'mem_swappiness', type: OptionType.withArgs, multiValue: false, composeType: 'int', action: processOptionWithArgs },
  { name: 'memory-reservation', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'mount', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'name', path: 'container_name', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'network', path: 'networks', type: OptionType.withArgs, multiValue: true, action: processNetworkOption },
  { name: 'network-alias', path: 'networks.default.aliases', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'no-healthcheck', path: '', type: OptionType.flag, multiValue: false, action: notYetImplemented },
  { name: 'oom-kill-disable', path: 'oom_kill_disable', type: OptionType.flag, multiValue: false, action: processBoolean },
  { name: 'oom-score-adj', path: 'oom_score_adj', type: OptionType.withArgs, multiValue: false, composeType: 'int', action: processOptionWithArgs },
  { name: 'pid', path: 'pid', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'pids-limit', path: 'pids_limit', type: OptionType.withArgs, multiValue: false, composeType: 'int', action: processOptionWithArgs },
  { name: 'platform', path: 'platform', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'privileged', path: 'privileged', type: OptionType.flag, multiValue: false, action: processBoolean },
  { name: 'publish', short: 'p', path: 'ports', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'publish-all', short: 'P', path: '', type: OptionType.flag, multiValue: false, action: notImplementedInCompose },
  { name: 'pull', path: 'pull_policy', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'quiet', short: 'q', path: '', type: OptionType.flag, multiValue: false, action: notImplementedInCompose },
  { name: 'read-only', path: 'read_only', type: OptionType.flag, multiValue: false, action: processBoolean },
  { name: 'restart', path: 'restart', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'rm', path: '', type: OptionType.flag, multiValue: false, action: notImplementedInCompose },
  { name: 'runtime', path: 'runtime', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'security-opt', path: 'security_opt', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'shm-size', path: 'shm_size', type: OptionType.withArgs, multiValue: false, composeType: 'int', action: processOptionWithArgs },
  { name: 'stop-signal', path: 'stop_signal', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'stop-timeout', path: 'stop_grace_period', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'storage-opt', path: 'storage_opt', type: OptionType.withArgs, multiValue: false, action: processStorageOption },
  { name: 'tmpfs', path: 'tmpfs', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'tty', short: 't', path: 'tty', type: OptionType.flag, multiValue: false, action: processBoolean },
  { name: 'sysctl', path: 'sysctls', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'ulimit', path: 'ulimits', type: OptionType.withArgs, multiValue: false, composeType: 'int', action: processUlimitOption },
  { name: 'user', short: 'u', path: 'user', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'userns', path: 'userns_mode', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'uts', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'volume-driver', path: '', type: OptionType.withArgs, multiValue: false, action: notYetImplemented },
  { name: 'volumes-from', path: 'volumes_from', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'volume', short: 'v', path: 'volumes', type: OptionType.withArgs, multiValue: true, action: processOptionWithArgs },
  { name: 'workdir', short: 'w', path: 'working_dir', type: OptionType.withArgs, multiValue: false, action: processOptionWithArgs },
  { name: 'help', path: '', type: OptionType.flag, multiValue: false, action: notImplementedInCompose },
];
/* eslint-enable */

const AllOptions: Options = {};
OPTIONS.forEach((opt) => (AllOptions[opt.name] = opt));

export const getOption = (optionName: string): Option | undefined =>
  AllOptions[optionName] || OPTIONS.find((o) => o.short === optionName);

export const getSupportedOptions = (): Array<SupportedOption> => {
  const implemented = OPTIONS.filter(
    (opt) => opt.action !== notYetImplemented && opt.action !== notImplementedInCompose
  ).map((opt) => new SupportedOption(opt.name, opt.path, opt.short));
  return implemented;
};
