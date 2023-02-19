import React, { Fragment } from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import AuditIcon from './images/audit.inline.svg';
import ConnectivityIcon from './images/connectivity.inline.svg';
import EncryptionIcon from './images/encryption.inline.svg';
import MetricsIcon from './images/metrics.inline.svg';
import NativeSupportIcon from './images/native-support.inline.svg';
import NetworkPolicyIcon from './images/network-policy.inline.svg';
import ObservabilityIcon from './images/observability.inline.svg';
import ScalableKubernetesIcon from './images/scalable-kubernetes.inline.svg';
import VisibilityIcon from './images/visibility.inline.svg';
import Item from './item/item';

import { Popover, Transition } from '@headlessui/react';
import classNames from 'classnames';
import ChevronIcon from 'icons/chevrondown.inline.svg';

const list = [
  {
    title: 'Networking',
    icon: NativeSupportIcon,
    items: [
      {
        icon: NativeSupportIcon,
        title: 'High Performance Networking',
        description: `<p>Kubernetes doesn't come with an implementation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
      },
      {
        icon: ScalableKubernetesIcon,
        title: 'Layer 4 Load Balancer',
        description: `Cilium’s control and data plane has been built from the ground up for large-scale and highly dynamic cloud native environments where 100s and even 1000s of containers are created and destroyed within seconds. Cilium’s control plane is highly optimized, running in Kubernetes clusters of up to 5K nodes and 100K pods. Cilium’s data plane uses eBPF for efficient load-balancing and incremental updates, avoiding the pitfalls of large iptables rulesets. Cilium is fully IPv6-aware.`,
      },
      {
        icon: ConnectivityIcon,
        title: 'Cluster Mesh',
        description: `With standard Kubernetes networking each cluster is an island, requiring proxies to connect workloads across clusters for the purposes of migration, disaster-recovery, or geographic locality. Cilium Cluster Mesh creates a single zone of connectivity for load-balancing, observability and security between nodes across multiple clusters, enabling simple, high-performance cross-cluster connectivity.`,
      },
      {
        icon: ConnectivityIcon,
        title: 'Kube Proxy replacement',
        description: `With standard Kubernetes networking each cluster is an island, requiring proxies to connect workloads across clusters for the purposes of migration, disaster-recovery, or geographic locality. Cilium Cluster Mesh creates a single zone of connectivity for load-balancing, observability and security between nodes across multiple clusters, enabling simple, high-performance cross-cluster connectivity.`,
      },
      {
        icon: ConnectivityIcon,
        title: 'BGP',
        description: `With standard Kubernetes networking each cluster is an island, requiring proxies to connect workloads across clusters for the purposes of migration, disaster-recovery, or geographic locality. Cilium Cluster Mesh creates a single zone of connectivity for load-balancing, observability and security between nodes across multiple clusters, enabling simple, high-performance cross-cluster connectivity.`,
      },
    ],
  },
  {
    title: 'Observability',
    icon: VisibilityIcon,
    items: [
      {
        icon: VisibilityIcon,
        title: 'Identity-aware Visibility',
        description: `Modern distributed systems require rich context to enable observability. However, the highly dynamic nature of Kubernetes reduces the value of traditional visibility tools. Because Cilium leverages eBPF for a native understanding of Kubernetes label identity (for pods) and DNS-aware identity (for external workloads), and rich context at the system call and application layer. Cilium provides the right level of information to troubleshoot application and connectivity issues. Cilium’s Hubble framework exposes this via API, CLI, and a graphical UI.`,
      },
      {
        icon: ObservabilityIcon,
        title: 'Advanced Self Service Observability',
        description: `When troubleshooting connectivity between applications in an environment like Kubernetes. Tradional tools limit their inspection to the IP and TCP layers. Cilium uses eBPF to accelerate getting data in and out of L7 proxies such as Envoy, while gathering process context at the kernel layer. Enabling efficient visibility into applications and protocols like HTTP, gRPC, and Kafka. This data is available via Cilium’s Hubble flow UI, CLI, a service map UI, and Prometheus-compatible flow metrics. TLS-interception enables visibility into HTTPS traffic.`,
      },
      {
        icon: MetricsIcon,
        title: 'Network Metrics + Policy Troubleshooting',
        description: `Building on rich identity, Cilium provides Prometheus compatible metrics for L3/L4 and L7 network flow data and exposes context like which application in a pod made these connections. This enables teams to detect and investigate network and application behavior and faults. Both flow and metrics data include rich information about what traffic has been allowed or denied by network policies, simplifying policy troubleshooting.`,
      },
    ],
  },
  {
    title: 'Security',
    icon: EncryptionIcon,
    items: [
      {
        icon: EncryptionIcon,
        title: 'Transparent Encryption',
        description: `Securing data in flight is an increasingly important requirement in security sensitive environments. Cilium’s transparent encryption capabilities use the highly efficient IPsec capabilities built into the Linux kernel to automatically encrypt communications between all workloads within, or between, Kubernetes clusters. This mechanism is simple: it requires only a single configuration setting in Cilium and no application changes. It is also efficient, with no side-car or other application layer proxying required.`,
      },

      {
        icon: AuditIcon,
        title: 'Security Forensics + Audit',
        description: `IPs and ports are nearly meaningless for network security forensics and audit, given that identity in a Kubernetes cluster is highly dynamic. The identity-aware network flow logs and process context from Cilium’s Hubble can be stored to enable long-term forensics of network connectivity to identify attacks and subsequent lateral movement. Cilium’s rich context awareness, optionally combined with TLS-termination enables security visibility even over secure https connections.`,
      },

      {
        icon: NetworkPolicyIcon,
        title: 'Advanced Network Policy',
        description: `Cilium implements basic Kubernetes Network Policy (e.g. Label + CIDR matching) but also uses its identity-aware and application aware visibility to enable both DNS-aware policies (e.g. allow to *.google.com) and application aware policies (e.g. allow HTTP GET /foo). Cilium also supports cluster-wide network policy, and host-layer firewalling. Get started here or watch a video to learn more.`,
      },
    ],
  },
];

const Highlights = () => (
  <section className="mt-10 md:mt-20 lg:mt-32">
    <Container className="grid grid-cols-[minmax(95%,max-content)] gap-4 sm:grid-cols-none md:gap-6 lg:grid-cols-3 lg:gap-8">
      {list.map(({ title, icon: Icon, items }, index) => (
        <Popover as="li" className="scr relative list-none" key={index}>
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  'flex h-full w-full items-center rounded-lg border border-gray-3 p-4 transition duration-200 xl:p-5 xl:pl-6',
                  open && 'rounded-b-none border-transparent shadow-primary'
                )}
              >
                <Icon className="h-auto w-16 shrink-0 xl:w-max" />
                <Heading className="text-2xl font-bold lg:text-3xl " size="3xs" tag="h2">
                  {title}
                </Heading>
                <ChevronIcon className=" ui-open:rotate-180 ui-open:transform ml-auto h-6 w-auto shrink-0 " />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 top-[98%] z-10 w-full -translate-x-1/2 rounded-b-lg  bg-white px-6 text-left shadow-secondary ">
                  <ul className="mt-6 grid grid-cols-1 gap-4  md:gap-6 lg:mt-9 lg:auto-rows-[130px] lg:gap-8 xl:auto-rows-fr">
                    {items.map((item, index) => (
                      <Item {...item} key={index} />
                    ))}
                  </ul>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      ))}
    </Container>
  </section>
);
//

export default Highlights;
