import React from 'react'

import * as S from './styled'

const Me = () => (
  <S.MeWrapper to="/" className="me">
    <svg width={181} height={256}>
      <defs>
        <path id="prefix__a" d="M0 0h47v47H0z" />
        <path
          d="M15.73 1.87l.262.163C18.107.939 20.255.467 22.438.617l.364.03c3.463.347 9.35 1.732 12.928 15.583.77 5.156-.923 9.58-5.079 13.274-6.233 5.54-18.352-.924-18.93-2.886-1.461-1.231-3.682-3.771-4.375-10.389C5.915 4.895-1.563 6.59.295 3.418c.214-.366.5-.62.847-.79l-.155.097c5.285-3.322 10.2-3.607 14.744-.855z"
          id="prefix__c"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          className="fill stroke"
          d="M180.279 111.018c.017.106.033.243.047.409.06.723.078 1.956.053 3.697l-.706 1.06c-.365.584-.71 1.508-1.084 2.85-.329 1.177-2.067 8.794-2.705 11.126-.978 3.57-2.025 6.424-3.245 8.656-6.436 7.08-18.921 8.693-29.41 5.522-1.47-1.506-2.75-4.679-4.01-9.388a131.91 131.91 0 01-1.008-4.06 443.621 443.621 0 01-.431-1.85c-.164-.705-.28-1.19-.388-1.635-.693-2.837-1.428-4.578-2.68-6.076-.906-.78-1.829-1.175-2.765-1.175-.814 0-2.439.375-4.904 1.125l-.123.038-.041.121c-5.18 15.291-9.988 23.923-14.37 25.87-7.487 3.828-16.8 5.038-26.104 4.016-7.476-.82-14.04-3.122-15.206-5.06-.869-1.118-1.304-1.727-1.66-2.352-.563-.992-.882-1.989-1.205-3.762-.193-1.062-.29-1.71-.798-5.253 0-.334-.004-.673-.01-1.016-.054-2.832-.323-5.863-.736-8.912a93.712 93.712 0 00-.681-4.278 30.93 30.93 0 00-.065-.336l-.03-.152-.15-.04-4.087-1.115c-3.066-.837-3.066-.837-4.112-1.12l-13.099-2.23-4.144-.706.338-5.073c2.057.34 10.265 1.688 24.627 4.042l.114-.008c20.762-6.426 40.651-6.426 59.692.003 3.742.998 7.239 1.373 10.489 1.123.78-.06 1.802-.443 3.08-1.149 7.334-4.278 19.203-6.25 32.184-5.169 2.948.246 6.022.983 9.221 2.214l.112.043zm-56.258 7.165l-.047-.156c-4.354-6.011-25.048-8.032-45.953-4.56-3.774.628-5.125 1.514-6.784 3.728l-.064.086-.046.104c-2.233 12.123-1.031 24.619 1.575 27.739 4.565 3.72 12.793 5.004 22.614 4.236 7.808-.61 15.756-2.572 17.873-4.274 6.675-8.343 10.488-17.27 10.832-26.903zm52.658-5.42c-7.614-5.076-29.31-2.54-35.985 3.742l-.076.149h0c-.099.724-.18 1.271-.384 2.626-.826 5.485-1.044 8.02-.729 11.261.417 4.287 1.923 8.268 4.875 12.307l.141.095c11.493 2.873 21.802.972 27.75-6.026l.052-.097c.5-1.854 2.565-8.867 2.999-10.606 1.024-4.109 1.469-7.837 1.469-13.243v-.134l-.112-.074z"
          stroke="#222"
          strokeWidth={0.5}
          fill="#222"
        />
        <path
          className="fill stroke glasses"
          d="M180.279 111.018c.017.106.033.243.047.409.06.723.078 1.956.053 3.697l-.706 1.06c-.365.584-.71 1.508-1.084 2.85-.329 1.177-2.067 8.794-2.705 11.126-.978 3.57-2.025 6.424-3.245 8.656-6.436 7.08-18.921 8.693-29.41 5.522-1.47-1.506-2.75-4.679-4.01-9.388a131.91 131.91 0 01-1.008-4.06 443.621 443.621 0 01-.431-1.85c-.164-.705-.28-1.19-.388-1.635-.693-2.837-1.428-4.578-2.68-6.076-.906-.78-1.829-1.175-2.765-1.175-.814 0-2.439.375-4.904 1.125l-.123.038-.041.121c-5.18 15.291-9.988 23.923-14.37 25.87-7.487 3.828-16.8 5.038-26.104 4.016-7.476-.82-14.04-3.122-15.206-5.06-.869-1.118-1.304-1.727-1.66-2.352-.563-.992-.882-1.989-1.205-3.762-.193-1.062-.29-1.71-.798-5.253 0-.334-.004-.673-.01-1.016-.054-2.832-.323-5.863-.736-8.912a93.712 93.712 0 00-.681-4.278 30.93 30.93 0 00-.065-.336l-.03-.152-.15-.04-4.087-1.115c-3.066-.837-3.066-.837-4.112-1.12l-13.099-2.23-4.144-.706.338-5.073c2.057.34 10.265 1.688 24.627 4.042l.114-.008c20.762-6.426 40.651-6.426 59.692.003 3.742.998 7.239 1.373 10.489 1.123.78-.06 1.802-.443 3.08-1.149 7.334-4.278 19.203-6.25 32.184-5.169 2.948.246 6.022.983 9.221 2.214l.112.043z"
          // className="glasses"
          stroke="#222"
          strokeWidth={0.5}
          fill="#222"
        />
        <path
          className="fill"
          d="M25.293 29.358c-6.194 1.982-9.786 4.46-10.777 7.432C-1.34 59.83-3.569 86.091 7.827 115.573c.148-6.076 6.689-13.007 14.865-5.575.127.116.269.225.425.328l-.054.044c1.487 1.734 3.22 5.079 5.203 10.034l.03.001c3.811 10.955 7.355 20.536 6.659 29.356-1.734 24.775.248 40.754 5.946 47.939 24.03 31.959 40.134 50.168 48.31 54.627 12.263 6.69 62.431 1.487 66.147-14.121 3.717-15.608-1.858-22.297-1.858-22.297-2.973-11.644-2.973-20.067 0-25.27l-4.83.372-4.832 22.668c-6.193-5.698-8.67-9.538-7.432-11.52l-11.148 2.601c.743 9.662-.62 14.989-4.088 15.98-18.085 6.193-31.464 6.317-38.648-1.115l-3.345-2.601.743.371c-14.864-8.918-25.022-21.801-30.472-38.648-12.133-29.526-8.998-56.763-8.296-61.653.43-2.177.407-4.508-.071-6.99l.563-.106c-.248-4.955 3.468-12.882 11.148-23.783C47.838 76.8 46.6 66.519 49.076 55.37c43.645-11.006 70.897-13.732 81.756-8.176 15.98 8.176 22.885 20.575 26.756 39.02 5.203-4.955 8.671-9.414 10.405-13.378 2.23-25.518-13.502-47.195-47.195-65.033C94.538-6.566 62.702.619 25.293 29.358z"
          fill="#222"
        />
        <g transform="rotate(-16 711.21 -291.576)">
          <mask id="prefix__b" fill="#fff">
            <use xlinkHref="#prefix__a" />
          </mask>
          <g mask="url(#prefix__b)">
            <g transform="translate(6.714 9.398)" className="tongue">
              <path
                className="stroke"
                stroke="#222"
                strokeWidth={2.565}
                d="M16.057.574c2.111-.972 4.275-1.387 6.489-1.235l.384.032c6.458.646 10.993 4.736 14.042 16.538l.027.132c.834 5.592-1.023 10.445-5.496 14.421-3.175 2.823-7.798 3.149-12.807 1.64-3.632-1.093-7.074-3.081-8.01-4.684-2.416-2.137-4.025-5.416-4.612-11.028-.462-3.652-1.563-6.018-3.197-7.673C2.128 7.96-.225 6.321-.31 6.245c-1.071-.95-1.287-2.135-.502-3.475a3.225 3.225 0 011.33-1.263C5.987-1.857 11.23-2.192 16.056.574z"
              />
              <mask id="prefix__d" fill="#fff">
                <use xlinkHref="#prefix__c" />
              </mask>
              <use fill="#E80000" xlinkHref="#prefix__c" />
              <path
                d="M15.182 1.646c7.232 3.3 10.576 8.955 10.032 16.962"
                stroke="#B80000"
                strokeWidth={1.71}
                strokeLinecap="round"
                mask="url(#prefix__d)"
                transform="rotate(6 20.227 10.127)"
              />
            </g>
          </g>
        </g>
        <path
          className="fill"
          d="M137.15 187.666c1.734-1.734 3.468-1.734 5.202 0 0 0 6.689 3.345 11.892 1.858 1.478-.422 3.374 2.258 4.087 1.115.64-1.025.64-4.37 0-10.034l-12.635-6.689c-2.725-1.238-4.707-1.238-5.945 0-2.726 1.734-5.45 2.23-8.176 1.487-4.088-1.115-20.81 7.06-20.81 7.06-11.397 2.23-17.219 4.955-17.466 8.176-2.973 11.644-4.831 18.457-5.575 20.439 11.892-8.423 19.077-12.14 21.554-11.149 2.725-3.716 6.813-5.574 12.263-5.574 9.29-2.601 13.007-4.088 15.608-6.689z"
          fill="#222"
        />
        <g transform="matrix(-1 0 0 1 30.124 152.363)">
          <path
            className="stroke"
            d="M2.23 14.865c2.257 0 4.087-3.328 4.087-7.433C6.317 3.328 4.487 0 2.23 0"
            stroke="#222"
            strokeWidth={0.743}
          />
          <circle className="fill" fill="#222" cx={1.858} cy={15.236} r={1.858} />
        </g>
        <g transform="matrix(-1 0 0 1 24.178 150.133)">
          <path
            className="stroke"
            d="M2.23 14.865c2.257 0 4.087-3.328 4.087-7.433C6.317 3.328 4.487 0 2.23 0"
            stroke="#222"
            strokeWidth={0.743}
          />
          <circle className="fill" fill="#222" cx={1.858} cy={15.236} r={1.858} />
        </g>
      </g>
    </svg>
  </S.MeWrapper>
)

export default Me
